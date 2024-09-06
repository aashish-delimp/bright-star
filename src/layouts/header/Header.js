import React from 'react'
import Navigation from './Navigation';
import Sitelogo from './Sitelogo';

const Header = () => {
    return (
        <>
            <div className='headercontainer p-[15px]'>
                <div className='wrapper m-auto max-w-[1700px]'>
                    <div className='row flex items-center'>
                        <div className='columnone w-[20%]'>
                            <Sitelogo />
                        </div>
                        <div className='columntwo w-[80%]'>
                            <div className='columnwrapper flex w-[100%] justify-end	'>
                                <Navigation />
                                <div className='headerinfo flex items-center'>
                                    <span className='pl-[15px]'><a href=""><img src={require('../../assets/images/envelope.png')} alt='mail' className='max-w-[31px]' /></a></span>
                                    <span className='pl-[15px]'><div><a href="#" className='flex items-center'><span className='icon bg-[#6c97a3] px-[7px] py-[8px] min-h-[44px]'><img src={require('../../assets/images/phone.png')} alt='phone' className='max-w-[23px]' /></span><span className='icontext bg-[#81d4eb] px-[12px] py-[7px] text-[#fff] text-[20px]'>850.824.1333</span></a></div></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header;