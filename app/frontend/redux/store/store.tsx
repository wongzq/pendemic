import { applyMiddleware, combineReducers, createStore } from "redux";
import WriteReducer from "@redux/reducers/write.reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import PlanReducer from "@redux/reducers/plan.reducer";

export type TReduxStore = ReturnType<typeof hydrateStore>;
export type TReduxState = ReturnType<typeof dummyStore.getState>;
export type TReduxDispatch = typeof dummyStore.dispatch;

let store: TReduxStore | null = null;

const AppReducer = combineReducers({
  Write: WriteReducer,
  Plan: PlanReducer,
});

const dummyStore = createStore(AppReducer);

const hydrateStore = (state: TReduxState) => {
  return createStore(AppReducer, state, composeWithDevTools(applyMiddleware()));
};

const initStore = (state: TReduxState) => {
  let _store = store ?? hydrateStore(state);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (state && store) {
    _store = hydrateStore({ ...store.getState(), ...state });
    // Reset the current store
    store = null;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export const ReduxStore = { init: initStore };

export default ReduxStore;
