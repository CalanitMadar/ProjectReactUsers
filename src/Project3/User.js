import { useState } from 'react';
import utils from './Utils';
import OtherDataComp from './OtherData';
import UsersPostsAndTodosComp from './UsersPostsAnd Todos';


function UserComp(props) {
  
  //const [showColor, setShowColor] = useState(false);
  //const [showTasks, setShowTasks] = useState(false);
  //const [showDelete, setDelete] = useState(false);
 // const [todos, setTodos] = useState([]);

 const [showOtherData, setOtherData] = useState(false);
 const [showAllUserData, setAllData] = useState(false);
 const [data, setData] = useState([]);
 const [inputValueName, setInputValueName] = useState(props.userData.name);
 const [inputValueEmail, setInputValueEmail] = useState(props.userData.email);
 const [user, setUser] = useState({name : inputValueName, email : inputValueEmail, id: props.userData.id})


////-----------------------------------------------
  const handleChangeEmail = (e) => {
    setInputValueEmail(e.target.value);
    setUser({name: inputValueName, email : e.target.value, id:props.userData.id})
  };
  const handleChangeName = (e) => {
    setInputValueName(e.target.value);
    setUser({name: e.target.value,email : inputValueEmail, id:props.userData.id})
  };




  
//-----------------------------------------------
  const getCompleted = async () =>
  {
    //let complated = await utils.getComplated(props.userData.id);
    //setShowColor(complated);
   // console.log(complated);
  }

//-----------------------------------------------
  const getTasks = async () =>
  {
    /*setShowTasks(true);
    let userTodos = await utils.getUserTasks(props.userData.id);
    setTodos(userTodos);*/
  }

  //-----------------------------------------------
  const lessData = async () =>
  {
    setOtherData(false);
  }

  //-----------------------------------------------
  const mouseOver = async () =>
  {
    setOtherData(true);
    let userData = await utils.getUserData(props.userData.id);
    setData(userData);
  }
//-----------------------------------------------
  const allUserData = ()=>
  {
    setAllData(true);
  }

  
//================================================================================


  return (
    
    
    <div className="App" style={{ width : "400px",borderStyle : "solid", borderColor : "red"}}>

        ID: <button onClick={allUserData}>{props.userData.id} </button><br/>
        Name : <input type="text" id="fullName" value={inputValueName} onChange={handleChangeName}/><br/>
        Email : <input type="text" id="email" value={inputValueEmail} onChange={handleChangeEmail}/><br/>



      <button type="button" onClick={lessData} onMouseOver={mouseOver}>Other Data</button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


      <input type="button" value="Update" onClick={() => props.callback2(user) } /> 
      <button type='button' onClick={()=>props.callback(props.userData.id) }>Delete</button>
      
      <p id='message' color='red'></p>


      {
        showOtherData && <OtherDataComp tasks={data}  />
      }
      {
        showAllUserData && < UsersPostsAndTodosComp tasks={user} />
      }



    <br/>
    </div>
    
  );
}

export default UserComp;
