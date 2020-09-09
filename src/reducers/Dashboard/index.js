import { FETCH_DASHBOARD } from '../../constants/ActionType';

const initialState = {
  dashboardData: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_DASHBOARD: {
      let data = [];
      if(action.payload && action.payload.data) {
        data = action.payload.data;
      }

      return Object.assign({}, state, { dashboardData: data });
    }
    default: {
      return state;
    }
  }
}
