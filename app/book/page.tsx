"use client"
import React, { useEffect } from 'react';

const Page = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://secure.ownerreservations.com/widget.js';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (


        <div>
            <h1 className='flex items-center justify-center mt-16 text-4xl mb-5 text-gray-700'>Booking/Inquiry for Apt. 1003, Belgravia Heights I (JUM-BEL-FE6NO)</h1>
            <hr />
            <div className='border border-gray-200 rounded-lg shadow-lg m-10'>
                <div className="ownerrez-widget px-20 py-8" data-propertyId="3d219e5311ab467286fc8f44cea201e8" data-widget-type="Booking/Inquiry" data-widgetId="4d50b4befd1b4977833b3e7ed755adf2"></div>

            </div>
        </div>

    );
};
export default Page;

// .btn-default {
//   background-color: #FFFFFF;
//   border: 1px solid #222222;
//   border-radius: 8px;
//   border-color: black;
//   background-image: none;
//   box-sizing: border-box;
//   color: #222222;
//   cursor: pointer;
//   display: inline-block;
//   margin: 0;
//   outline: none;
//   position: relative;
//   text-align: center;
//   text-decoration: none;
//   touch-action: manipulation;
//   transition: box-shadow .2s;
//   user-select: none;
//   -webkit-user-select: none;
// }

// .btn-default:hover {
//   background-color: black;
//   border-color: black;
//   color:white;
// }