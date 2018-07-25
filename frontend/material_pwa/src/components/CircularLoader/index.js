import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  wrapper: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 9999999999999,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  progress: {
    margin: theme.spacing.unit * 2,
  },
});

function CircularLoader(props) {
  const { classes } = props;
  return (
    <div className={classes.wrapper}>
      <CircularProgress className={classes.progress} size={50} />
    </div>
  );
}

export default withStyles(styles)(CircularLoader);
