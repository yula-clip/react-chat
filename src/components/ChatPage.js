import React from 'react';
import { withStyles } from '@material-ui/core/styles';
  import Sidebar from './Sidebar';
import ChatHeader from './ChatHeader';
import Chat from './Chat';


const styles = theme => ({
  root: {
    display: 'flex',
    position: 'relative',
    width:'100%',
    height:'100%',
    backgroundColor: theme.palette.background.default,
  },
});

class ChatPage extends React.Component {
componentDidMount(){
  const { fetchAllChats, fetchMyChats, setActiveChat, match } = this.props;

  Promise.all([
    fetchAllChats(),
    fetchMyChats()
  ])
  .then(() => {
    if (match.params.chatId) {
      setActiveChat(match.params.chatId);
    }
  });
}

componentWillReceiveProps(nextProps) {
  const { match: { params }, setActiveChat } = this.props;
  const { params: nextParams } = nextProps.match;

  if (nextParams.chatId && params.chatId !== nextParams.chatId) {
    setActiveChat(nextParams.chatId);
  }
}

  render() {
    const { classes, chats, logout, activeUser,
      createChat, joinChat, leaveChat, deleteChat, sendMessage,
      messages, editUser } = this.props;
    return (
      <div className={classes.root}>
        <ChatHeader 
          activeUser={activeUser}
          activeChat={chats.active}
          leaveChat={leaveChat}
          deleteChat={deleteChat}
          logout={logout}
          editUser={editUser}
        />
        <Sidebar chats = {chats} createChat={createChat}/>
        <Chat 
          messages={messages}
          activeChat={chats.active}
          activeUser={activeUser}
          sendMessage={sendMessage}
          joinChat={joinChat}
        />
      </div>
    );
  }
};

export default withStyles(styles)(ChatPage);
