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
            messages:{

            }
        };

        this.firebaseRef = new Firebase('https://react-stack01.firebaseio.com/messages');
        this.firebaseRef.on('child_added', (msg)=> {
              if(this.state.messages[msg.key()]) {
                return;
              }

              let msgVal = msg.val();
              msgVal.key = msg.key();

              this.state.messages[msgVal.key] = msgVal;
              this.setState({
                messages:this.state.messages
              });
        });

        this.firebaseRef.on("child_removed", (msg)=> {
          var key = msg.key();
          delete this.state.messages[key];
          this.setState({
            messages:this.state.messages
          });
        });

        /*
        this.firebaseRef.on('value', (snapshot)=>{
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
        */
    }



    render() {               //object to array
        var messageNodes = _.values(this.state.messages).map((message)=>{
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
