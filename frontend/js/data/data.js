let data = {};

export function addData(key, value){
    data[key] = value
}

export function getData(key){
    return data[key]
}