import React from 'react';
import './introduction.css';
import Avatar from 'material-ui/Avatar';


function IntroductionComponent() {
        return (
          <div className="introduction">
            <Avatar src="avatar.jpeg" size={150}/>
            <p className="introduction-text">
              Curious about life and the universe.                
              Studying NodeJs, ReactJs and React Native.
              Loves Data, Science and Gaming.
            </p>
          </div>
        );    
}

export default IntroductionComponent;
