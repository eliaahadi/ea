
import * as React from "react";
// import * as ReactDOM from "react-dom";
// import { MonitorContainer } from "Monitor/MonitorContainer";
import { BrowserRouter as Router, Route, Redirect, Switch, Link, LinkProps } from 'react-router-dom';
// import { RemoteContainer } from "Remote/RemoteContainer";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import { default as Tab, TabProps } from '@material-ui/core/Tab';
import ListIcon from '@material-ui/icons/ListAlt';
import RemoteControlIcon from '@material-ui/icons/SettingsRemote';
// import './reset.css';
// import './index.scss';
// import '../assets/fonts/icons/flaticon.css';
import Home from './Home';
import ProductManagement from './ProductManagement';
import Development from './Development';

const LinkTab: React.ComponentType<TabProps & LinkProps> = Tab as React.ComponentType<TabProps & LinkProps>;

// export interface AppState {
//     value: number;
// }

function NavBar () {
      const [value, setValue] = React.useState(0);

      const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
            setValue(newValue);
          };
        return (
        <div>
            <AppBar position="static">
            {/* //     <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"> */}
                <Tabs value={value} onChange={handleChange} >
                    <LinkTab icon={'HOME'} component={Link} to="/portfolio/home" />
                    <LinkTab icon={'Development'} component={Link} to="/portfolio/development" />
                    <LinkTab icon={'Product Management'} component={Link} to="/portfolio/pm" />
                </Tabs>
            </AppBar>
        </div>
        )
    // }
};

export default function App() {
  return (
  <Router>
    <div>
        <NavBar />
        <Switch>
            <Route exact path="/portfolio/home" component={ Home } />
            <Route exact path="/portfolio/development" component={ Development } />
            <Route exact path="/portfolio/pm" component={ ProductManagement } />
            {/* <Redirect from="/" to="/" /> */}
        </Switch>
    </div>
</Router>
  )
}
