import React, {Component} from 'react';
import moment from 'moment';
import './header.css';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            onlineTime: '00:00:00',
            localTime: '00:00'
        };

        this.event = moment(new Date);
        setInterval(() => {
            let now = moment();
            this.setState({
                onlineTime: now.subtract(this.event.toObject()).format('HH:mm:ss')
            });
            this.getDate()
        }, 1000);
    }

    getDate() {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        if(minutes < 10) {
            minutes = '0' + minutes;
        }
        this.setState({
            localTime: hours + ':' + minutes
        })
    };
    render() {
        return (
            <header className="header">
                <div className="row">
                    <div className="col-sm-3">
                        <div className="time">
                            <div className="time-online">
                                You are online for: <span id="tm">{this.state.onlineTime}</span>
                            </div>
                            <div className="time-local">
                                Your local time is: <span id="time-local">{this.state.localTime}</span>
                            </div>
                        </div>
                        <div className="personal-data">
                            <a href="#" className="btn-personal">
                                Edit personal info
                                <span className="glyphicon glyphicon-pencil"></span>
                            </a>
                            <a href="#" className="btn-personal">
                                Private messages
                                <span className="wrap-count glyphicon glyphicon-envelope">
                                    <span className="count">3</span>
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-9">
                        <div className="logo">
                            <h1 className="logo-title">FlyChat</h1>
                            <span className="glyphicon glyphicon-send"></span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }

}
export default Header;
