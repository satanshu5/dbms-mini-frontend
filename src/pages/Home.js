import React from 'react';
import './Home.css';
import Home1 from '../components/image/Home1.JPG';
function Home() {
    return (
        <div className="home">
            <img src={Home1} alt="Logo"/>
        </div>
    )
}

export default Home;