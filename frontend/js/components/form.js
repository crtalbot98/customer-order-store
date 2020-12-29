import {postWithCors} from "../helpers.js";

async function sendFormData(form){
    const formData = new FormData(form);
    const data = {};

    for(let [key, value] of formData.entries()){
        data[key] = value.trim();

        if(key === 'salesRepEmployee' && value !== ''){
            data[key] = data[key].split(' ')
        }
    }

    const res = await postWithCors('http://localhost:8082/customers/add', data);

    if(res.error){
        let errorMessage = 'please fill out ';
        res.error.forEach((itm) => {
            errorMessage += `${itm}, `
        });
        errorMessage.trim();
        errorMessage.substr(0, errorMessage.length-1);
        form.querySelector('.error').innerText = errorMessage
    }
    else if(res.success){
        form.querySelector('.error').innerText = 'User added to database.';
        window.setTimeout(() => {
            form.reset();
        }, 500)
    }
}

export default sendFormData;