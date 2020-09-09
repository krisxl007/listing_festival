import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { loginValidationSchema } from '../../utils/Validator/ValidationSchema';
import { useToasts } from 'react-toast-notifications';
import { ERROR, INFO } from '../../constants/Toast';
import { POST } from '../../utils/Api';

import './index.scss';

const Login = ({ history }) => {
  const { addToast } = useToasts();
  const initForm = {
    username: '',
    password: ''
  };
  const [form, setFormValues] = useState(initForm);

  const updateField = e => {
    setFormValues({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const login = e => {
    e.preventDefault();
    let error = loginValidationSchema.validate(form).error;
    if (error == null) {
      // hardcoded login as admin/admin here as no backend required for this test.
      if (form.username === 'admin' && form.password === 'admin') {
        sessionStorage.setItem('token', 'loginMockToken');
        history.push('/dashboard');
      } else {
        addToast(
          'Username/Password combination is incorrect, please try again.',
          INFO
        );
        setFormValues(initForm);
      }
    } else {
      addToast(error.message, ERROR);
    }
  };

  return (
    <div className="login-body">
      <div className="login-header">
        <div className="login-header__logo">
          <label className="login-header__logo--label">LOGO</label>
        </div>
      </div>
      <div>
        <div className="login-body__login-box">
          <form name="loginForm" onSubmit={login}>
            <div className="login-body__login-box--login">LOGIN</div>
            <div>
              <div className="login-body__login-box--label-block">
                <label>USERNAME</label>
              </div>
              <div>
                <input
                  className="login-body__login-box--input-box"
                  name="username"
                  type="text"
                  value={form.username}
                  onChange={updateField}
                  placeholder=" username..."
                />
              </div>
            </div>
            <div>
              <div className="login-body__login-box--label-block">
                <label>PASSWORD</label>
              </div>
              <div>
                <input
                  className="login-body__login-box--input-box"
                  name="password"
                  type="password"
                  value={form.password}
                  onChange={updateField}
                  placeholder=" password..."
                />
              </div>
            </div>

            <div className="login-body__login-box--label-block">
              <input
                className="login-body__submit-btn"
                type="submit"
                value="LOGIN"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
