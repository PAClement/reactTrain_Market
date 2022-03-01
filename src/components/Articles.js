
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Articles = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('https://fakestoreapi.com/products')
            .then((res) => setData(res.data));

    }, []);

    return (
        <div className="container">
            <div className="row">
                <div className="col-12 my-3 bg-dark text-white py-3">
                    <label htmlFor="customRange1" className="form-label">Example range</label>
                    <input type="range" className="form-range" id="customRange1" />
                    <div className=' d-flex justify-content-around'>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" id="first-marque" />
                            <label className="form-check-label mr-1" htmlFor="first-marque">Default checkbox</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" id="sec-marque" />
                            <label className="form-check-label" htmlFor="sec-marque">Default checkbox</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" id="t-marque" />
                            <label className="form-check-label" htmlFor="t-marque">Default checkbox</label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" id="f-marque" />
                            <label className="form-check-label" htmlFor="f-marque">Default checkbox</label>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-12">
                {data.map((target) => (
                    <Card article={target} key={target.id} />
                ))}
            </div>
        </div>
    );
};

export default Articles;