type TPlanState = { story_id: number };

type TPlanAction = { type: string; payload: {} };

const initState: TPlanState = {
  story_id: 0,
};

const PlanReducer = (state: TPlanState = initState, action: TPlanAction) => {
  switch (action.type) {
  }
  return state;
};

export default PlanReducer;
