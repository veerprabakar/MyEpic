import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { NavLink, Switch, Route } from 'react-router-dom';

import { NewShop, EditShop, ShopStore } from './';

interface Props {
  shopstore?: ShopStore;
}

@inject('shopstore')
@observer
export class Shop extends React.Component<Props, {}> {

  render() {
    
    if (this.props.shopstore === undefined) {
      return null;
    }

    return (
      <div className="App">
       {this.props.shopstore.counter}

        <button onClick={this.props.shopstore.increment}>My button</button>
       <ul>
        <li>
          <NavLink activeClassName="active" to="/shop/newshop">new</NavLink> 
        </li>
        <li>
          <NavLink activeClassName="active" to="/shop/editshop">edit</NavLink>
        </li>
      </ul>

      <Switch>
        <Route path="/shop/newshop" component={NewShop}/>
        <Route path="/shop/editshop" component={EditShop}/>
      </Switch>

      </div>
    );
  }
}
