import React, {Component} from 'react';
import './users.css';

class Users extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [
                {username: "John Snow", status: "Active"},
                {username: "Andrew Simpson", status: "Active"},
                {username: "Alison Black", status: "Active"},
                {username: "Sasha Stuart", status: "Suspended"}
            ],
            usersLength: 0
        };
        this.getLength = this.getLength.bind(this);
    }

    componentDidMount() {
        this.getLength()
    }

    getLength(){
        this.setState({
            usersLength: this.state.users.length
        })
    }

    render() {
        return (
            <div className="people">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Online {this.state.usersLength}<span id="onlineElem"></span></h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group label-floating">
                            <label className="control-label" htmlFor="focusedInput1">Write your nickname</label>
                            <input className="form-control" id="focusedInput1" type="text"></input>
                        </div>
                        <ul id="list-people">
                            {
                                this.state.users.map((el, index)=>{
                                    if (el.status == 'Suspended') {
                                        return <li className="user-offline" key={index}><span className="glyphicon glyphicon-user"></span>{el.username}</li>
                                    } else {
                                        return <li key={index}><span className="glyphicon glyphicon-user"></span>{el.username}</li>
                                    }
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Users;