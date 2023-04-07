import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './GlobalStyles'
import { ToastContainer } from 'react-toastify';
import Home from './pages/home'
import { Provider } from 'react-redux'
import store from './redux/store'
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './pages/singup';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route exact path="/" Component={SignUp} />
          <Route path="/home" Component={Home} />
        </Routes>
      </Router>
      <GlobalStyles />
      <ToastContainer />
    </Provider>
  </React.StrictMode>,
)
