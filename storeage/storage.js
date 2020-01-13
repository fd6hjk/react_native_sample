import { AsyncStorage } from "react-native";

import TimeItem from "../model/time_item";

export default class Storage {

    constructor() {
        this.genKey = this.genKey.bind(this);

        this.getItemByDate = this.getItemByDate.bind(this);

        this.setItem = this.setItem.bind(this);
    }

    genKey(date){
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
    }
    
    async getItemByDate(date){


        try{

            const key = this.genKey(date);

            const res = await AsyncStorage.getItem(key);

            if(res !== null ){

                console.log(res);

                const tiemItems = JSON.parse(res);

                return tiemItems.map((item) => TimeItem.fromJson(item)); 
            }

            return [];

        } catch (e) {
            console.log(e);
        }
    }

    async setItem(date, item) {
        try {
            console.log("www");

            const key = this.genKey(date);

            await AsyncStorage.setItem(key, JSON.stringify(item));
            console.log("pp");
        } catch (e) {
            console.log(e);
        }
    }
}