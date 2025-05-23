import React from 'react';
import Navigation from "../composant/Navigation";
import Logo from "../composant/Logo";

const Home = () => {
    return (
        <div>
            <Logo/>
            <Navigation></Navigation>
            <h1>Acceuil</h1>
        </div>
    );
};

export default Home;