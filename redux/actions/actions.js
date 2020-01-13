export const TEST = "test";

export const getTest = (msg) => ({ "type": TEST, "data": { msg } });

export const ADD_TIME = "ADD_TIME";

export const addTime = (item) => ({ "type" : ADD_TIME, "item": item });

export const REMOVE_TIME = "REMOVE_TIME";

export const removeTime = (item) => ({ "type" : REMOVE_TIME, "item": item });

export const GET_TIMES = "GET_TIMES";

export const getTimes = (item) => ({ "type" : ADD_TIME, "item": item });

