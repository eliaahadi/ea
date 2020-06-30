import * as React from "react";
import { HashRouter as Router, Route, Redirect, Switch, Link, LinkProps } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { default as Tab, TabProps } from '@material-ui/core/Tab';

import Home from './Home';
import ProductManagement from './ProductManagement';
import Development from './Development';
import HomeIcon from '@material-ui/icons/Home';
import CodeIcon from '@material-ui/icons/Code';
import TimelineIcon from '@material-ui/icons/Timeline';

const LinkTab: React.ComponentType<TabProps & LinkProps> = Tab as React.ComponentType<TabProps & LinkProps>;

function NavBar () {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div >
      <AppBar position="static" >
        <Tabs value={value} onChange={handleChange} centered>
          <LinkTab label='Home' icon={ <HomeIcon />} component={Link} to="/" />
          <LinkTab label='Product Management' icon={<TimelineIcon />} component={Link} to="/pm" />
          <LinkTab label='Development' icon={<CodeIcon />} component={Link} to="/development" />
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
          <Route exact path="/" component={ Home } />
          <Route exact path="/pm" component={ ProductManagement } />
          <Route exact path="/development" component={ Development } />
          <Redirect from="" to="/" />
        </Switch>
      </div>
    </Router>
  )
}
