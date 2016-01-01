import React from 'react';
import Message from './Message.jsx';

class MessageList extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            messages:[
                'Hi there how are you?',
                'Im am fine and you',
                'Example chat lines',
                'Done',
                'ja'
            ]
        };
    }
    
    render() {
        var messageNodes = this.state.messages.map((message)=>{
           return (
               <Message message={ message }/>
           ); 
        });
        
        return (
            <div> {messageNodes} </div>
        )
    }
}

export default MessageList;