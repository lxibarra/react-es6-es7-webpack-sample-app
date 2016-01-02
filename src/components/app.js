import React from 'react';
import ChannelList from './ChannelList.jsx';
import MessageList from './MessageList.jsx';
import MessageBox from './MessageBox.jsx';

import mui from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
//var ThemeManager = new mui.Styles.ThemeManager();
import AppBar from 'material-ui/lib/app-bar';
var Colors = mui.Styles.Colors;
//var AppBar = mui.AppBar;

class App extends React.Component {
    constructor() {
        super();
       
    }
    
    static childContextTypes = {
        muiTheme:React.PropTypes.object
    }
    
    getChildContext() {
        return {
            muiTheme: ThemeManager.getCurrent
        }
    }
    
    render() {
       return (
        <div>
            <AppBar title="Awesome Chat App"/>
            <div style={{
                display:"flex",
                flexFlow:"row wrap",
                maxWidth:1200,
                width:'100%',
                margin:'30px auto 30px'  
            }}>
            <ChannelList/>
            <MessageList/>
            </div>
            <MessageBox/>
        </div>
       )
    }
}

export default App;