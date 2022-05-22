import React, {Component} from 'react';
import User from './components/User';
import Localtime from './components/Localtime';
import Welcome from './components/Welcome';
class App extends Component{
    render(){
        return(
            <div className='App'>
                 {/* <Localtime />  */}
                <User />
                <Welcome />
            </div>
        );
    }
}
export default App;