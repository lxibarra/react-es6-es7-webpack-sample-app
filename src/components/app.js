import React from 'react';
import ChannelList from './ChannelList.jsx';
import MessageList from './MessageList.jsx';
import MessageBox from './MessageBox.jsx';

import connectToStores from 'alt-utils/lib/connectToStores';
import chatStore from '../stores/chatStore';
import Login from './Login.jsx';

import mui from 'material-ui';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
//var ThemeManager = new mui.Styles.ThemeManager();
import AppBar from 'material-ui/lib/app-bar';
var Colors = mui.Styles.Colors;
//var AppBar = mui.AppBar;

@connectToStores
class App extends React.Component {
    constructor() {
        super();

    }

    static getStores() {
      return [chatStore];
    }

    static getPropsFromStores() {
      return chatStore.getState();
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

      var view = <Login/>;
      if(this.props.user) {
        view = (
          <div key={ new Date().getTime() }>
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

       return (
        <div>
            <AppBar title="Awesome Chat App"/>
            {view}
        </div>
       )
    }
}

export default App;
