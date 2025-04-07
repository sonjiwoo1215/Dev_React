import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let name = '지우';
  // const style = {
  //   backgroundColor:'beige',
  //   color: 'black',
  //   fontSize: '48px',
  //   fontWeight: 'bold',
  //   padding: '20px'
  // }

  return (
    // <div style={
    //   {
    //     backgroundColor:'beige',
    //     color: 'black',
    //     fontSize: '48px',
    //     fontWeight: 'bold',
    //     padding: '20px'
    //   }
    // }>
    <div className='container'>
      <h1 className='test'>안녕 {
      name === '지우' ? (<h1>YES</h1>) : null
      }</h1>
      <p>반가워</p>
      <br></br>
      <br/>
      <input></input>
      <input/>
      {/* 
      작성자 : 손지우
      작성일 : 250407
      내용 : 주석문 다는법법
      */}
    </div>
  );


  // const port = undefined;
  // return(
  //   <div>
  //     {
  //       port || '3000'
  //     }
  //   </div>
  // );
}

export default App;
