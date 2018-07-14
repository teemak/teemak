import React, { Component } from 'react';

class Meta extends Component {
    state = {
        month: '',
        day: '',
        date: '',
        year: '',
        hour: '',
        minutes: '',
        seconds: '',
        meridiem: ''
    }

    componentDidMount() {
        this.displayDate();
    }

    displayDate = () => {
        const meta = new Date();
        const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
        const month = months[meta.getMonth()].toUpperCase();
        const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        const day = days[meta.getDay()].toUpperCase();
        const date = meta.getDate();
        const year = meta.getFullYear();
        let hour = meta.getHours();
        let minutes = '' + meta.getMinutes();
        let seconds = '' + meta.getSeconds();
        let meridiem = 'AM';
            
        if(hour > 12) {
            hour = hour - 12;
            meridiem = 'PM';
        }
        if(hour === 0) {
            hour = 12;
        }
        if(minutes.length < 2) {
            minutes = '0' + minutes;
        }
        if(seconds.length < 2) {
            seconds = '0' + seconds;
        }

        this.setState({ month, day, date, year, hour, minutes, seconds, meridiem });
    }


    render() {
        return (
                <div className="meta">
                    <div className="meta-container">
                        <div className="window border">ENGLISH</div>
                        <div className="window border">{this.state.month} {this.state.date} {this.state.year}</div>
                        <div className="window border">{this.state.day}</div>
                        <div className="window border">{this.state.hour}:{this.state.minutes}:{this.state.seconds} {this.state.meridiem}</div>
                    </div>
                </div>
               );
    }
}

export default Meta;
