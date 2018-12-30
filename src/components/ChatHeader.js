import React from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Avatar from "./Avatar";
import UserMenu from "./UserMenu";
import ChatMenu from "./ChatMenu";

const styles = theme => ({
  appBar: {
    position: "fixed",
    width: `calc(100% - 320px)`
  },
  grow: {
    flexGrow: 1
  },
  avatar: {
    marginRight: "16px"
  }
});

class ChatHeader extends React.Component {
  render() {
    const {
      classes,
      activeUser,
      activeChat,
      logout,
      leaveChat,
      deleteChat,
      editUser,
      isConnected
    } = this.props;
    return (
      <AppBar color="primary" className={classes.appBar}>
        <Toolbar>
          {activeChat ? (
            <React.Fragment>
              <Avatar colorFrom={activeChat._id} className={classes.avatar}>
                {activeChat.title}
              </Avatar>
              <Typography variant="h6" color="inherit" noWrap>
                {activeChat.title}
                <ChatMenu
                  disabled={!isConnected}
                  activeUser={activeUser}
                  onLeaveClick={() => leaveChat(activeChat._id)}
                  onDeleteClick={() => deleteChat(activeChat._id)}
                />
              </Typography>
            </React.Fragment>
          ) : (
            <Typography variant="h6" color="inherit" noWrap>
              DogeCodes React Chat
            </Typography>
          )}
          <div className={classes.grow} />
          <div>
            <UserMenu
              disabled={!isConnected}
              activeUser={activeUser}
              onLogoutClick={logout}
              onEditProfileClick={editUser}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(ChatHeader);
