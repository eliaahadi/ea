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

function Projects() {
  const classes = useStyles();

  return (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper variant="outlined" className={classes.paper}>
            <Typography variant='h6' >
              PROJECTS
            </Typography>
          </Paper>      
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <div className={classes.title}>
                <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/Bayer_Product_Validation.pdf">
                  Bayer Product Validation
                </Link>
              </div>
              <div className={classes.descriptionText}>​
                Product validation with Bayer client and did user stories, peronas, empathy maps, and usability A/B tests.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <div className={classes.title}>
                <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/Moov_Product_Breakdown.pdf">
                  Moov Product Breakdown
                </Link>
              </div>
              <div className={classes.descriptionText}>​
                Product breakdown of the Moov wearable that includes user flows, product funnels, market sizing, and lean canvas models.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <div className={classes.title}>
                <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/MoovHabitForming.png">
                  Moov Habit Forming Minimum Viable Product (MVP) Mockup Design
                </Link>
              </div>
              <div className={classes.descriptionText}>​
                MVP mockup for ideating on habit forming behaviors for fitness users.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <div className={classes.title}>
                <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/Cap1_Authentication_Case_Study.pdf">
                  Capital One Authentication Case Study
                </Link>
              </div>
              <div className={classes.descriptionText}>​
                Case study of analyzing the authentication problems and proposing solutions.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <div className={classes.title}>
                <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/Delta_Airlines_Design_Challenge.pdf">
                  Delta Airlines Air Travel Design Challenge
                </Link>
              </div>
              <div className={classes.descriptionText}>​
                Problem defintion, user profiles, and solutions on air travel design challenges.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <div className={classes.title}>
                <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/Darby_Smart_App_User_Retention.pdf">
                  Darby Smart App User Retention Study
                </Link>
              </div>
              <div className={classes.descriptionText}>​
                Case study to understand user retention for the Darby DIY mobile app.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.cardRoot}>
            <CardContent>
              <div className={classes.title}>
                <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/Fannie_Mae_TPM_30-60-90-Day_Plan.pdf">
                  Initial 90 day Fannie Mae TPM Plan
                </Link>
              </div>
              <div className={classes.descriptionText}>​
                Initial 90 day work plan for a TPM role at Fannie Mae.
              </div>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card className={classes.cardRoot}>
          <CardContent>
            <div className={classes.title}>
              <Link target="_blank" href="https://www.github.com/eliaahadi/ea/blob/master/src/attachments/CFP_Tervela_MarketingPlan.pdf">
                Cloud FastPath Marketing Plan
              </Link>
            </div>
            <div className={classes.descriptionText}>​
              Marketing plan for CFP (cloud migration service).
            </div>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
  )
}

export default function TechnicalProgramManagement() {
  return (
    <div>
      <Projects />
    </div>
  )
};
