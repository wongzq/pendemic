import React from "react";
import ReduxStore, { TReduxDispatch, TReduxState } from "@redux/store/store";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

const useReduxStore = (initState: TReduxState) => {
  const store = React.useMemo(() => ReduxStore.init(initState), [initState]);
  return store;
};

const useReduxSelector: TypedUseSelectorHook<TReduxState> = useSelector;

const useReduxDispatch = () => useDispatch<TReduxDispatch>();

const useRedux = {
  store: useReduxStore,
  selector: useReduxSelector,
  dispatch: useReduxDispatch,
};

export default useRedux;
