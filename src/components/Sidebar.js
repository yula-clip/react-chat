import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import TextField from "@material-ui/core/TextField";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import RestoreIcon from "@material-ui/icons/Restore";
import ExploreIcon from "@material-ui/icons/Explore";
import ChatList from "./ChatList";
import AddChatButton from "./AddChatButton";

const styles = theme => ({
  drawerPaper: {
    position: "relative",
    height: "100%",
    width: 320
  },
  drawerHeader: {
    ...theme.mixins.toolbar,
    paddingLeft: theme.spacing.unit * 3,
    paddingRight: theme.spacing.unit * 3
  },
  chatsList: {
    height: `calc(100% - 56px)`,
    overflowY: "scroll"
  },
  newChatButton: {
    position: "absolute",
    left: "auto",
    bottom: theme.spacing.unit * 3 + 48,
    right: theme.spacing.unit * 3
  }
});
class Sidebar extends React.Component {
  state = {
    searchValue: "",
    activeTab: 0
  };

  handleSearchChange = event => {
    this.setState({
      searchValue: event.target.value
    });
  };

  handleTabChange = (event, value) => {
    this.setState({
      activeTab: value
    });
  };

  filterChats = chats => {
    const { searchValue } = this.state;
    return chats
      .filter(chat =>
        chat.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      .sort((one, two) =>
        one.title.toLowerCase() <= two.title.toLowerCase() ? -1 : 1
      );
  };
  render() {
    const { classes, chats, createChat, isConnected } = this.props;
    const { activeTab, searchValue } = this.state;

    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <TextField
            type="search"
            fullWidth
            margin="normal"
            placeholder="Search chats..."
            value={searchValue}
            onChange={this.handleSearchChange}
          />
        </div>
        <Divider />
        <ChatList
          disabled={!isConnected}
          chats={this.filterChats(activeTab === 0 ? chats.my : chats.all)}
          activeChat={chats.active}
        />
        <AddChatButton disabled={!isConnected} onClick={createChat} />
        <BottomNavigation
          value={activeTab}
          onChange={this.handleTabChange}
          showLabels
        >
          <BottomNavigationAction label="My Chats" icon={<RestoreIcon />} />
          <BottomNavigationAction label="Explore" icon={<ExploreIcon />} />
        </BottomNavigation>
      </Drawer>
    );
  }
}

export default withStyles(styles)(Sidebar);
