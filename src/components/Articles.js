
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Articles = () => {

    const [data, setData] = useState([]);
    const [sortedData, setSortedData] = useState([]);

    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(5);

    const [radioValue, setRadioValue] = useState('');
    const radio = ['men\'s clothing', 'jewelery', 'electronics', 'women\'s clothing'];

    let range = 20;

    useEffect(() => {
        if (playOnce) {
            axios
                .get('https://fakestoreapi.com/products')
                .then((res) => {
                    setData(res.data);
                    setPlayOnce(false);
                });
        }

        const sortedData = () => {
            const articleObj = Object.keys(data).map((i) => data[i]);

            articleObj.length = rangeValue; //nombre élément à afficher
            setSortedData(articleObj);
        };

        sortedData();

    }, [data, rangeValue, playOnce]);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-3 bg-dark text-white py-3">
                    <label htmlFor="customRange1" className="form-label">Nombre d'article affiché</label>
                    <input type="range" className="form-range" value={rangeValue} onChange={(e) => setRangeValue(e.target.value)} min="1" max={range} />
                    <div className=' d-flex justify-content-around'>
                        {radio.map((target) => {
                            return (
                                <div key={target}>
                                    <input type="radio" value={target} id={target} checked={target === radioValue} onChange={(e) => {
                                        return (
                                            setRadioValue(e.target.value),
                                            setRangeValue(data.length)
                                        )
                                    }} />
                                    <label className="form-check-label mr-1" htmlFor={target}>{target}</label>
                                </div>
                            );
                        })}

                    </div>
                </div>
            </div>
            <div className="mb-5">
                {radioValue && <button onClick={() => setRadioValue("")} type="button" className="btn btn-danger">Annuler la recherche</button>}
            </div>
            <div className="col-12">
                {sortedData
                    .filter((target) => {
                        return target.category.includes(radioValue);
                    })
                    .map((target) => (
                        <Card article={target} key={target.id} />
                    ))}
            </div>
        </div>
    );
};

export default Articles;