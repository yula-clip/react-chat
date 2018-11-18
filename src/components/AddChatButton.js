import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = theme => ({
  newChatButton: {
    position: 'absolute',
    left: 'auto',
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48, // + bottom navigation
  },
});

const AddChatButton = ({ classes }) => (
  <Button variant="fab" color="primary" aria-label="Add" className={classes.newChatButton}>
    <AddIcon />
  </Button>
);

export default withStyles(styles)(AddChatButton);
