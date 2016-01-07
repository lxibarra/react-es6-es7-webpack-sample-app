import React from 'react';
import Message from './Message.jsx';
import mui from 'material-ui';
import Firebase from 'firebase';
import _ from 'lodash';

let { Card, List } = mui;

class MessageList extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            messages:[]
        };

        this.firebaseRef = new Firebase('https://react-stack01.firebaseio.com/messages');
        this.firebaseRef.once('value', (snapshot)=>{
          console.log('snapshot', snapshot);
          let messageVal = snapshot.val();
          let messages = _(messageVal)
          .keys()
          .map((messageKey)=> {
              let cloned = _.clone(messageVal[messageKey]);
              cloned.key = messageKey;
              return cloned;
          })
          .value();

          this.setState({
            messages:messages
          })
        });
    }

    

    render() {
        var messageNodes = this.state.messages.map((message)=>{
           return (
               <Message message={ message.message } key={ Math.random() } />
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
