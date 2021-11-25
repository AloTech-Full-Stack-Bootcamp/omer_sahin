import React from 'react'

function List({setlist,list}) {

    return (
        <>
             {list.map((item)=><li key={item.id} className={item.complete ? "completed":null}>
              <div className="view">
                    <input className="toggle" type="checkbox" checked={item.complete}  
                    onChange={() =>{setlist(list.map(el => el.id===item.id ? {...el, complete:!el.complete}:el))} }/>
                    <label>{item.txt }</label>
                    <button className="destroy"  onClick={() => setlist(list.filter(elmn => elmn.id!==item.id))}></button>
              </div>
            </li>)} 
            
        </>
    )
}

export default List
