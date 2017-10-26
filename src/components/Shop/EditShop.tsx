import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { ShopStore } from './';
import { StoreNames } from '../StoreNames';

interface Props {
  shopstore?: ShopStore;
}

@inject(StoreNames.shopstore)
@observer
export class EditShop extends React.Component<Props, {}> {

  render() {
    
    if (this.props.shopstore === undefined) {
      return null;
    }

    return (
      <div className="App">
       Edit Shop {this.props.shopstore.counter}
      </div>
    );
  }
}
