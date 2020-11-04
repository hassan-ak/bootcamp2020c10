import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  appBar: {
    top: 'auto',
    bottom: 0,
    boxShadow: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  title: {
    color: 'grey'
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar position="static" color="transparent" className={classes.appBar}>
        <Toolbar>
          <div className={classes.grow} />
          <Typography variant="h6" className={classes.title}>
            by: Hassan Ali Khan
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}