const {REACT_APP_API_URL: apiUrl} = process.env;
const doRequest = (path, requestOptions = {}) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiUrl}${path}`, requestOptions)
            .then(result => result.json()).then(data => {
            resolve(data);
        })
            .catch(e => {
                console.error('error', e);
                reject(e);
            })
    });
}
const getMovies = () => {
    return doRequest('api/movies');
};
const getSearches = () => {
    console.log('get searches');

    return doRequest('api/searches');
}
const updateMovies = (search) => {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const data = JSON.stringify({search});

    const requestOptions = {
        method: 'POST',
        headers: headers,
        body: data,
        redirect: 'follow'
    };

    return doRequest('api/movies', requestOptions);


}
export const api = {
    getMovies,
    getSearches,
    updateMovies
}
