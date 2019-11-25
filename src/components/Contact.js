import React from 'react';
import './Contact.css';


class Contact extends Component {
    render () {
    return (
   
   <div className="Contact">
   <figure>
   <img
     src={this.props.image}
     alt={this.props.character}/>
   <figcaption>
     <blockquote>
       {this.props.quote}
     </blockquote>
     <cite>{this.props.character}</cite>
   </figcaption>
   </figure>
   </div>
   
    )}
    };

    export default Contact;