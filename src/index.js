import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter,Switch, Route } from 'react-router-dom'

import Home from '@/views/Home'
import UnauthorizedLayout from '@/layouts/UnauthorizedLayout'

import '@/styles/index.less';
import * as serviceWorker from './serviceWorker';


const App = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={UnauthorizedLayout} />
      <Route path="/" component={Home} />
      <Route path="/:user" component={Home} />
      <Route component={Home} />
    </Switch>
  </BrowserRouter>
)

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
