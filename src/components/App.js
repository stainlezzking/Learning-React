import { Component } from 'react'
import Form from './form'
import List from './list'



class App extends Component{
    state={
        Todos:[]
    }
    deleteTask=(Id)=>{
        const todoCopy = this.state.Todos.filter(todo=>{
            return todo.id !== Id
        })
        this.setState({
            Todos: todoCopy
        })
    }
    completed=(Id)=>{
        const todoCopy= this.state.Todos.map(task=>{
           if(task.id === Id){
                task.completed =  Number(!Boolean(task.completed))
            }
            return task
        })
        this.setState({
            Todos:todoCopy
        })
    }
    passState=(todo)=>{
       const Id = Math.random().toString(36).substr(2, 9);
        todo.id = Id
        const copyState = [...this.state.Todos,todo]
        this.setState({
            Todos: copyState
        })
    }
    render(){
        return(
            <div >
                <List todos={this.state.Todos} deleteTask={this.deleteTask} completed={this.completed}/>
                <Form  passState={this.passState}/>
            </div>
        )
    }
}

export default App