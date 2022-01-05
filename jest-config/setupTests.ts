/// <reference types="jest" />

import 'jsdom-global/register';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });