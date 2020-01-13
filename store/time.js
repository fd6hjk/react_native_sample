import { observable } from "mobx";
import Storage from "../storeage/storage";
import TimeItem from "../model/time_item";


export default class TimeStore {

    items = observable([]);

    storage = new Storage();

    constructor(){
        this.setDailyItem([new TimeItem("hello", new Date(), 10, "소비")]);
    }

    async getDailyItem(date){
        const items = await this.storage.getItemByDate(date);

        this.items = items;
    }

    async setDailyItem(date, item) {
        console.log(item);
        await this.storage.setItem(date, [ item ]);
    }

}