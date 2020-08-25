import { enableES5 } from 'immer';
import 'nprogress/nprogress.css';
// import 'prismjs/components/prism-bash';
// import 'prismjs/components/prism-javascript';
// import 'prismjs/components/prism-jsx';
// import 'prismjs/prism';
import React from 'react';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import ReactDOM from 'react-dom';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import 'react-perfect-scrollbar/dist/css/styles.css';
import 'react-quill/dist/quill.snow.css';
import { Provider } from 'react-redux';
import App from 'src/App';
// import 'src/assets/css/prism.css';
import { SettingsProvider } from 'src/contexts/SettingsContext';
import 'src/mixins/chartjs';
import * as serviceWorker from 'src/serviceWorker';
import store from 'src/store';
import 'src/__mocks__';

enableES5();

ReactDOM.render(
  <Provider store={store}>
    <SettingsProvider>
      <App />
    </SettingsProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.register();
