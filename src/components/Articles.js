
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Articles = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products').then((res) => setData(res.data));

    }, []);

    return (
        <div className="container">
            <div className="col-12">
                {data.map((target) => (
                    <Card article={target} key={target.id} />
                ))}
            </div>
        </div>
    );
};

export default Articles;