async function orders(list){
    const parent = document.querySelector('.main');

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }

    list.forEach((itm) => {
        const tab = document.createElement('div');
        const orderNodes = `<h3>Order #: ${itm.orderNumber}</h3>
        <div class="tabInfo">
            <p>Customer: ${itm.customerName}</p>
            <p>Order Date: ${itm.orderDate}</p>
            <p>Required Date: ${itm.requiredDate}</p>
            <p>Shipped: ${itm.shippedDate}</p>
            <p>${itm.status}</p>
            <p>${itm.comment || 'no comment'}</p>
        </div>`;

        tab.innerHTML = orderNodes;
        tab.classList.add('tab');
        parent.appendChild(tab)
    });
}

export default orders;