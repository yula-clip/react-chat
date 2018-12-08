import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ChatListItem from './ChatListItem';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  chatsList: {
    height: 'calc(100% - 56px)',
    overflowY: 'scroll',
  },
  noChats: {
    textAlign: 'center',
  }
});

const ChatList = ({ classes, chats, activeChat }) => (
  <List className={classes.chatsList}>
  {chats && chats.length ? (
    chats.map((chat) => (
      <ChatListItem
        key={chat._id}
        active={activeChat && activeChat._id === chat._id}
        chatId={chat._id}
        {...chat}
      />
    ))
  ) : (
    <Typography variant="subheading" className={classes.noChats}>
      There is no chats yet...
    </Typography>
  )}
  </List>
);

export default withStyles(styles)(ChatList);
