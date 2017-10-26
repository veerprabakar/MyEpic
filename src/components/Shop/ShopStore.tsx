import { observable, computed, action } from 'mobx';

export class ShopStore {

    @observable public counter: number = 0;

    @action
    public increment= (): void => {
        this.counter++;
    }
}