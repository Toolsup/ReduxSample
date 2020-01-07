import {CHANGE_COUNT} from '../actions/type';

const initialState = {
  count: 0
};

const countReducer = (state = initialState, action) => {
    switch(action.type) {
    case CHANGE_COUNT:
      return {
      ...state,
      count:action.payload
    };
    default:
      return state;
    }
}
export default countReducer;



