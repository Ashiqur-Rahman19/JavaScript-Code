console.clear();

const makeRequest = (method, url, data) => {

    const xhr = new XMLHttpRequest();
    xhr.open(method, url);

    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = () => {
        let data = xhr.response
        console.log(JSON.parse(data));
    };

    xhr.onerror = () => {
        console.log('Error ace vai');
    }
  
    xhr.send(JSON.stringify(data));

};

getData = () => {
    makeRequest('GET', 'https://jsonplaceholder.typicode.com/posts');
}

sendData = () => {
    makeRequest('POST', 'https://jsonplaceholder.typicode.com/posts', {
        title: 'Ashiqur Rahman',
        body: 'Bar',
        userId: 1
    });
};

updateData = () => {
    makeRequest('PUT', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Ashiqur Rahman',
        body: 'I love you Era',
        userId: 1
    });
}


updateSingleData = () => {
    makeRequest('PATCH', 'https://jsonplaceholder.typicode.com/posts/1', {
        title: 'Era I love you',

    });
}



deleteData = () => {
    makeRequest('DELETE', 'https://jsonplaceholder.typicode.com/posts/1',);
}
deleteData();








