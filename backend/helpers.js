exports.checkErrors =  function checkErrors(body, keys){
    if(keys.length < 1) return;

    let missing = [];

    for(let i = 0; i < keys.length; i++){
        for(let key in body) {
            if (key === keys[i] && !body[key]) {
                missing.push(key);
            }
        }
    }
    return missing
};