import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchDashboardData } from '../../actions/Dashboard';
import tokenValidator from '../../utils/Validator';
import Logout from '../../components/Logout';
import { useToasts } from 'react-toast-notifications';

import './index.scss';

export function Dashboard({ history }) {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const data = useSelector(state => state.dashboard);

  useEffect(() => {
    const token = tokenValidator('token', history, '/');
    if (token != null) {
      dispatch(fetchDashboardData(token, addToast));
    }
  }, [history, dispatch]);

  const constructData = () => {
    const dashBoardData = data.dashboardData;
    console.log('dashBoardData', dashBoardData);

    let labelList = [];
    for (let item of dashBoardData) {
      if (item.bands && item.bands.length > 0) {
        for (let band of item.bands) {
          if (band.recordLabel) {
            addLabel(labelList, band, band.recordLabel, item);
          } else {
            // if no record label, put to unknown
            addLabel(labelList, band, 'Unknown', item);
          }
        }
      }
    }

    console.log('labelList', labelList);

    return (
      <div>
        {labelList.map(each => {
          return (
            <div>
              <br />
              <label className="dashboard__festival-list-label-div">
                {each.labelName}
              </label>
              {each.bands &&
                each.bands.map(band => {
                  return (
                    <div className="dashboard__festival-list-band-div">
                      <div>- {band.bandName}:</div>
                      {band.festivalList &&
                        band.festivalList.map(festival => {
                          return (
                            <div className="dashboard__festival-list-festival-div">
                              - {festival}
                            </div>
                          );
                        })}
                    </div>
                  );
                })}
            </div>
          );
        })}
      </div>
    );
  };

  const addLabel = (labelList, band, labelName, festivalItem) => {
    const label = labelList.find(label => label.labelName === labelName);
    if (label && label.bands) {
      const labelBand = label.bands.find(each => each.bandName === band.name);
      if (labelBand) {
        labelBand.festivalList.push(
          festivalItem.name ? festivalItem.name : 'Unknown'
        );
        labelBand.festivalList.sort(); // sort festival order
      } else {
        // if band not found, add a new record to it
        label.bands.push({
          bandName: band.name,
          festivalList: [festivalItem.name ? festivalItem.name : 'Unknown']
        });
      }
    } else {
      // if label not found, add a new record to it
      labelList.push({
        labelName: labelName,
        bands: [
          {
            bandName: band.name,
            festivalList: [festivalItem.name ? festivalItem.name : 'Unknown']
          }
        ]
      });
    }
  };

  const fetchFestival = () => {
    const token = sessionStorage.getItem('token');
    dispatch(fetchDashboardData(token, addToast));
  };

  const displayData = () => {
    return (
      <div>
        <div className="dashboard__fetch-festival-list-div">
          <button onClick={fetchFestival}>Fetch Festival List</button>
        </div>
        <div>
          <div className="dashboard__festival-list-div">Festival List:</div>
          <div>{constructData()}</div>
        </div>
      </div>
    );
  };

  return (
    <div>
      <div>
        <div className="dashboard__welcome-div">Welcome to dashboard!</div>
        <div className="dashboard__logout-div">
          <Logout />
        </div>
      </div>
      <div className="dashboard__content-div">{displayData()}</div>
    </div>
  );
}

export default withRouter(Dashboard);
