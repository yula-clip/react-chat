import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

class ErrorMessage extends React.Component {
  static defaultProps = {
    error: null
  };

  state = {
    open: !!this.props.error
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.error) {
      this.setState({ open: true });
    }
  }

  handleCloseSnackbar = () => {
    this.setState({ open: false });
  };

  render() {
    const { error } = this.props;

    if (!error) {
      return null;
    }

    return (
      <Snackbar
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left"
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleCloseSnackbar}
        message={<span>{error.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            onClick={this.handleCloseSnackbar}
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  }
}

export default ErrorMessage;
