import React, { useContext } from 'react';
import { MoneyContext } from '../Grandpa/Grandpa';

const Sister = () => {
    const [money] = useContext(MoneyContext); //grandap এর MoneyContext কে নিয়ে আশার জন্য

    return (
        <div>
            <h2>Sister</h2>
            <p>grandpa money: {money}</p>
        </div>
    );
};

export default Sister;