import image from './logo192.png'
const { Component } = require("react");

class Header extends Component {
    render(){
        return(
            <nav>
                <div className="details" >
                    <img src={image} alt="your profile pic"></img>
                    <div className="info">
                        {this.props.name}
                        <small> @{this.props.name}</small>
                    </div>
                </div>
                <div className="controls">
                    <button> Follow </button>
                    <div className="holder">
                        <div className="dot"></div>
                        <div className="dot"></div>
                        <div className="dot"></div>
                    </div>
                </div>
            </nav>
        )
    }
}

class Pic extends Component{
    render(){
        return(
            <div>
            <img src={this.props.src} className={this.props.classN}></img>
            </div>
        )
    }
}

class Like extends Component {
    state={
        like: false,
        color: "currentColor"
    }
    like=()=>{
        if(this.state.like){
            this.setState({like:false, color:"currentColor"})
        }else{
            this.setState({like:true,color:"red"}) 
        }
    }
    render(){
        return(
    <svg xmlns="http://www.w3.org/2000/svg" onClick={this.like} width="16" height="16" fill={this.state.color} class="bi bi-heart" viewBox="0 0 16 16">
    <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
    </svg>
        )
    }
}


class Comment extends Component{
    render(){
        return(
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat" viewBox="0 0 16 16">
  <path d="M2.678 11.894a1 1 0 0 1 .287.801 10.97 10.97 0 0 1-.398 2c1.395-.323 2.247-.697 2.634-.893a1 1 0 0 1 .71-.074A8.06 8.06 0 0 0 8 14c3.996 0 7-2.807 7-6 0-3.192-3.004-6-7-6S1 4.808 1 8c0 1.468.617 2.83 1.678 3.894zm-.493 3.905a21.682 21.682 0 0 1-.713.129c-.2.032-.352-.176-.273-.362a9.68 9.68 0 0 0 .244-.637l.003-.01c.248-.72.45-1.548.524-2.319C.743 11.37 0 9.76 0 8c0-3.866 3.582-7 8-7s8 3.134 8 7-3.582 7-8 7a9.06 9.06 0 0 1-2.347-.306c-.52.263-1.639.742-3.468 1.105z"/>
</svg>
        )
    }
}

class Bookmark extends Component{
    render(){
        
        return(
     <div className="bookmark">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bookmark" viewBox="0 0 16 16">
    <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z"/>
    </svg>
    </div>
        )
    }
}

export {Header,Pic,Like,Comment,Bookmark}