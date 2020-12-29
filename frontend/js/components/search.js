import {getData} from "../data/data.js";
import orders from "./orders.js";

async function search(e){

    const list = getData('orders');

    let filteredList = list.filter(val => {
        return e.target.value.indexOf(val.orderNumber) !== -1 || val.customerName.toLowerCase().indexOf(e.target.value.toLowerCase()) !== -1
    });

    await orders(filteredList);
}

export default search;