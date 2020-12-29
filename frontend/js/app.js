import orders from "./components/orders.js";
import togglePopup from "./components/popup.js";
import sendFormData from "./components/form.js";
import search from "./components/search.js";
import {getWithCors} from "./helpers.js";
import {addData, getData} from "./data/data.js";

(async function(){
    const orderList = await getWithCors('http://localhost:8082/orders/all');

    addData('orders', orderList);

    document.querySelector('#addCustomer')
        .addEventListener('click', togglePopup.bind(null, document.querySelector('#addCustomerPopUp')));

    document.querySelector('#searchBar').addEventListener('change', search);

    document.querySelectorAll('form').forEach((itm) => {
        itm.querySelector('#formSubmit').addEventListener('click', sendFormData.bind(null, itm));
        itm.querySelector('#formClose').addEventListener('click',togglePopup.bind(null, itm.parentElement))
    });

    await orders(getData('orders'))
})();