import * as React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch, Link, LinkProps } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { default as Tab, TabProps } from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';

import Home from './Home';
import ProductManagement from './ProductManagement';
import Development from './Development';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      // flexGrow: 1,
      justifyContent: 'center'
    },
  }),
);
const LinkTab: React.ComponentType<TabProps & LinkProps> = Tab as React.ComponentType<TabProps & LinkProps>;

function NavBar () {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} >
          <LinkTab icon={'HOME'} component={Link} to="/ea" />
          <LinkTab icon={'Development'} component={Link} to="/ea/development" />
          <LinkTab icon={'Product Management'} component={Link} to="/ea/pm" />
        </Tabs>
      </AppBar>
    </div>
  )
};

export default function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/ea" component={ Home } />
          <Route exact path="/ea/development" component={ Development } />
          <Route exact path="/ea/pm" component={ ProductManagement } />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    </Router>
  )
}
