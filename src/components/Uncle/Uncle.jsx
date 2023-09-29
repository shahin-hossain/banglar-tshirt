import React, { useContext } from 'react';
import Cusin from '../Cusin/Cusin';
import { MoneyContext } from '../Grandpa/Grandpa';

const Uncle = () => {
    const [money, setMoney] = useContext(MoneyContext) // Context কে Received করা হয়েছে। context হিসাবে useState কে নিয়ে আসা হয়েছে।
    return (
        <div>
            <h2>Uncle</h2>
            <p>Grandpa Money: {money}</p>
            <button onClick={() => setMoney(1000)}>Send 1000Tk</button>
            <section className='flex'>
                <Cusin>Sajib</Cusin>
                <Cusin>Khushi</Cusin>
            </section>
        </div>
    );
};

export default Uncle;