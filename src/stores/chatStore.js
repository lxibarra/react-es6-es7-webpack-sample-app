import alt from '../alt';
import Actions from '../actions';
import { decorate, bind, datasource } from 'alt-utils/lib/decorators';
import ChannelSource from '../sources/ChannelSource';

@datasource(ChannelSource)
@decorate(alt)
class ChatStore {

  constructor() {
    this.state = { user:null };
  }

  receivedChannels(channels) {
      let selectedChannel;
      _(channels)
      .key()
      .each((key, index)=>{
          console.log('each key:',key);
          channels[key].key = key;
          if(index == 0) {
            channels[key].selected = true;
            selectedChannel = channels[key];
          }
      }).value();
  }

  @bind(Actions.login)
  login(user) {
    this.setState({ user:user });
  }


}

export default alt.createStore (ChatStore);
