import './index.css';
import store from './redux/store';
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';

let renderProject = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
        state={state}
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderProject(store.getState());
store.subscriber(renderProject);
