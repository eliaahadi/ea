import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardRoot: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.primary.main,
    },
    title: {
      padding: theme.spacing(3),
      textAlign: 'left',
      color: theme.palette.text.primary,
    },
    descriptionText: {
      padding: theme.spacing(2),
      textAlign: 'left',
      fontStyle: 'normal'
    },
    featuresText: {
      padding: theme.spacing(2),
      textAlign: 'left',
      fontStyle: 'italic'
    },
    techText: {
      padding: theme.spacing(2),
      textAlign: 'left',
      fontStyle: 'italic'
    },
  }),
);

function TalksHome() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant='h6' >
            TALKS
          </Typography>
        </Paper>      
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <div className={classes.title}>
              <Link target="_blank" href="https://opsummit.productledalliance.com/talks/designing-scalable-applications/">
                Product Led Alliance Product Operations Summit
              </Link>
            </div>
            <ul>
              <li>
              <div className={classes.descriptionText}>​
                Spoke on 'Designing Scalable Web Applications'
              </div>
              </li>
              <li>
              <div className={classes.featuresText}>​
                Topics discussed: Software Architecture Design
              </div>
              </li>
              <li>  
              <div className={classes.techText}>​
                Tech used: Python, JavaScript, PostGreSQL, MongoDB, Redis, RabbitMQ, AWS
              </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <div className={classes.title}>
              <Link target="_blank" href="https://www.meetup.com/CodeChrysalis/events/247572503/">
                Code Chyrsalis Meetup
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Sole speaker at 'Creating Simple Databases' technical meetup  
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Topics discussed: CRUD Databases
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: MySQL, JavaScript
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function Education() {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant='h6'>
            EDUCATION
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <div className={classes.title}>
              <Link target="_blank" href="https://www.codechrysalis.io/foundations">
                Code Chyrsalis JavaScript Foundations Instructor
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Taught students in JavaScript fundamentals
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: JavaScript, HTML, CSS
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, Test Driven Development
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <div className={classes.title}>
              <Link target="_blank" href="https://www.thinkful.com/bootcamp/web-development/full-time/">
                Thinkful Full Stack Web Mentor
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Mentor students in full stack web development
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Items discussed: JavaScript, web server, security
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, React, NodeJS, jQuery, JWT
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

export default function Talks() {
  return (
    <div>
      <TalksHome />
      <Education />
    </div>
  )
};
