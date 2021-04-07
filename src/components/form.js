const {Component} = require("react")


class Form extends Component {
    state = {
        task : "",
        id : null,
        completed: 0
    }
    active=(e)=>{
       e.target.nextElementSibling.classList.add("bG-success")
    }
    remove=(e)=>{
       e.target.nextElementSibling.classList.remove("bG-success")
    }
    onChange=(e)=>{
        this.setState({
            task : e.target.value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault()
        this.props.passState(this.state)
        this.setState({
            task: ""
        })
    }
    render(){
        return(
            <form className="form mx-auto d-flex p-2" onSubmit={this.onSubmit}>
                <label htmlFor="Todo " className="position-absolute invisible"> Todo </label>
                <input className="w-100 bg-transparent" autoComplete="off" type="text" id="Todo" value={this.state.task} onChange={this.onChange} onFocus={this.active} onBlur={this.remove} />
                <input type="submit" value="submit" className="btn" />
            </form>
        )
    }
}


export default Form