import React, {useState} from 'react';
import './App.css';

export const App = () => {
    const [count, setCount] = useState(1);
    const [hasResults, setResults] = useState(true);
    const [images, setImages] = useState([]);
    const click = () => {
        fetch(`http://www.omdbapi.com/?s=Matrix&apikey=720c3666${count ? `&page=${count}` : ''}`)
            .then(response => response.json())
            .then(data => {
                const {Search, Error} = data;
                console.log(data);

                if (Error) {
                    console.error(Error);
                    setResults(false)
                } else {
                    if (Search) {
                        Search.map((a) => {
                                if (a.Poster !== 'N/A') {
                                    images.push(a.Poster)
                                }
                            }
                        );
                        setImages(images);
                        console.log('result', images);

                    }
                }

            }).then(() => {
            if (hasResults) {
                setCount(count + 1);

            }

        });

    }

    return (
        <div className="App">
            <h1>Count {count}</h1>
            <button onClick={click} disabled={!hasResults}>Click</button>
            <ul>
                {images.map(image => <li><img src={image}/></li>
                )}
            </ul>
        </div>);

};


