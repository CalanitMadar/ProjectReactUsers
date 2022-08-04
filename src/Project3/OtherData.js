import { useState } from 'react';
import utils from './Utils';


function OtherDataComp(props) {



  return (
  <div>
    <br></br><br></br>
    <div className="App" style={{ width : "180px",borderStyle : "solid", borderColor : "blue"}}>
      
        Street: {props.tasks.street}<br></br>
        City: {props.tasks.city}<br></br>
        Zipcode: {props.tasks.zipcode}<br></br>
        </div><br/>
    </div>
    
  );
}

export default OtherDataComp;
