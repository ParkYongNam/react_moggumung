import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';


import Head from './component/layout/Head';
import Main from './component/Main';
import Footer from './component/layout/Footer'

import 'bootstrap/dist/css/bootstrap.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Head></Head>
  <Main></Main>
    
  <Footer></Footer>
    
 
  </BrowserRouter>
);


