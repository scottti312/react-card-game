import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

let theme = 'light';
document.body.classList.add(theme);

function changeTheme() {
  if (document.body.classList.contains('light')) {
    document.body.classList.remove('light');
    document.body.classList.add('dark');
    theme = 'dark';
  } else if (document.body.classList.contains('dark')) {
    document.body.classList.remove('dark');
    document.body.classList.add('light');
    theme = 'light';
  }
}

root.render(
  <React.StrictMode>
    <button onClick={changeTheme}>Change Theme</button>
    <App />
  </React.StrictMode>
);