import { observable, computed, action } from 'mobx';

export class AppStore {

    @observable public item: string;

}

export default AppStore;