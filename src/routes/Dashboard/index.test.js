import React from 'react';
import { mount, shallow } from 'enzyme';
import Dashboard from './index';
import { config } from '../../utils/Enzyme/enzymeConfig';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import store from '../../store';
import thunk from 'redux-thunk';

describe('Test Dashboard component', () => {
  beforeAll(() => {
    sessionStorage.setItem('authenticated', 'xxxxx');
  });

  afterAll(() => {
    sessionStorage.removeItem('authenticated');
  });

  it('snapshot test', () => {
    const initialState = {
      dashboardData: {
        data: 'aaa'
      }
    };
    const mockStore = configureStore();

    let wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Dashboard />
        </BrowserRouter>
      </Provider>
    );

    expect(wrapper.debug()).toContain('dashboard data');
    expect(wrapper).toMatchSnapshot();
  });

});
