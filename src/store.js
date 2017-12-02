import { observable, toJS ,computed} from "mobx";
class Store {
    @observable count = 0;
    incrementCount = () => {
        this.count++;
    }
    decrementCount=()=>{
        this.count--;
    }
    getValue=()=>{
        return this.count;
    }
}
export  default  Store;