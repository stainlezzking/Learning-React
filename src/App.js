
import {Like,Comment,Pic,Bookmark } from './group';
import paper from './paper.png'

const { Component } = require("react");





class App extends Component{
  render(){
    return(
      <div className="App_whole">
        <div className="App_first">
        <Like width="16px" height="16px"/>
        <Comment />
        <Pic src={paper} />    
        </div>
        <Bookmark />
      </div>
      
    )
  }
}

export default App