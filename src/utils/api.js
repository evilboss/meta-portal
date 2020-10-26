import fetch from "node-fetch";

import {SearchesController} from "../controllers";

const {APIURL, APIKey} = process.env;
const getMovies = (search) => {
    const payload = {s: search, apikey: APIKey};
    return new Promise((resolve, reject) => {
        SearchesController.getPageCount(search).then(pageResults => {
            const {pageCount, searchItem, apiStatus} = pageResults;
            if (pageCount) {
                payload.page = pageCount
            }
            if (apiStatus) {
                const searchParams = new URLSearchParams(payload).toString();
                fetch(`${APIURL}?${searchParams}`,)
                    .then(result => result.json())
                    .then(data => {

                        const {Search, Response, Error} = data;
                        const apiStatus = (Response === "True");
                        const searchData = {
                            searchKey: search,
                            pageCount: (pageCount) ? pageCount : 0
                        }
                        SearchesController.upsertPage(searchData, apiStatus)
                            .then(updateResult => {
                                if (apiStatus) {
                                    resolve({Search, Response});

                                } else {
                                    reject({error: Error});
                                }
                            });
                    })
                    .catch((err) => reject(err));
            } else {
                console.error('reject');
                reject({error: 'No more data'});
            }

        });
    });
}

export const api = {getMovies};
