import * as React from 'react';
import { Provider } from 'mobx-react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
  } from 'react-router-dom';

import  { Home } from '../Home';
import  { Header } from '../Header';
import  { Shop, ShopStore } from '../Shop';
import  { NotFound } from '../NotFound';
import  { StoreNames } from '../StoreNames';
import  { AppStore } from './AppStore';
import './App.css';

export class App extends React.Component {
    render() {
      const states =  {
        [StoreNames.appstore]: new AppStore(),
        [StoreNames.shopstore]: new ShopStore()
      };
  
      return (
        <Provider {...states}>
        <Router>
          <div>
            <Header/>
            <Switch>
              <Route exact={true} path="/" component={Home}/>
              <Route exact={false} path="/home" component={Home}/>
              <Route exact={false} path="/shop" component={Shop}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </Router>
    </Provider>
      );
    }
}