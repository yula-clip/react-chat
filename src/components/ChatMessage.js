import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Avatar from './Avatar';


const styles = theme =>({
  messageWrapperFromMe:{
    justifyContent: 'flex-end !important',
  },
  message: {
    maxWidth: '70%',
    minWidth: '10%',
    padding: theme.spacing.unit,
    marginLeft: theme.spacing.unit * 2,
  },
  messageFromMe: {
    marginRight: theme.spacing.unit * 2,
    backgroundColor: '#e6dcff',
  },
  messageWrapper:{
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: `${theme.spacing.unit}px ${theme.spacing.unit * 3}px`,
  },
});

const ChatMessage = ({ classes, sender, content }) => {
  const isMessageFromMe = sender === 'me';

  const userAvatar = (
    <Avatar colorFrom = {sender}>
      {sender}
    </Avatar>
  );

  return (
    <div className={classnames(
      classes.messageWrapper,
      isMessageFromMe && classes.messageWrapperFromMe
    )}>
      {!isMessageFromMe && userAvatar}
      <Paper className={classnames(
        classes.message,
        isMessageFromMe && classes.messageFromMe
      )}>
        <Typography variant="caption">
          {sender}
        </Typography>
        <Typography variant="body1">
          {content}
        </Typography>
      </Paper>
      {isMessageFromMe && userAvatar}
    </div>
  );
};

export default withStyles(styles)(ChatMessage);
