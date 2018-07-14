import React, { Component } from 'react';
import './Wall.css';

class Wall extends Component {
    state = {
        classesLeft: ['wall', 'wall-left', 'open-left'],
        classesRight: ['wall', 'wall-right', 'open-right'],
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

                    {/* <div className="lock-container true-center">
                        
                        <div onClick={this.openWalls} className={this.concat(this.state.lock)} >
                            <div className={this.concat(this.state.lockRing)}>
                                <div className={this.concat(this.state.lockCenter)}>
                                </div>
                            </div>
                        </div>
                        
                        <div onClick={this.openWalls} className={this.concat(this.state.ball)}>
                            <p>ENTER</p>
                        </div>
                    </div> */}


                    {/* <video className="bg-video" muted loop>
                            <h1>TEE MAK</h1>
                            <source src="bg.mp4" type="video/mp4">
                            </source>
                        </video> */}
                        

                </div>
                );
    }
}

export default Wall;
