import React from 'react';
import Channel from './Channel.jsx';
import mui from 'material-ui';

var { Card, List } = mui;

class ChannelList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                'Dogs',
                'Cats'
            ]
        }
    }

    render() {
        let channelNodes = this.state.messages.map((channel)=>{
            return (<Channel channel={channel} key={ Math.random() }/>)
        });

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
