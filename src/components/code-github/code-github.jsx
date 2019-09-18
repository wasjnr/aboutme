import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardActions,
    CardText
} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';

import './code-github.css';

class CodeGithubComponent extends Component {

    render() {
        return (
            <div className="code-github">
              <p className="headline">Look at my code and help me learn</p>
                <Card>
                  <CardHeader
                    subtitle="Github Repository"
                    title="wasjnr/aboutme"
                    avatar="github.png"
                  />
                <CardText>
                        This application is made with React and Material UI. Check out the code on Github.
                    </CardText>
                    <CardActions>
                        <FlatButton label="View on github" href="https://github.com/wasjnr/aboutme" target="_blank"/>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default CodeGithubComponent;
