import React, { createContext, useState } from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'


export const RingContext = createContext('gold')
export const MoneyContext = createContext(0) // context Create initial Value: 0 

const Grandpa = () => {
    const [money, setMoney] = useState(0)
    const ring = 'Diamond';
    return (
        <div className='grandpa'>
            <h2>This is Grandpa page</h2>
            <p>Money: {money}</p>
            {/* context এর মধ্যে যত componenet আছে সবগুলোর মধ্যে Context পাবে। */}
            <MoneyContext.Provider value={[money, setMoney]}> {/*useState কে value আকারে পাঠানো হয়েছে।*/}
                <RingContext.Provider value='Golden Ring'>
                    <section className='flex'>
                        <Father ring={ring}></Father>
                        <Uncle></Uncle>
                        <Aunty ring={ring}></Aunty> {/*ring props পাঠানো হচ্ছে Grandpa থেকে*/}
                    </section>
                </RingContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;



/**
 * 1. Create Context & Export it
 * 2. Create a Provider & Pass Value
 * 3. useContext to received the value
*/