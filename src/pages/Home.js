import React from 'react';
import Navigation from "../composant/Navigation";
import Logo from "../composant/Logo";
import Countries from "../composant/Countries";

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation></Navigation>
            <Countries/>
        </div>
    );
};

export default Home;