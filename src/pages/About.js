import React from 'react';
import Navigation from "../composant/Navigation";
import Logo from "../composant/Logo";

const About = () => {
    return (
        <div className="about">
            <Logo/>
            <Navigation/>
            <h1>À propos de cette application</h1>
            <p>
                Cette application React a été réalisée dans le cadre d’un apprentissage
                des bases du développement avec React JS. Elle permet d’afficher et de
                filtrer dynamiquement les pays du monde grâce à une API publique.
            </p>
            <p>
                Le projet met en œuvre des fonctionnalités essentielles comme :
                <ul>
                    <li>la récupération de données avec <code>fetch</code>,</li>
                    <li>la gestion de l’état avec les hooks React (<code>useState</code>, <code>useEffect</code>),</li>
                    <li>la composition de l’interface à l’aide de composants réutilisables,</li>
                    <li>et un design simple et responsive via SCSS.</li>
                </ul>
            </p>
            <p>
                C’est un excellent exercice pour se familiariser avec les concepts clés
                de React tout en réalisant une interface interactive et concrète.
            </p>
        </div>
    );
};

export default About;