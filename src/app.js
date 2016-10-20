import React from 'react';
import {render} from 'react-dom';
import configureStore from './store/configureStore';
import FileManager from './containers/FileManager';

const store = configureStore();

render(
    <FileManager store={store} />,
    document.getElementById('root')
);
