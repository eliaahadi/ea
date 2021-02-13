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

function FullStack() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant='h6' >
            FULL STACK
          </Typography>
        </Paper>             
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <div className={classes.title}>
              <Link target="_blank" href="https://www.bayer.com/">
                Bayer Digital Transformation Website
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Bayer website in Tokyo built frontend mostly and some backend
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: Search page, listings, survey, add/edit medical record
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, React, Redux, NodeJS, PostGreSQL, TDD, Jasmine, Mocha/Chai, CI/CD
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
              <Link target="_blank" href="https://www.homads.com">
                Homads Website
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Real estate website in Austin built frontend mostly with some backend integration
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: Homepage, survey, search page
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, React, Redux, Ruby on Rails, PostGreSQL, GoogleMaps API
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
              <Link target="_blank" href="https://www.pocket-change.jp​​">
                PocketChange Website
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Fintech website for currency conversion built fullstack features
                </div>
              </li>
              <li> 
                <div className={classes.featuresText}>​
                  Features built: Currency Converter Dashboard
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, React, Redux, NodeJS, Bootstrap
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
              <Link target="_blank" href="https://www.gitai.tech/">
                GITAI Robot System Monitoring Web App
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Robot Monitoring web interface for processing and viewing robot system data
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: Web server, search site, table listings, hosting service
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: Python, Django, uWSGI, nginx, Linux, Ubuntu, AWS, Docker, Kubernetes
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
              <Link target="_blank" href="https://www.github.com/eliaahadi/dashboard_spa">
                Stock Exchange Dashboard Web App
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Dashboard web application using stock exchange APIs
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: Dashboard, API integration
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, React, Ruby On Rails, PostGreSQL, Heroku
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
              <Link target="_blank" href="https://www.github.com/eliaahadi/buildBlockchain">
                BlockChain Web App
              </Link>
              </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Created blockchain app
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: Blockchain, Mining, Transactions
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, React, C#, Jest
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
              <Link target="_blank" href="https://www.github.com/eliaahadi/react-node-stripe-payment">
                Stripe Payment Web App
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Built payment app
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: eCommerce, Transactions, Payments
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, React, Node, Stripe API
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function FrontEnd() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant='h6'>
            FRONT END
          </Typography>
        </Paper>      
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <div className={classes.title}>
              <Link target="_blank" href="https://www.github.com/eliaahadi/image_cropper">
                Image Cropper
              </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Developed UI for cropping images on mobile apps
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: image cropping UI
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, React Native
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}

function BackEnd() {
  const classes = useStyles();

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Paper variant="outlined" className={classes.paper}>
          <Typography variant='h6'>
            BACK END
          </Typography>
        </Paper>        
      </Grid>
      <Grid item xs={6}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <div className={classes.title}>
            <Link target="_blank" href="https://www.github.com/eliaahadi/python-django-backend-image-thumbnail-service">
              Image Thumbnail Service
            </Link>
            </div>
            <ul>
              <li>
                <div className={classes.descriptionText}>​
                  Microservice to resize an image with work queue
                </div>
              </li>
              <li>
                <div className={classes.featuresText}>​
                  Features built: Microservice, Work queue, File Storage
                </div>
              </li>
              <li>
                <div className={classes.techText}>​
                  Tech used: JavaScript, Python, Django, Redis, Celery, GCP
                </div>
              </li>
            </ul>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
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
