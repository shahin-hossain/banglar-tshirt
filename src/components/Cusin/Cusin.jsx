import React from 'react';
import Friend from '../Friend/Friend';

//এখানে ring props আসছে Aunty থেকে
//hasFriend boolean আসছে Aunty থেকে
/*children আসছে Aunty & Uncle থেকে*/
const Cusin = ({ children, hasFriend, ring }) => {
    return (
        <div>
            <h2>Cousin</h2>
            <p><small>{children}</small></p>
            {hasFriend && <Friend ring={ring}></Friend>}
        </div>
    );
};

export default Cusin;