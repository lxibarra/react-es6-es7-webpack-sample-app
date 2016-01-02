import React from 'react';
import mui from 'material-ui';

let { ListItem, Avatar } = mui; 

class Message extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return <ListItem
            leftAvatar={ <Avatar src="https://avatars0.githubusercontent.com/u/1282916?v=3&u=5d7c26513766270d94def95a3363014341a85235&s=140"/> }
        >{ this.props.message }</ListItem>
    }
}

export default Message;