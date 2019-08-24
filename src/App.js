import React, { useState } from 'react';
import './App.css';
import './components/ListImage.css';
import ListImage from './components/ListImage'



const data = [
  "https://tipsparatuviaje.com/wp-content/uploads/2018/08/cinco-lagos-fuji.jpg",
  "https://intriper.com/wp-content/uploads/2016/06/Monte-Fuji-Japon.jpg",
  "https://img.ev.mu/images/articles/960x/826765.jpg",
  "https://mk0viajeroa4ra28voan.kinstacdn.com/wp-content/uploads/2018/10/viajar_a_japon_en_invierno-768x480.jpg"
]


function App() {
  return (
    <div className="App">
      <ListImage dataImages={data} />   
    </div>
  );
}

export default App;
