export async function getWithCors(url) {
    const data = await fetch(url,
        {
            method: 'GET',
            mode: 'cors'
        }
    );
    return data.json()
}

export async function postWithCors(url, body) {
    const data = await fetch(url,
        {
            method: 'POST',
            mode: 'cors',
            header:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }
    );
    return data.json()
}