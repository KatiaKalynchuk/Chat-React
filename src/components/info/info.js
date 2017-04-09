import React, {Component} from 'react';
import './info.css';

class Info extends Component {
    // constructor(props) {
    //     super(props)
    // }

    render() {
        return (
            <div className="info">
                <ul>
                    <li><span id="allCharCount">0</span> characters entered</li>
                    <li><span id="txtCharCount">0</span> letters entered</li>
                    <li><span id="whitespaceCharCount">0</span> whitespace characters entered</li>
                    <li><span id="punctuationCharCount">0</span> punctuation marks entered</li>
                    <li><span id="phonenumbers">0</span> phone numbers entered</li>
                </ul>
            </div>
        )
    }

}
export default Info;