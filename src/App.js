import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar' 
export class App extends Component {
  pageSize=15;
  state= {
    progress:0
  }
  
   setProgress = (progress) => {
this.setState({progress:progress})
  }
  

  render() {

    return (
      <div>

<Router>
<Navbar/>
<LoadingBar
        color='#f11946'
        progress={this.state.progress}

      />
<Routes>

< Route exact path="/home" element={<News setProgress={this.setProgress} key=" /home" pageSize={this.pageSize} category="general"/>}/>
< Route exact path="/" element={<News key="/ " setProgress={this.setProgress} pageSize={this.pageSize} category=" "/>}/>
< Route exact path="/entertainment" element={<News key=" entertainment" setProgress={this.setProgress} pageSize={this.pageSize} category="entertainment"/>}/>
< Route exact path="/general"element= {<News key="general " setProgress={this.setProgress} pageSize={this.pageSize} category="general"/>}/>
< Route exact path="/health" element={<News key="health " setProgress={this.setProgress} pageSize={this.pageSize} category="health"/>}/>
< Route exact path="/science" element={<News key=" science" setProgress={this.setProgress} pageSize={this.pageSize} category="science"/>}/>
< Route exact path="/sports"element= {<News key="sports " setProgress={this.setProgress} pageSize={this.pageSize} category="sports"/>}/>
< Route exact path="/technology"element= {<News key=" technology" setProgress={this.setProgress} pageSize={this.pageSize} category="technology"/>}/>
< Route exact path="/business"element= {<News key=" business" setProgress={this.setProgress} pageSize={this.pageSize} category="business"/>}/>
    
    </Routes> 
    </Router>
      </div>
    )
  }
}

export default App