import React from 'react';
import './App.css';
import './index.css';
import { AllRoutes } from './Routers/AllRoutes';
import {Header,Footer} from './components/index'


function App() {
  return (<div className='bg-slate-100 dark:bg-slate-800'>
    <Header/>
    <AllRoutes/>
    <Footer/>
    </div>
  
  );
}

export default App;
