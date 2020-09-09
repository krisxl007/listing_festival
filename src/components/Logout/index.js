import React from 'react';
import { withRouter } from 'react-router-dom';
import Popup from 'reactjs-popup';
import './index.scss';

function Logout({ history }) {
  const logout = () => {
    sessionStorage.removeItem('token');
    history.push('/');
  };

  const Userlogout = () => {
    return (
      <div>
        <Popup trigger={<button className="btn--green"> Logout</button>} modal>
          {close => (
            <div>
              <div className="header">User Logout</div>
              <div className="content">Would you like to logout?</div>
              <div className="actions">
                <button type="button" className="btn--lightgray" onClick={logout}>
                  Yes
                </button>
                <button type="button" className="btn--lightgray" onClick={close}>
                  No
                </button>
              </div>
              <div className="close" onClick={close}>
                &times;
              </div>
            </div>
          )}
        </Popup>
      </div>
    );
  };

  return <Userlogout />;
}

export default withRouter(Logout);
