import React, {Component} from 'react';
import {
    Card,
    CardHeader,
    CardText
} from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import './timeline.css';

class TimelineComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
          expanded: false,
          expanded1: false,
          expanded2: false,
          expanded3: false
        };
    }

    async componentDidMount() {}

    componentWillUnmount() {}

    handleExpandChange = (expanded) => {
      this.setState({expanded: expanded});
    };

    handleExpandChange1 = (expanded1) => {
      this.setState({expanded1: expanded1});
    };

    handleExpandChange2 = (expanded2) => {
      this.setState({expanded2: expanded2});
    };

    handleExpandChange3 = (expanded3) => {
      this.setState({expanded3: expanded3});
    };   

    handleExpand = () => {
      this.setState({expanded: true});
    };

    handleExpand2 = () => {
      this.setState({expanded2: true});
    };

    handleExpand3 = () => {
      this.setState({expanded3: true});
    };

    handleExpand4 = () => {
      this.setState({expanded4: true});
    };

    handleReduce = () => {
      this.setState({expanded: false});
    };
    
    handleReduce1 = () => {
      this.setState({expanded1: false});
    };

    handleReduce2 = () => {
      this.setState({expanded2: false});
    };

    handleReduce3 = () => {
      this.setState({expanded3: false});
    }; 

    render() {
        return (
            <div className="timeline">
              <p className="headline">Working experience</p>
                <div className="timeline-entry">
                  <Card>
                      <CardHeader title="Administrative Assistant" subtitle="Engenhos Gourmet"/>
                      
                  </Card>
                </div>
                <div className="timeline-entry">
                    <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
                      <CardHeader title="Software Engineer" subtitle="Lieno Tecnologia - PbHub Soluções"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          January 2020 - Present. <br/>
                          Development of features and MVP's to Multiples Clients.
                          <br/><br/>
                            <div className="timeline-entries">
                              <div className="timeline-entry-chip">
                                <Chip>Python</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Java</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Javascript</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>React</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>SQL</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Git</Chip>
                              </div>
                              <div className="timeline-entry-chip">
                                <Chip>Css</Chip>
                              </div>                                
                            </div>
                      </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                    <Card expanded={this.state.expanded1} onExpandChange={this.handleExpandChange1}>
                        <CardHeader title="Software Developer" subtitle="Unipê - Centro Universitário de João Pessoa"
                          actAsExpander={true} showExpandableButton={true}/>
                        <CardText expandable={true}>
                            February 2018 - June 2018. <br/>
                            Development of Microservices to Coordenadoria de Tecnologia da 
                            Informação da Polícia Militar da Paraíba.
                            <br/><br/>
                              <div className="timeline-entries">
                                <div className="timeline-entry-chip">
                                  <Chip>Ruby</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Rails</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>SQL</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Git</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>Bootstrap</Chip>
                                </div>
                                <div className="timeline-entry-chip">
                                  <Chip>HTML5</Chip>
                                </div>
                              </div>
                        </CardText>
                    </Card>
                  </div>
                  <div className="timeline-entry">
                  <Card expanded={this.state.expanded2} onExpandChange={this.handleExpandChange2}>
                      <CardHeader title="Volunteer Software Developer" subtitle="Unipê - Centro Universitário de João Pessoa"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                        February 2017 - June 2017. <br/>
                        Development of Microservices to Fábrica de Software - UBTech.
                      <div className="timeline-entries">
                        <div className="timeline-entry-chip">
                          <Chip>Python</Chip>
                        </div>
                        <div className="timeline-entry-chip">
                          <Chip>Django</Chip>
                        </div>
                        <div className="timeline-entry-chip">
                          <Chip>SQL</Chip>
                        </div>
                        <div className="timeline-entry-chip">
                          <Chip>Git</Chip>
                        </div>
                        <div className="timeline-entry-chip">
                          <Chip>Bootstrap</Chip>
                        </div>
                        <div className="timeline-entry-chip">
                          <Chip>HTML5</Chip>
                        </div>
                      </div>
                      </CardText>
                  </Card>
                 </div>                
                <div className="timeline-entry">
                  <Card expanded={this.state.expanded3} onExpandChange={this.handleExpandChange3}>
                      <CardHeader title="Student" subtitle="Unipê - Centro Universitário de João Pessoa"
                        actAsExpander={true} showExpandableButton={true}/>
                      <CardText expandable={true}>
                          February 2014	-	June 2019. Bachelor of Computer Science.
                          <div className="timeline-entries">
                            <div className="timeline-entry-chip">                            
                            <Chip href="https://unipe.edu.br/enade/wp-content/uploads/2018/06/Resultado-ENADE-2017.pdf">
                              Third place at Enade's Assessment </Chip>
                            </div>                            
                          </div>
                      </CardText>
                  </Card>
                </div>
            </div>
        );
    }
}

export default TimelineComponent;
