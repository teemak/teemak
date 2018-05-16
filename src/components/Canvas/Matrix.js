import React, { Component } from 'react';

class Matrix extends Component {
    state = {
        x: 1,
        y: 0,
        xSize: 16,
        ySize: 14,
        height: window.innerHeight,
        width: window.innerWidth
    }

    showSymbols = () => {
        const c = this.refs.canvas.getContext('2d');
        let symbols = [];

        for(let i = 0; i < 96; i++) {
            symbols.push(String.fromCharCode(0x30A0 + i));
        }
        const colors = ['green', 'black', 'rgb(5,255,5)'];

        c.font = 'message-box';
        
        let copyX = this.state.x;
        let copyY = this.state.y;
        copyX += this.state.xSize;
        copyY += this.state.ySize;
        let xPos = 100;

        this.setState({
            x: copyX,
            y: copyY
        });
            
        c.fillStyle = colors[Math.round(Math.random() * 1)];
        c.fillText(symbols[Math.round(Math.random() * 95)], (this.state.xSize*2), this.state.y);            
        c.fillText(symbols[Math.round(Math.random() * 95)], (this.state.xSize*3), this.state.y-150);
        c.fillText(symbols[Math.round(Math.random() * 95)], (this.state.xSize*4), this.state.y-3100);            
        c.fillText(symbols[Math.round(Math.random() * 95)], this.state.xSize*5, this.state.y-90);            
        c.fillText(symbols[Math.round(Math.random() * 95)], this.state.xSize*7, this.state.y-290);            
        c.fillText(symbols[Math.round(Math.random() * 95)], this.state.xSize*8, this.state.y-2290);            
        c.fillText(symbols[Math.round(Math.random() * 95)], this.state.xSize*9, this.state.y-2900);            

        c.fillStyle = colors[Math.round(Math.random() * 2)];
        c.fillText(symbols[Math.round(Math.random() * 95)], this.state.xSize, this.state.y-200);
        c.fillText(symbols[Math.round(Math.random() * 95)], this.state.xSize*6, this.state.y-1190);            
        c.fillText(symbols[Math.round(Math.random() * 95)], this.state.xSize*10, this.state.y);

        c.fillStyle = colors[Math.round(Math.random() * 1)];

        if(this.state.y > this.state.height+6000) {
            c.clearRect(0,0,this.state.width, this.state.height);
            this.setState({
                y: 1
            });
        }

        //c.fillText(symbols[Math.round(Math.random() * 95)], 100, this.state.y);

        /*for(let x = 1; x < this.state.width + 10; x+=this.state.xSize) {
           for(let y = 0; y < this.state.height + 10; y+=this.state.ySize) {
                c.fillStyle = colors[Math.round(Math.random() * 1)];
                if(x % 31 === 0) {
                    c.fillStyle = colors[2];
                }
                c.fillText(symbols[Math.round(Math.random() * 95)], x, y);
           } 
        }*/
        
        requestAnimationFrame(this.showSymbols);
    }

    rain = () => {
        const c = this.refs.canvas.getContext('2d');
        //requestAnimationFrame(this.rain);
        //let speed = this.state.y;
        //let random = Math.round(Math.random() * 96);
        //let symbol = String.fromCharCode(0x30A0 + random);
        let length = Math.round(Math.random() * this.state.height);
        //c.clearRect(160, 0, this.state.xSize, length);
        //c.beginPath();

        //speed += this.state.dx;

        /*this.setState({
            y: speed
        });*/

        //LOOP -- resets the y position
        //SWITCH -- symbol gets reset when offscreen
        /*if(this.state.y > this.state.height + 200) {
            this.setState({
                y: 1,
                symbol: String.fromCharCode(0x30A0 + Math.round(Math.random() * 96))
            });
        }*/

        //c.fillText(this.state.symbol, this.state.width/2, speed);        
    }

    render() {
        return (
                <div>
                    <canvas 
                    ref="canvas"
                    onClick={this.showSymbols}
                    style={{ background: 'black' }}
                    width={window.innerWidth}
                    height={window.innerHeight} />
                </div>
                );
    }
}

export default Matrix;
