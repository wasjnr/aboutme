import React, {Component} from 'react';
import './agile-quote.css';


class AgileQuoteComponent extends Component {

    render() {
        return (
          <div className="agile-quote">
            <p className="quote">
              <span className="quote-marks">&ldquo;</span>
              <span className="quote-content">
                "The power of human thought
                 grows exponentially with the number of minds 
                 that share that thought.”              
              </span>
              <span className="quote-author">- Dan Brown, The Lost Symbol   </span>
            </p>
          </div>
        );
    }
}

export default AgileQuoteComponent;
