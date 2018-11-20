function post(url, entity) {
    let status = -1;
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(entity)
    }).then((response, error) => {
        status = response.status;
        return response.json();
    }).then(body => Promise.resolve({
        status,
        body,
    }));
}

function get(url) {
    let status = -1;
    return fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    }).then(response => {
        status = response.status;
        return response.json();
    }).then(body => Promise.resolve({
        status,
        body,
    }))
}

export {
    get, post
}