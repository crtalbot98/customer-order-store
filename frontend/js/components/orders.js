import {fetchWithCors} from "./helpers.js";

async function orders(parent){
    const orderList = await fetchWithCors('http://localhost:8082/orders/all');

    orderList.forEach((itm) => {
        const tab = document.createElement('div');
        const orderNodes = `<h3>Order #: ${itm.orderNumber}</h3>
            <p>Customer: ${itm.customerName}</p>
            <p>Order Date: ${itm.orderDate}</p>
            <p>Required Date: ${itm.requiredDate}</p>
            <p>Shipped: ${itm.shippedDate}</p>
            <p>${itm.status}</p>
            <p>${itm.comment || 'no comment'}</p>`;

        tab.innerHTML = orderNodes;
        tab.classList.add('tab', 'hideOverflow');
        parent.appendChild(tab)
    });
}

export default orders;