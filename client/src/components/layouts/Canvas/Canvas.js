import React, { Component } from 'react';
import './Canvas.css';

class Canvas extends Component {
    state = {
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        dx: Math.random() - 0.5,
        dy: Math.random() - 0.5
    };

    animate = () => {        
        const ctx = this.refs.canvas.getContext('2d');
        let copyX = this.state.x;
        let copyY = this.state.y;
        let copyDx = this.state.dx;
        let copyDy = this.state.dy;

        requestAnimationFrame(this.animate);
        copyX += copyDx;
        copyY += copyDy;
        
        this.setState({
            x: copyX,
            y: copyY
        });

        if(copyX > window.innerWidth-100 || copyX < 0) {
            this.setState({
                dx: -copyDx
            });
        } 

        if(copyY > window.innerHeight-100 || copyY < 0) {
            this.setState({
                dy: -copyDy
            });
        }

        ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
        ctx.fillStyle = 'blue';

        ctx.fillRect(copyX, copyY, 100, 100);

    };

    animateHandler = () => {
        this.animate();
    }

    render() {
        return (
                <div className="canvas-container">
                    <canvas ref="canvas" onClick={this.animate} width={window.innerWidth} height={window.innerHeight} />
                </div>
                );
    }
}

export default Canvas;
