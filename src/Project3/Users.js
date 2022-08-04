import utils from './Utils';
import {useState} from 'react'
import UserComp from './User';

function UsersComp() {

  const [users, setUsers] = useState([])

//-------------------------------------------------
//When pressing “Delete” – All the user’s data is being deleted
  const deleteUser =(id) =>
  {
    let newObj=[];
    users.map((element)=>
    {
      if(element.id != id)
      {
        newObj = [...newObj,  element];
      }
    })
    setUsers(newObj);
  }
  //-------------------------------------------------
  //When editing the data and pressing “Update” – The user’s data is being updated
  const updateUser =(userUpdating) =>
  {
    console.log(userUpdating)

    users[ userUpdating.id-1].name = userUpdating.name;
    users[ userUpdating.id-1].email = userUpdating.email;
    document.getElementById('message').innerHTML = 'Updated!';
  }
//-------------------------------------------------
//get users from utils that receives the users from the server
  const getUsers = async() =>
  {
    let resp = await utils.getUsers();
    setUsers(resp.data);
  }
//-------------------------------------------------
//When entering a text in the “search” text box, the users list will presents anly users that 
//their name or email contains that text

  const searchData = async(e) =>
  {
    let resp = await utils.searchData(e);
    setUsers(resp);
  }
//-------------------------------------------------

  return (
    <div className="App">

      <text>Search</text>
      <input type="text" id='Search'  onChange={ (e) => searchData(e.target.value)}  />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="button" value="Add" /*onClick={}*/ /> <br/>

      <input type="button" value="Get Users" onClick={getUsers}  /> <br/>


      {
        users.map(item =>
          {
            return <UserComp userData={item} key={item.id} callback={id=>deleteUser(id)} callback2={user => updateUser(user) } />            
          })
      }

    </div>
  );
}

export default UsersComp;
