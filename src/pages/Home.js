import React from 'react';
import Articles from '../components/Articles';
import Navigation from '../components/Navigation';

const Home = () => {

    return (
        <>
            <Navigation />
            <h1 className='text-center my-5'>List des articles</h1>
            <Articles />
        </>
    );
};

export default Home;