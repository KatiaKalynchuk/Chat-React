import React, {Component} from 'react';
import './chat-window.css';

class ChatWindow extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="chat-window">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <ul className="tab-control">
                            <li className="active">
                                <a className="btn btn-warning" href="#main-chat" data-toggle="tab">Main chat</a>
                            </li>
                        </ul>
                    </div>
                    <div className="panel-body">
                        <div className="tab-content" id="tab-content">
                            <div className="tab-pane active" id="main-chat">
                                <div className="list-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default ChatWindow;
