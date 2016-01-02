import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

let { Card, List } = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            messages:[
                'Hi there how are you?',
                'Im am fine and you'
            ]
        };
    }
    
    render() {
        var messageNodes = this.state.messages.map((message)=>{
           return (
               <Message message={ message } key={ Math.random() } />
           ); 
        });
        
        return (
            <Card style={{
                flexGrow:2,
                marginLeft:30
            }}>
                <List> 
                    {messageNodes}
                </List> 
            </Card>
        )
    }
}

export default MessageList;