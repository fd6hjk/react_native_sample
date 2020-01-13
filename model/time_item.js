export default class TimeItem {

    constructor(title, date, duration, tag) {
        this.title = title;
        this.date = date;
        this.duration = duration;
        this.tag = tag;


    }

    static fromJson(json) {

        return new TimeItem(json.title, new Date(json.date), json.duration, json.tag);

    }

    date;
    title;
    duration;
    tag;

    get formattedCreatedAt() {
        return `${this.date.getHours()}시 ${this.date.getMinutes()}분`
    }

}

