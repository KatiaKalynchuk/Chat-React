import React, {Component} from 'react';
import Users  from '../users/users';
import ChatWindow  from '../chat-window/chat-window';
import ChatMessage from '../chat-message/chat-message';
import Info  from '../info/info';
import './main.css';

class Main extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
           <section className="main">
                <div className="row">
                    <div className="chat col-md-9 col-md-push-3">
                        <ChatWindow />
                        <ChatMessage />
                    </div>
                    <div className="aside col-md-3 col-md-pull-9">
                        <Users />
                        <Info />
                    </div>
                </div>
            </section>
        )
    }
}
export default Main;
