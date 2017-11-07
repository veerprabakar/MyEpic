import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from './components';

import registerServiceWorker from './registerServiceWorker';

// import '../node_modules/bootstrap/dist/css/bootstrap-reboot.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

// import 'antd/dist/antd.css';
// Import default Bootstrap 4 CSS
import 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(
  <App/>,
  document.getElementById('root') as HTMLElement
);

registerServiceWorker();
