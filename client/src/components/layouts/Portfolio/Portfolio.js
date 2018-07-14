import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from './card/Card';
import './Portfolio.css';
import { getProjects } from '../../../actions';
import { Helmet } from 'react-helmet';

class Portfolio extends Component {
    state = {
        selectedProject: 0
    }

    componentDidMount() {
        //ONE - THIS RUNS AND UPDATES THE PROPS
        this.props.getProjects();
    } 

    /*componentWillReceiveProps() {
        console.log('PROPS => ', this.props.projects);
        this.setState({ selectedProject: this.props.projects[0] });
    }*/

    /*componentDidUpdate() {
        renderCard = (i = this.state.selectedProject) => {
            const { title, description } = this.props.projects[i] || '';
            
            return (
                <Card title={title} description={description}/> 
            );
        }
    }*/

    renderProjects = () => {
        //this.setState({ selectedProject.title: 'Mak' });

        return this.props.projects.map((project, index) => {
            return <li onClick={this.selected} key={project._id}>{project.title.toUpperCase()}</li>;
        });
    }

    renderCard = (i = this.state.selectedProject) => {
        const { title, description } = this.props.projects[i] || '';
        
        return (
            <Card title={title} description={description}/> 
        );
    }

    selected = () => {
        let index = this.state.selectedProject;
        index++;
        if(index >= this.props.projects.length) {
            index = 0;
        }
        this.setState({ selectedProject: index });
    }

    render() {
        const propro = this.props.projects[0];
        console.log(propro);

        return (
                <div className="portfolio-container">
                <div className="background">BACKGROUND</div>
                    <Helmet>
                        <title>Portfolio</title>
                    </Helmet>
                    <ul className="portfolio-items">
                        {this.renderProjects()}
                    </ul>
                    
                    <div className="portfolio-icons-container">
                        
                        <div>
                            <h1>{this.state.selectedProject.title}</h1>
                            <div className="icons-container">
                            </div>
                        </div>

                        <div className="arrow-container">
                            <div className="arrow"></div>
                            <div className="arrow"></div>
                            <div className="arrow"></div>
                            <div className="arrow"></div>
                            <div className="arrow"></div>
                        </div>

                        <div>
                            <div className="icons-container">
                            </div>
                        </div>
                    </div>
                        
                    {this.renderCard()}

                </div>
                );
    }
};

function mapStateToProps ({ projects }) {
    //TWO - THIS DATA BECOMES PROPS
    return { projects };
}

export default connect(mapStateToProps, { getProjects })(Portfolio);
