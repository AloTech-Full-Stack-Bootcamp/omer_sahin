import {useState,useEffect} from 'react';
import './App.css';
import List from './components/list';
function App() {
  let initialStater=[
    {
      id:1,
      txt:"Learn Node js",
      complete:false,
    }, 
    {
      id:2,
      txt:"Learn React",
      complete:false,
    },
    {
      id:3,
      txt:"Have a life!",
      complete:false,
    },

  ]
  // Localstorage ve state tanımları
  const [list, setlist] = useState(JSON.parse(localStorage.getItem('user'))|| initialStater)
  const [newlist, setnewlist] = useState("")
  const [viewlist,setviewlist]=useState({active:false,completed:false,allcomplete:true})
  const [mark, setmark] = useState(true)
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(list) );
  }, [list])
  
  // Listeye eleman ekleme
  const handlechange= (e)=>{
     
     if (e.key === "Enter"  )
      { if (newlist === "" || newlist.replace(/\s/g,"").length === 0)
          {alert("listeye boşluk eklenemez!!") }
      else {
          setlist([...list ,{id:Date.now(),txt:newlist,complete:false,}])}
          e.preventDefault();
          setnewlist("")  
        }    
  }
  //   Mark all as complete   
  const markallcomplete= ()=>{
    setmark(!mark)
    mark ? setlist(list.map ((el) => el.complete ? {...el, complete:false  } :{...el, complete:false})):
    setlist(list.map ((el) => el.complete ? {...el, complete:true  } :{...el, complete:true}));
    
  }
  

  return (
    <div className="App">
      <section className="todoapp">
        <header className="header">
          <h1>todos</h1>
          <form>
              <input className="new-todo" value={newlist} 
              placeholder="What needs to be done?" autoFocus 
              onKeyPress={handlechange}
              onChange={(e)=>setnewlist(e.target.value)}/>
          </form>
	      </header>
        <section className="main">
          <div className="toggle-all"/>
          <label htmlFor="toggle-all" onClick={markallcomplete} >Mark all as complete </label>
          <ul className="todo-list" >
          {/* // List componenti  */}
          { viewlist.allcomplete ? <List list={list} setlist={setlist}/>: null}
          { viewlist.active ? <List list={list.filter(elmn => elmn.complete===false )} setlist={setlist}/>: null}
          { viewlist.completed ? <List list={list.filter(elmn => elmn.complete===true )} setlist={setlist}/>: null}
          </ul>
        </section>
       
	      <footer className="footer">
          <span className="todo-count">
            <strong>{list.length} </strong>
              items left
          </span>
            <ul className="filters">
              <li>
                <button  onClick={()=> setviewlist({active:false,completed:false,allcomplete:true})}>All </button  >
              </li>
              <li>
                <button   onClick={()=>setviewlist({active:true,completed:false,allcomplete:false})}>Active</button >
              </li>
              <li>
                <button   onClick={()=>setviewlist({active:false,completed:true,allcomplete:false}) }>Completed</button >
              </li>
            </ul>
          {list.filter(elmn => elmn.complete===true ).length >0 ? 
          <button className="clear-completed" onClick={() => setlist(list.filter(elmn => elmn.complete===false ))}>
          Clear completed
      </button>:null                   }
          
        </footer>
          
                
      </section>
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>Created by <a href="https://d12n.me/">Dmitry Sharabin</a></p>
        <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
      </footer>
      
    </div>
  );
}

export default App;
