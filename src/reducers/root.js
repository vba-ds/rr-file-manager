/**
 * Root reducer
 */

import {combineReducers} from 'redux';
import folder from './folder';
import file from './file';

const rootReducer = combineReducers({
    folder,
    file
});

export default rootReducer;
