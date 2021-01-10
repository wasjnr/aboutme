import React from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


function IntroductionComponent() {
        return (
          <div className="introduction">
            <Avatar src="avatar.png" size={250}/>
            <p className="introduction-text">
              Curious about life and the universe. <br/>               
              Working with Java, Python and Javascript <br/>
              Loves Science, Nature and Gaming.
            </p>
          </div>
        );    
}

export default IntroductionComponent;
