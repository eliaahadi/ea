import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    section: {
      // height: '500px',
      // flexGrow: 1,

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    descriptionText: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    imageContainer: {
      justifyContent: 'center',
    },
    image: {
      height: '200px',
      width: '200px',
      // padding: theme.spacing(2),
      // textAlign: 'center',
    }
  }),
);

function FullStack() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Full Stack</Paper>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>Homads Real Estate Website​</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>Pocket Change Web App</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>BlockChain Web App​</h4>
        </Grid>
      </Grid>
    </div>
  )
}

function FrontEnd() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Front End</Paper>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>Image Cropper</h4>
        </Grid>
      </Grid>
    </div>
  )
}

function BackEnd() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>Back End</Paper>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>​Image Thumbnail Service</h4>
        </Grid>
      </Grid>
    </div>
  )
}

export default function Development() {
  return (
    <div>
      <FullStack />
      <FrontEnd />
      <BackEnd />
    </div>
  )
};
