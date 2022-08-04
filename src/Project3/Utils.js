import axios from 'axios';
//==========================================================================================
const getUsers = () =>
{  
    return axios.get("https://jsonplaceholder.typicode.com/users");
}
//==========================================================================================
const getComplated =  async (userID) =>
{  
    let resp = await axios.get("https://jsonplaceholder.typicode.com/todos?userId=" + userID);
    let comp = resp.data[0];    
    //to finish
    return comp;
}
//==========================================================================================
const getUserData =  async (userID) =>
{  
    let resp = await axios.get("https://jsonplaceholder.typicode.com/users/" + userID);
    let comp = resp.data.address;    
    comp = { "street":comp.street , "city":comp.city , "zipcode":comp.zipcode};
    return comp;
}
//==========================================================================================
const searchData =  async (e) =>
{  
    var obj = []

    let resp = await axios.get("https://jsonplaceholder.typicode.com/users");
    resp.data.map((x, id) =>
    {
        if((x.name).startsWith(e) || (x.email).startsWith(e))
        {
             obj = [...obj,  x];
        }
    })
    return obj;
}
//==========================================================================================
const getPosts =  async (userID) =>
{  
    let resp = await axios.get("https://jsonplaceholder.typicode.com/posts/"  + userID);
    return resp;
}
//==========================================================================================
const getTodos =  async (userID) =>
{  
    let resp = await axios.get("https://jsonplaceholder.typicode.com/todos/"  + userID);
    return resp;
}

export default {getUsers, getComplated, getUserData,searchData, getPosts, getTodos}