import React from 'react';
import mui from 'material-ui';

let { ListItem } = mui;

class Channel extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        let style = {};
        console.log('chanel.jsx',this.props);
        if(this.props.channel.selected) {
          style.backgroundColor = '#f0f0f0';
        }

        return (
            <ListItem
                style={style}
              >
                {this.props.channel.name}
            </ListItem>
        )
    }
}

export default Channel;
