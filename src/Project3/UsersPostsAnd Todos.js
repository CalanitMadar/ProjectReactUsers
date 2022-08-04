import utils from './Utils';
import {useState} from 'react'
import UserComp from './User';

function UsersPostsAndTodosComp(props) {

  const [posts, setPosts] = useState({title:'', body:''});
  const [todos, setTodos] = useState({title:'', completed:''});
  //-------------------------------------------------

  const getPosts = async () =>
  {
    let data = await utils.getPosts(props.tasks.id);
    setPosts({title:data.data.title, body: data.data.body});
    console.log(data.data.title);
    console.log(data.data.body);
  }
  //-------------------------------------------------

  const getTodos = async () =>
  {
    let data = await utils.getTodos(props.tasks.id);
    setTodos({title:data.data.title, completed: data.data.completed});

    console.log(todos);
    console.log(todos.completed);
  }
//-------------------------------------------------

  return (
  <div className="App" style={{position:'left', width : "400px",borderStyle : "solid", borderColor : "orange" }}>
    id: {props.tasks.id}<br></br>
    <button onClick={getPosts}>get posts</button><br/>
    <button onClick={getTodos}>get todos</button><br/>
    <strong>Title: </strong> {posts.title}<br/>
    <strong>Posts: </strong>{posts.body} <br/>
    <strong>Title: </strong>{todos.title}<br/>
    <strong>Complated: </strong>{todos.completed?"true":"false"} <br/>
    

    </div>
  );
}

export default UsersPostsAndTodosComp;
