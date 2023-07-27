// Define your action types
export const SET_REGION_INFO = 'SET_REGION_INFO';
export const LOAD_REGION_INFO = 'LOAD_REGION_INFO';

// Action creators
export const setRegionInfo = (regionInfo) => ({
  type: SET_REGION_INFO,
  payload: regionInfo,
});

export const loadRegionInfo = (selectedRegion) => {
    const regionInfo = {
        currency: 'INR',
        speedUnits: 'kmph',
        distanceUnits: 'kilometers',
        volumeUnits: 'liters',
        timezone: 'GMT+5:30',
      };
    
      return (dispatch) => {
        dispatch(setRegionInfo(regionInfo));
      };

};
