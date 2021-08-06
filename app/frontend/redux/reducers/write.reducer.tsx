type TWriteState = { story_id: number };

type TWriteAction = { type: string; payload: {} };

const initState: TWriteState = {
  story_id: 0,
};

const WriteReducer = (state: TWriteState = initState, action: TWriteAction) => {
  switch (action.type) {
  }
  return state;
};

export default WriteReducer;
