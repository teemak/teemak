import React, { Component } from 'react';
import './Fireworks.css';

class Fireworks extends Component {

        foregroundHandler = () => {
            const c = this.refs.canvas.getContext('2d');
           
            const building = (xPos, ground, width, height) => {
                const buildingX = xPos;
                const buildingY = window.innerHeight - (height + ground);
                const buildingWidth = width;
                const buildingHeight = height;
                
                const glassX = buildingX;
                const glassY = buildingY;
                const glassWidth = 10;
                const glassHeight = 10;

                //building
                c.fillStyle = '#222';
                c.fillRect(buildingX, buildingY, buildingWidth, buildingHeight);            
                //windows
                c.fillStyle= 'yellow';           
                
                for(let i = 10; i < buildingWidth; i+= 20) {
                    for(let j = 10; j < buildingHeight; j+= 20) {
                        c.fillRect(glassX + i, glassY + j, glassWidth, glassHeight);                                           
                        c.fillRect(glassX + j, glassY + i, glassWidth, glassHeight);
                    }
                }
            }

            //ground
            //x,y,width,height
            const groundDepth = 70;        
            const initialX = 30;
            c.fillStyle = 'black';
            c.fillRect(0,window.innerHeight-groundDepth,window.innerWidth,groundDepth);

            //don't go over 90
            building(initialX, groundDepth, 90, 90);
            building(initialX+100, groundDepth, 90, 90);
            building(initialX+200, groundDepth, 90, 90);
            building(initialX+400, groundDepth, 90, 90);
            building(initialX+700, groundDepth, 90, 90);
            building(window.innerWidth-100, groundDepth, 90, 90);
        }

    midgroundHandler = () => {
        const c = this.refs.canvas.getContext('2d');
        //x,y,width,height
        const randomNumber = parseInt(Math.random() * 100, 10);
        const height = window.innerHeight-100;

        c.fillStyle = '#0000a6';

        c.fillRect(0, height-200, 100, 300);
        c.fillRect(100, height, 100, 100);
        c.fillRect(200, height - 100, 100, 200);
        c.fillRect(300, height - 200, 200, 300);

        c.fillRect(500, height, 100, 100);
        c.fillRect(600, height-100, 100, 200);

        c.fillRect(700, height - 200, 300, 300);
        c.fillRect(1000, height - 200, 200, 300);

        this.foregroundHandler();

    }
        
    render() {
        return (
                    <div className="fireworks-container">
                        <canvas ref="canvas" 
                            onClick={this.midgroundHandler}
                            width={window.innerWidth}
                            height={window.innerHeight} />
                    </div>
                );
    }
}

export default Fireworks;
