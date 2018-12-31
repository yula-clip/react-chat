import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Modal from "@material-ui/core/Modal";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  newChatButton: {
    position: "absolute",
    left: "auto",
    right: theme.spacing.unit * 3,
    bottom: theme.spacing.unit * 3 + 48
  },
  modal: {
    padding: theme.spacing.unit * 3,
    margin: theme.spacing.unit * 3
  }
});

class AddChatButton extends React.Component {
  state = {
    open: false,
    title: {
      value: "",
      isValid: true
    }
  };

  toggleModal = () => {
    this.setState({ open: !this.state.open });
  };

  handleTitleChange = event => {
    this.setState({
      title: {
        value: event.target.value,
        isValid: true
      }
    });
  };

  handleCreateClick = event => {
    event.preventDefault();

    const { title } = this.state;

    if (!title.value) {
      this.setState({
        title: {
          value: title.value,
          isValid: false
        }
      });

      return;
    }

    this.props.onClick(title.value);
    this.toggleModal();
    this.setState({
      title: {
        value: "",
        isValid: true
      }
    });
  };

  render() {
    const { classes, disabled } = this.props;
    const { open, title } = this.state;
    return (
      <React.Fragment>
        <Button
          disabled={disabled}
          variant="fab"
          color="primary"
          onClick={this.toggleModal}
          aria-label="Add"
          className={classes.newChatButton}
        >
          <AddIcon />
        </Button>
        <Modal
          open={open}
          className={classes.modalWrapper}
          onClose={this.toggleModal}
        >
          <Paper className={classes.modal}>
            <Typography variant="h6" id="modal-title">
              Create new chat
            </Typography>
            <TextField
              required
              fullWidth
              label="New chat"
              placeholder="Type the title..."
              type="text"
              margin="normal"
              autoComplete="new-chat"
              value={title.value}
              onChange={this.handleTitleChange}
              error={!title.isValid}
            />
            <Button color="primary" onClick={this.handleCreateClick}>
              Create
            </Button>
          </Paper>
        </Modal>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(AddChatButton);
