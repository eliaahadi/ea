import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

function Title() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          {/* <Paper className={classes.paper}>TITLE</Paper> */}
          <div>TITLE</div>
        </Grid>
      </Grid>
    </div>
  )
}

function WhoAmI() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>WHO</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

function WhereIWork() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>WHERE</Paper>
        </Grid>
      </Grid>
    </div>
  )
}

function HowIWork() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>HOW</Paper>
        </Grid>
      </Grid>
    </div>
  )
}


export default function Home() {
  return (
    <div>
      <Title />
      <WhoAmI />
      <WhereIWork />
      <HowIWork />
    </div>
  )
};
