import {Searches} from '../models/';

const getPageCount = (searchKey) => {
    let pageCount = 0;
    let apiStatus = true;
    return new Promise((resolve, reject) => {
        Searches.findOne({where: {searchKey}}).then(searchItem => {
            if (searchItem) {
                pageCount = searchItem.pageCount;
                apiStatus = searchItem.apiStatus;
            }
            resolve({pageCount, searchItem, apiStatus});
        }).catch(e => console.error(e));
    });
}
const upsertPage = (search, apiResult) => {
    return new Promise((resolve => {
            Searches.findOrCreate({where: search})
                .then(searchItem => {
                        return {...searchItem}
                    }
                ).then(searchResults => {
                const item = searchResults[0].toJSON();
                const updateData = {
                    pageCount: item.pageCount + 1,
                    apiStatus: apiResult
                };
                item.pageCount = item.pageCount++;
                item.apiStatus = apiResult;
                Searches.update(updateData, {where: {id: item.id}});

            }).catch(e => console.error(e));
            resolve('ok');

        }
    ));
}

export const SearchesController = {getPageCount, upsertPage}
