import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ ring }) => {
    const angti = useContext(RingContext); //context কে Received করা হয়েছে useContext এর মাধ্যমে।
    return (
        <div>
            <h2>Special</h2>
            <p>Ring: {angti}</p>
        </div>
    );
};

export default Special;