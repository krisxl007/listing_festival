import { FETCH_DASHBOARD } from '../../constants/ActionType';
import { GET } from '../../utils/Api';
import { ERROR, WARNING } from '../../constants/Toast';

export const fetchDashboardData = (token, addToast) => dispatch => {

  const url = 'http://eacodingtest.digital.energyaustralia.com.au/api/v1/festivals';
  const header = {
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json"
    }
  };

  GET(url, header).then(response => {
    if(response.data === "") {
      addToast('No festival data found, please fetch it again.', WARNING)
    }
    
    dispatch({
      type: FETCH_DASHBOARD,
      payload: {
        data: response.data
      }
    });
  }).catch(error => {
    if(error.response) {
      addToast(error.response.data, ERROR)
    }else {
      addToast(error.message, ERROR)
    }
    
    dispatch({
      type: FETCH_DASHBOARD,
      payload: {
        data: ''
      }
    });
  })

};
