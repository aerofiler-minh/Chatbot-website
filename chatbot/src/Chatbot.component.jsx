import React from "react";
import { Launcher } from 'react-chat-window'
import io from 'socket.io-client';
import Dictaphone from "./TTS.Component";
const logo = require('./logo.png')

class ChatBotAI extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messageList: [],
            socket: io("http://localhost:3000"),
            room: "user1",
        }

    }

    UNSAFE_componentWillMount() {
        this._sendMessage("Welcome to our real estate website, may I please get your name?");
    }

    componentDidMount() {
        this.state.socket.connect(true);
        this.state.socket.emit('join', this.state.room);

        this.state.socket.on("send-msg-response", async (msg) => {
            this.state.messageList.pop();
            console.log('EST', this.state.messageList)
            await this.setState({
                messageList: [...this.state.messageList]
            })
            this._sendMessage(msg);
        })

    }

    async _onMessageWasSent(message) {
        await this.setState({
            messageList: [...this.state.messageList, message]
        })

        this._sendMessage("••••");
        await this.state.socket.emit('new-msg', { msg: message.data.text, room: this.state.room })
    }

    _sendMessage(text) {
        if (text.length > 0) {
            this.setState({
                messageList: [...this.state.messageList, {
                    author: 'them',
                    type: 'text',
                    data: { text }
                },]
            })
        }
    }

    _onSpeechWasSent(message) {
        let messageObj = {
            author: 'me',
            type: 'text',
            data: { "text": message }
        };
        
       this.setState({
            messageList: [...this.state.messageList,  messageObj]
        }, () => {
            this._sendMessage("••••");
            this.state.socket.emit('new-msg', { msg: messageObj.data.text, room: this.state.room })
        })
       
    }

    
    render() {
        return (
        <div id="chatbox" className="chatbox" style={{textAlign: "left"}}>
            <Launcher
                agentProfile={{
                    teamName: 'Chatbot',
                    imageUrl: logo
                }}
                mute
                onMessageWasSent={this._onMessageWasSent.bind(this)}
                messageList={this.state.messageList}
                showEmoji
            />
            <Dictaphone handleChange={msg => this._onSpeechWasSent(msg)}/>
        </div>
        );
    }
}

export default ChatBotAI;