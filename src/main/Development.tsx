import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

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
    featuresText: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.primary,
      fontStyle: 'bold'
    },
    techText: {
      padding: theme.spacing(2),
      textAlign: 'left',
      color: theme.palette.text.secondary,
      fontStyle: 'italic'
    },
    imageContainer: {
      justifyContent: 'center',
    },
    image: {
      height: '200px',
      width: '200px',
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
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="https://www.bayer.com/">
                Bayer Digital Transformation Website
              </Link>
              <div className={classes.descriptionText}>​
                Bayer website in Tokyo built frontend mostly and some backend.
              </div>
              <div className={classes.featuresText}>​
                Features built: Search page, listings, survey, add/edit medical record
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, React, Redux, NodeJS, PostGreSQL, TDD, Jasmine, Mocha/Chai, CI/CD
              </div>
            </Typography>
          ​</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="https://www.homads.com">
                Homads Website
              </Link>
              <div className={classes.descriptionText}>​
                Real estate website in Austin built frontend mostly with some backend integration.
              </div>
              <div className={classes.featuresText}>​
                Features built: Homepage, survey, search page
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, React, Redux, Ruby on Rails, PostGreSQL, GoogleMaps API
              </div>
            </Typography>
          ​</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="​​https://www.pocket-change.jp/en/​​">
                PocketChange Website
              </Link>
              <div className={classes.descriptionText}>​
                Fintech website for currency conversion built fullstack features.
              </div>
              <div className={classes.featuresText}>​
                Features built: Currency Converter Dashboard
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, React, Redux, NodeJS, Bootstrap
              </div>
            </Typography>
          ​</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="​​https://gitai.tech/">
                GITAI Robot System Monitoring Web App
              </Link>
              <div className={classes.descriptionText}>​
                Robot Monitoring web interface for processing and viewing robot system data.
              </div>
              <div className={classes.featuresText}>​
                Features built: Web server, search site, table listings, hosting service
              </div>
              <div className={classes.techText}>​
                Tech used: Python, Django, uWSGI, nginx, Linux, Ubuntu, AWS, Docker, Kubernetes
              </div>
            </Typography>
          ​</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="​​https://www.thinkful.com/bootcamp/web-development/full-time/">
                Thinkful Full Stack Web Mentor
              </Link>
              <div className={classes.descriptionText}>​
                Mentor students in full stack web development
              </div>
              <div className={classes.featuresText}>​
                Features built: JavaScript fundamentals, Quiz app, Async web server, portfolio
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, React, NodeJS, jQuery
              </div>
            </Typography>
          ​</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="​​https://github.com/eliaahadi/dashboard_spa">
                Stock Exchange Dashboard Web App
              </Link>
              <div className={classes.descriptionText}>​
                Dashboard web application using stock exchange APIs.
              </div>
              <div className={classes.featuresText}>​
                Features built: Dashboard, API integration
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, React, Ruby On Rails, PostGreSQL, Heroku
              </div>
            </Typography>
          ​</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="​​https://github.com/eliaahadi/buildBlockchain">
                BlockChain Web App
              </Link>
              <div className={classes.descriptionText}>​
                Created blockchain app
              </div>
              <div className={classes.featuresText}>​
                Features built: Blockchain, Mining, Transactions
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, React, C#, Jest
              </div>
            </Typography>
          ​</h4>
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
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="​​https://github.com/eliaahadi/image_cropper">
                Image Cropper
              </Link>
              <div className={classes.descriptionText}>​
                Developed UI for cropping images on mobile apps
              </div>
              <div className={classes.featuresText}>​
                Features built: image cropping UI
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, React Native
              </div>
            </Typography>
          ​</h4>
        </Grid>
        <Grid item xs={6}>
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="​​https://www.codechrysalis.io/foundations">
                Code Chyrsalis Foundations Instructor
              </Link>
              <div className={classes.descriptionText}>​
                Taught students in JavaScript fundamentals
              </div>
              <div className={classes.featuresText}>​
                Features built: JavaScript, HTML, CSS
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, Test Driven Development
              </div>
            </Typography>
          ​</h4>
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
          <h4 className={classes.paper}>
            <Typography className={classes.root}>
              <Link href="​​https://github.com/eliaahadi/python-django-backend-image-thumbnail-service">
                Image Thumbnail Service
              </Link>
              <div className={classes.descriptionText}>​
                Microservice to resize an image with work queue
              </div>
              <div className={classes.featuresText}>​
                Features built: Microservice, Work queue, File Storage
              </div>
              <div className={classes.techText}>​
                Tech used: JavaScript, Python, Django, Redis, Celery
              </div>
            </Typography>
          ​</h4>
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
