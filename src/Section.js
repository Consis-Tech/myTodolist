import React from 'react'
import shortid from 'shortid'

const Section = () => {
  
const [update,setupdate]=React.useState({items:"",id:""});

const [todo,setTodo]=React.useState([]);






function handleclick(event){
  
  const newupdate={items:event.target.value,id:shortid.generate()}
  setupdate(newupdate) 
};








function handlesubmit(e){
e.preventDefault();



setTodo(prevtodo=>{return[...prevtodo,{har:update.items,had:update.id}]})

setupdate({items:""});

      

};




const newarr=todo.map(item=>{
  return (<div className='section--flex'><input className='section--item' type='checkbox' key={item.had} ></input><label className='section--label'>{item.har}  </label>
  <button className='section--button' type='button'onClick={()=>handledelete(item.had)}>delete</button></div>)})


function handledelete(myid){
  
  
  setTodo(prev=>prev.filter(item=> item.had !==myid))
  
  
  
  } 



  return (
    <div className='section'>   


    <form onSubmit={handlesubmit}>
    
    <input onChange={handleclick}type='text' placeholder='Add List' className='section--input' value={update.items} autoFocus required ></input><button type='submit' className='section--add'>Add</button><br></br>    
    </form>
    
    {newarr}
    
   {todo.length < 1 && <h1 className='empty'>your list is empty!</h1>}
  
  

 
    </div>
    
  );
}

export default Section