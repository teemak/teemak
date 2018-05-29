import React, { Component } from 'react';
import './Main.css';

class Main extends Component {
    state = {
        classesLeft: ['wall', 'wall-left'],
        classesRight: ['wall', 'wall-right'],
        lock: ['lock', 'true-center', 'ring'],
        lockRing: ['lock-ring', 'true-center', 'ring'],
        lockCenter: ['lock-center', 'true-center', 'ring'],
        ball: ['ball', 'true-center']
    }
    
    openWalls = () => {
        this.setState({
            classesLeft: [...this.state.classesLeft, 'open-left'],
            classesRight: [...this.state.classesRight, 'open-right'],
            lock:   [...this.state.lock, 'unlock-ring', 'unlock-lock'],
            lockRing: [...this.state.lockRing, 'unlock-ring'],
            lockCenter: [...this.state.lockCenter, 'unlock-ring'],
            ball: [...this.state.ball, 'unlock-ball']
        });
    }

    concat = (arr) => {
        return arr.join(' ');
    }

    render() {      

        return (
                <div className="main-container true-center">                    
                    
                    <div className="wall-container">
                        <div className={this.concat(this.state.classesLeft)}></div>
                        <div className={this.concat(this.state.classesRight)}></div>
                    </div>

                    <div className="lock-container true-center">
                        
                        <div onClick={this.openWalls} className={this.concat(this.state.lock)} >
                            <div className={this.concat(this.state.lockRing)}>
                                <div className={this.concat(this.state.lockCenter)}>
                                </div>
                            </div>
                        </div>
                        
                        <div onClick={this.openWalls} className={this.concat(this.state.ball)}>
                            <p>ENTER</p>
                        </div>
                    </div>

                </div>);
    }
}

export default Main;
