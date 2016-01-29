import Actions from '../actions';
import Firebase from 'firebase';


let firebaseRef = new Firebase("https://react-stack01.firebaseio.com/channels");


let ChannelSource = {
  getChannels: {
    remote(state) {
      return new Promise(function(resolve, reject) {
          console.log('Promisifying');
          firebaseRef.once("value", (dataSnapshot)=> {
            let channels = dataSnapshot.val();
            resolve(channels);
          });
      });
    },
    success:Actions.channelsReceived,
    error:Actions.channelsFailed
  }
}

export default ChannelSource;
