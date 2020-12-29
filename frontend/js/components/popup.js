import {getWithCors} from "../helpers.js";

async function togglePopup(popup){
    const classes = popup.classList;
    let loaded = false;

    if(!loaded){
        await getSelectData(popup.children[0].querySelector('div select'), 'http://localhost:8082/customers/salesReps');
        loaded = true
    }

    if(classes.contains('hidden')){
        classes.remove('hidden');
        classes.add('visible')
    }
    else if(classes.contains('visible')){
        classes.remove('visible');
        classes.add('hidden')
    }
    else {
        classes.add('hidden')
    }
}

async function getSelectData(select, url){
    if(select !== null){
        const list = await getWithCors(url);
        let options = '';

        list.forEach((itm) => {
            options += `<option>${itm.firstName} ${itm.lastName}</option>`;
            select.innerHTML = options
        });
    }
}

export default togglePopup;