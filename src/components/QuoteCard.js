 import React,{Component} from 'react';
 import './QuoteCard.css';
 
 
 class QuoteCard extends Component {
     render () {
     return (
    
    <div>
    <figure class="QuoteCard">
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

     export default QuoteCard;