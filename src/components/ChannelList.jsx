import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';
import connectToStores from 'alt-utils/lib/connectToStores';
import ChatStore from '../stores/ChatStore';


var { Card, List, CircularProgress } = mui;

@connectToStores
class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        ChatStore.getChannels();
    }

    static getStores() {
      return [ChatStore];
    }

    static getPropsFromStores() {
      return ChatStore.getState();
    }

    render() {
        console.log(this.props);
        if(!this.props.channels) {
          return (
            <Card style={{
                flexGrow: 1
              }}>
              <CircularProgress
                 mode="indeterminate"
                 style={{
                   paddingTop:'20px',
                   paddingBottom:'20px',
                   margin:'0 auto',
                   display:'block',
                   width:'60px'
                 }}
              />
            </Card>
          )
        }

        let channelNodes = _(this.props.channels)
            .keys()
            .map((k)=>{
              let channel = this.props.channels[k];
              return (
                <Channel channel={channel} />
              );
        }).value();

        return (
            <Card style={{
                flexGrow:1
            }} >
                <List>
                    {channelNodes}
                </List>
            </Card>
        )
    }
}
export default ChannelList;
