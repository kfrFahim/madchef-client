import React from 'react';

const Footer = () => {
     return (
          <div className='mx-14 bg-slate-900 my-5 p-5'>
               <div className='grid grid-cols md:grid-cols-3 mx-auto'>
                    <div className='mx-auto text-white'>
                         <h1 className='text-3xl my-3'>About</h1>
                         <ul className=''>
                              <li><a href="#">PRIVACY POLICY</a></li>
                              <li><a href="#">DISCLOSURE</a> </li>
                              <li><a href="#">TERMS OF USE</a></li>
                              <li><a href="#">ACCESSIBILITY STATEMENT</a></li>
                         </ul>
                    </div>
                    <div>
                         <h1>MadChef</h1>
                    </div>
                    <div>Contact</div>
               </div>
          </div>
     );
};

export default Footer; 