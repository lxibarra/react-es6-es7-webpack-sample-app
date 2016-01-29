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

  @bind(Actions.channelsReceived)
  receivedChannels(channels) {
      let selectedChannel;
      _(channels)
      .keys()
      .each((key, index)=>{
          channels[key].key = key;
          if(index == 0) {
            channels[key].selected = true;
            selectedChannel = channels[key];
          }

      }).value();

      //i think this is failing, error on set state in unmounted
      this.setState({
        channels,
        selectedChannel
      })

  }

  @bind(Actions.login)
  login(user) {
    this.setState({ user:user });
  }


}

export default alt.createStore (ChatStore);
