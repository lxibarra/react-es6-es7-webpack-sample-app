import alt from '../alt';
import Firebase from 'firebase';

class Actions {

  constructor() {
    this.generateActions(
      'channelsReceived',
      'channelsFailed'
    );
  }

  login(args) {
    return (dispatch)=> {
        let firebaseRef = new Firebase("https://react-stack01.firebaseio.com");
        firebaseRef.authWithOAuthPopup("google", (error, user)=>{
          if(error) {
            return;
          }

          dispatch(user);

        });
    }
  }
}

export default alt.createActions(Actions);
