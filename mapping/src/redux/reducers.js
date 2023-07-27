// src/redux/reducers.js
import { SET_REGION_INFO, LOAD_REGION_INFO } from './actions';

const initialState = {
  regionInfo: null,
};

const regionReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_REGION_INFO:
      return {
        ...state,
        regionInfo: action.payload,
      };
    
    default:
      return state;
  }
};

export default regionReducer;
