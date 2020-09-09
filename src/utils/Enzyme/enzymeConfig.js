import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

export const config = configure({ adapter: new Adapter() });
