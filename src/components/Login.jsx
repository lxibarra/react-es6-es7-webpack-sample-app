import React from 'react';
import mui from 'material-ui';
import Actions from '../actions';

let {
  Card,
  CardText,
  RaisedButton
} = mui;

class Login extends React.Component {

//Aqui me quede
  onClick() {
    Actions.login();
  }

  render() {
    return (
      <Card style={{
          'maxWidth':'800px',
          'margin': '30px auto',
          'padding': '50px'
        }}>
        <CardText style={{
            'textAlign':'center'
          }}>
          To start chatting away, please login with your login account
        </CardText>
        <RaisedButton style={{
            'display':'block'
          }} onClick={this.onClick.bind(this)} label="Login with google">
        </RaisedButton>
      </Card>
    )
  }
}

export default Login;
