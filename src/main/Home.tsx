import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EliaThumbnail from '../img/pro_elia.jpg';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    sectionLight: {
      backgroundColor: '#6fafff'
    },
    paper: {
      padding: theme.spacing(1),
      margin: '0 20px 20px 20px',
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    descriptionText: {
      padding: theme.spacing(1),
      margin: '0 100px 20px 100px',
      textAlign: 'left',
      color: theme.palette.text.secondary,
    },
    imageContainer: {
      textAlign: 'center',
    },
    image: {
      height: '200px',
      width: '200px',
      borderRadius: '50px',
      padding: theme.spacing(3),
    }
  }),
);

function Title() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={3} >
        <Grid item xs={12}>
          <h2 className={classes.paper}>Elia Ahadi</h2>
          <h3 className={classes.paper}>Operations Manager | Full Stack Developer | Educator</h3>
        </Grid>
        <Grid item xs={12} className={classes.imageContainer}>
          <img src={EliaThumbnail} alt="Elia" className={classes.image} />
        </Grid>
      </Grid>
    </div>
  )
}

function WhoAmI() {
  const classes = useStyles();

  return (
    <div className={classes.sectionLight}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3 className={classes.paper}>WHO</h3>
            <h4 className={classes.descriptionText}>
              I'm an experienced operations program management and technical consulting professional with over 5 years experience. 
              I have technical experience in in React/Redux for frontend development and web servers with NodeJS and Python/Django for backend development.
            </h4>
            <h4 className={classes.descriptionText}>
              Throughout my career and the variety of roles I've done, they revolve around me building useful products and services. 
              I have also worked in USA, Afghanistan, India, Japan, China, and Australia.
            </h4>
            <h4 className={classes.descriptionText}>
              Some examples of building teams, products, or services have been:
              <li>
                An operations manager leading technical teams in Afghanistan with DARPA
              </li>
              <li>
                A first product manager at a wearable startup building products in mobile, web, and IoT
              </li>
              <li>
                A full stack software engineer engineering products in Property Tech (PropTech), FinTech, and Healthcare
              </li>
            </h4>
        </Grid>
      </Grid>
    </div>
  )
}

function WhereIWork() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3 className={classes.paper}>WHERE</h3>
          <h4 className={classes.descriptionText}>
            I'm located in USA and work in operations and program management building products for various industries.
          </h4>
        </Grid>
      </Grid>
    </div>
  )
}

function HowIWork() {
  const classes = useStyles();

  return (
    <div className={classes.sectionLight}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3 className={classes.paper}>HOW</h3>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h4>
              Research/Study
            </h4>
            <div>
              Research ideas and study new techniques
            </div>
          </Paper>
        </Grid>        
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h4>
              Strategy/Design
            </h4>
            <div>
              Implement the strategy and design of projects
            </div>
          </Paper>
        </Grid>        
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h4>
              Build/Grow
            </h4>
            <div>
              Build and grow anything, whether it's teams, data, processes
            </div>
          </Paper>
        </Grid>        
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <h4>
            Test/Refactor
            </h4>
            <div>
              Test and refactor for optimized solution, repeat
            </div>
          </Paper>
        </Grid>        
      </Grid>
    </div>
  )
}

function News() {
  const classes = useStyles();

  return (
    <div >
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <h3 className={classes.paper}>NEWS</h3>
          <h4 className={classes.paper}>This website is built with JavaScript, TypeScript, React, React Router, Material-UI.</h4>
          <Typography className={classes.paper}>
            <Link target="_blank" href="https://www.linkedin.com/in/eliaahadi">
              My LinkedIn
            </Link>
          </Typography>
          <Typography className={classes.paper}>
            <Link target="_blank" href="https://www.github.com/eliaahadi">
              My Github
            </Link>
          </Typography>
          <Typography className={classes.paper}>
            <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/Elia_Ahadi_DProjResume.pdf">
              My Resume (as of Oct 30, 2020)
            </Link>
          </Typography>
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
      <News />
    </div>
  )
};
