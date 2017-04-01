import React, { Component } from 'react'
import { View } from 'react-native'
import Nav from './Navigation/Navigation';
import { GiftedChat } from 'react-native-gifted-chat'

class chat extends Component {
    constructor(props) {
        super(props)
        this.state = {messages: []};
        this.onSend = this.onSend.bind(this);
    }

    componentWillMount() {
        this.setState({
            messages: this.props.messages
        });
    }

    onSend(messages = []) {
        this.setState((previousState) => {
            return {
                messages: GiftedChat.append(previousState.messages, messages),
            };
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Nav type='chat' toMessage={() => this.props.navigator.replace({id: 'message'})} />
                <GiftedChat
                    messages={this.state.messages}
                    onSend={this.onSend}
                    user={{
                        _id: 1
                    }}
                />
            </View>
        );
    }
}

export default chat;
