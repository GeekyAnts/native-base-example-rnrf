import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './pageOne';
import PageTwo from './pageTwo';

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}
