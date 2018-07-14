import React, { Component } from 'react';

class Snow extends Component {

    snow = () => {
        const c = this.refs.canvas.getContext('2d');
        //xstart, ystart, rstart, xend, yend, radius

        const s = 100;
        const grd = c.createRadialGradient(s, s, 1, s, s, s);
        grd.addColorStop(0, 'rgba(255,255,255,0.66)');
        grd.addColorStop(1, 'blue');
        
        //x,y,size,start,end,clockwise

        c.beginPath();
        c.fillStyle = grd;
        c.arc(s,s,s,0,Math.PI * 2);
        c.arc(500,500,s,0,Math.PI * 2);
        c.fill();
        c.closePath();
    }

    render() {
        return (
                <div>
                    <canvas 
                        ref="canvas"
                        onClick={this.snow}
                        style={ {background: 'linear-gradient(rgba(0,0,0,0.66), gray)'} }
                        width={window.innerWidth}
                        height={window.innerHeight} />
                </div>
                );
    }
}

export default Snow;
