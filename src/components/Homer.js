import React, {Component} from 'react';
import '../App.css';
import logo from '../logo.svg';

class Homer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            working:true};
            // takingabreak:false
        }
     handleClick = () => {
        this.setState({ working: !this.state.working });;
          };
             
    render() {
        const work= this.state.working ? 'working': 'takingabreak';
    return (
        <div className= "Homer">
            <button onClick={this.handleClick} 
            className={work}>{work.toUpperCase()}</button> 
    
         <img src={logo} className={this.state.working ? 'App-logo' : 'App-logo-stop'} alt="logo" />

        
           
        </div>
    );
}
}
 export default Homer;