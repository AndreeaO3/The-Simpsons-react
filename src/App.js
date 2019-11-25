import React,{Component} from 'react';
// import Navbar from './components/Navbar';
// import QuoteCard from './components/QuoteCard';
// import Quotes from "./components/Quotes";
// import Lamp from "./components/Lamp.js";
// import Homer from "./components/Homer.js";
import './App.css';
import logo from './logo.svg';


class App extends Component {
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
    {/* <Quotes/> */}
    {/* <Navbar/>
    //  <QuoteCard quote= "Hello" character="Ion" image="http://imaginicupisici.ro/wp-content/uploads/2016/03/pisica-egipteana-portret.jpg"/>
    //  <QuoteCard/> */}
    {/* <Lamp on/>
    //  <Lamp/> */}
      </div>
);}
}

export default App;

