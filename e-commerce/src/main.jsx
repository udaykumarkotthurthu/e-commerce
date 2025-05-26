import ReactDOM from 'react-dom/client';
import "bootstrap-icons/font/bootstrap-icons.css";
import App from './App';
import "./index.css";
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import Admin from './Pages/Admin';

const fullURL = window.location.pathname;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={Store}>
    <BrowserRouter>
      {
          fullURL === "/shop-now/admin" ? 
          <Admin/> : <App />
        }
    </BrowserRouter>
  </Provider>

)