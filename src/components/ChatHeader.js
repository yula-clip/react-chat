import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MoreIcon from '@material-ui/icons/MoreVert';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

const styles = theme =>({
  appBar: {
    position: 'fixed',
    width: `calc(100% - 320px)`,
  },
  grow: {
    flexGrow: 1,
  },
  avatar: {
    marginRight: '16px',
  },
});

const ChatHeader = ({classes}) => (
  <AppBar color = 'primary' className={classes.appBar}>
          <Toolbar>
            <Avatar className={classes.avatar}>H</Avatar>
            <Typography variant="h6" color="inherit" noWrap>
              DogeCodes React Chat
            </Typography>
            <IconButton 
             color="inherit">
              <MoreIcon />
            </IconButton>
            <div className={classes.grow} />
            <div>
                <IconButton
                  aria-haspopup="true"
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
            </div>
          </Toolbar>
        </AppBar>
);

export default withStyles(styles)(ChatHeader);
