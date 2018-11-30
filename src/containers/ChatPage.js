import { connect } from 'react-redux';
import {fetchAllChats, fetchMyChats, setActiveChat} from '../actions/chats';
import ChatPage from '../components/ChatPage';
import { bindActionCreators } from 'redux';
import * as fromChats from '../reducers/chats';

const mapStateToProps = state => ({
  chats: fromChats.getByIds(state.chats, state.chats.allIds)
});

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchAllChats,
  fetchMyChats,
  setActiveChat
}, dispatch); 

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatPage);
