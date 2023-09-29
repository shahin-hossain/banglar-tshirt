import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
// standard হল একটি Layout component থাকা এর মধ্যে হবে Main একটা যার মধ্যে সকল আউটলেট গুলো বসবে।
const Main = () => {
    return (
        <div>
            <Header></Header> {/* common হিসাবে header কে রাখা হয়েছে*/}
            <Outlet></Outlet>
            <Toaster />
        </div>
    );
};

export default Main;