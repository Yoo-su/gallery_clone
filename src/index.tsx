import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { RecoilRoot } from "recoil";
import "./styles/global.css";

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
);

