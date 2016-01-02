import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';

var { Card, List } = mui;

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'Hi there how are you?',
                'Im am fine and you',
                'Example chat lines',
                'Done',
                'ja'
            ]
        }
    }
    
    render() {
        let messageNodes = this.state.messages.map((message)=>{
            return (<Message message={message}/>)        
        }); 
        
        return (
            <Card>
                {messageNodes}
            </Card>
        )
    }
}
export default ChannelList;