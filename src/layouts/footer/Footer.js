import React from 'react';
import Navigation from '../header/Navigation';

const Footer = () => {
    return (
        <>
            <section className='footer py-[50px] text-left bg-[#4d4646] text-white lato'>
                <div className='wrapper max-w-[1700px] m-auto px-[15px]'>
                    <div className='row flex'>
                        <div className='column w-[33.33%]'>
                            <img src={require('../../assets/images/britestar-white.png')} alt='course' />
                            <span className='mt-[60px] block text-[16px] font-bold'>Britestar Christian Virtual Education and Microschools, Inc.<br></br>
                                W177 N9856 Rivercrest Drive, Suite 218<br></br>
                                Germantown, WI 53022</span>
                        </div>
                        <div className='column w-[33.33%]'>
                            <Navigation />
                        </div>
                        <div className='column w-[33.33%] text-right'>
                            <div><a href="tel:8508241333" className='bg-[#fff] text-[#4d4646] text-[20px] py-[7px] px-[12px] font-extrabold inline-block'>850.824.1333</a></div>
                            <div className='mt-[15px]'><a href="mailto:chris.dingman@britestarvirtual.com" className='bg-[#fff] text-[#4d4646] text-[12px] py-[7px] px-[12px] font-extrabold inline-block'>chris.dingman@britestarvirtual.com</a></div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Footer;