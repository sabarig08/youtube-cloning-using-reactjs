import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Component/Header';
import Sidebar from './Component/Sidebar';
import Content from './Component/Content';
import './index.css';

function Main(){
  return(
    <div>
     <Header/>
     <Sidebar/>
     <Content/>
    </div>
  )
}
ReactDOM.render(<Main/>,document.getElementById('root'));