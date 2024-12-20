import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import store from '../store.jsx'
import { ToastContainer } from 'react-toastify'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
        <ToastContainer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
