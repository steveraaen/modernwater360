import React, { Component } from 'react';
import Form from './Form.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: "",
            results: ""
        };

        this.setTerm = this.setTerm.bind(this);
    }
      setTerm(term) {
    this.setState({
      searchTerm: term
    });
  }


    render() {
        return (<div className="App" >
          <div className="App-header">
<h2>RCBTravel</h2>
</div>
<p className="App-intro">
<code>src/App.js</code>
</p>
<Form />
</div>
        );
    }
}

export default App;
