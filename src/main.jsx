import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Aos from 'aos'
import "aos/dist/aos.css"

ReactDOM.createRoot(document.getElementById('root'), Aos.init()).render(
   <BrowserRouter>
     <App />
   </BrowserRouter>
 
 )