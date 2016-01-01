import React from 'react';
import MessageList from './MessageList.jsx';
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
            <MessageList/>
        </div>
       )
    }
}

export default App;