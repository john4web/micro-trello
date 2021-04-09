import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { saveLocalStorage } from "./store/localStorage";

store.subscribe(() => {
  saveLocalStorage(store.getState());
});

ReactDOM.render(
  /*<React.StrictMode>*/
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  /*</React.StrictMode>,*/ document.getElementById("root")
);
