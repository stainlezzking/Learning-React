


function List({todos,deleteTask,completed}){
    if(todos.length){
        todos.sort((a,b)=> (a.completed < b.completed) ? -1 : 1)
       var newtodos= todos.map(task => {
        const green = Boolean(task.completed) ? "list-group-item bg-success" : "list-group-item bg-white" 
        const text = Boolean(task.completed) ? "Unmark Task": "Mark as Completed"
          return(
          <li className={green} key={task.id}  data-bs-target={"#A"+task.id} data-bs-toggle="collapse" data-bs-parent="#accordion" aria-expanded="false"  aria-controls={"A"+task.id}> 
            <button className="btn w-100 text-center" type="button" >
                {task.task}
            </button>
            <div className="collapse bg-light" id={"A" +task.id}>
            <div className="bg-warning text-center text-white p-2" id={task.id} onClick={()=>{completed(task.id)}} > 
            {text}
            </div>  
            <div className="w-100 text-center bg-danger text-white mb-2 p-2" id={task.id} onClick={()=>{deleteTask(task.id)}}> Delete</div>
            </div>
            </li>

          )
        });
        return(
            <ul className="list-group mx-auto mb-5 mt-2" id="accordion" >
                <header className="display-2 text-center mb-3"> Todo's </header>
                {newtodos}
            </ul>
        )
    }else{
  return(  <ul className="list-group mx-auto mb-5 mt-2" >
        <header className="display-2 text-center mb-3"> Todo's </header>
        <li className="list-group-item"> 
        You have no task today yay!
        </li>   
    </ul>)
    }

}


export default List