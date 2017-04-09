import React, {Component} from 'react';
import './chat-message.css';

class ChatMessage extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="chat-massege">
                <form className="form" action="">
                    <div className="form-group">
                        <textarea className="form-control" rows="3" id="textArea" placeholder="Write your massege"></textarea>
                        <button id="a" type="button" className="btn btn-fab btn-fab-mini send-message">
                            <span><img src="img/send-icon.svg" alt=""></img></span>
                        </button>
                    </div>
                    <div className="text-formatting">
                        <button className="btn btn-raised btn-default btn-bold">B</button>
                        <button className="btn btn-raised btn-default btn-italic">I</button>
                        <button className="btn btn-raised btn-default btn-underline">U</button>
                        <button className="btn btn-raised btn-default btn_link">Link</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default ChatMessage;
