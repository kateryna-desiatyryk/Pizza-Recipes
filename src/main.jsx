import { createRoot } from "react-dom/client";
import "./app/styles/index.css";
import App from "./app/App.jsx";
import ThemeProvider from "./app/providers/ThemeProvider.jsx";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store/store.js";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
);

// import { NavLink } from 'react-router-dom' ;
// {/* Использование NavLink для создания активных ссылок */}
// <NavLink
// to="/about"
// style={({ isActive }) → ({
// color: isActive ? 'red' : 'blue',
// 70}
// About </NavLink>
