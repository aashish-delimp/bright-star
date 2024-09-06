import React from 'react';

const Hero = () => {
    const hero = {
        backgroundImage: `url(${require('../../assets/images/herobg.jpg')})`
    };
    return (
        <>
            <section style={hero} className='heroWrapper herosection relative h-[83vh] md:h-[85vh] bg-cover bg-no-repeat bg-center bg-fixed overflow-hidden'>
                <div className='leftwave absolute left-[0] z-[1]'><img src={require('../../assets/images/hrbackbg.png')} alt='mail' className='h-[85vh]'/></div>
                <div className='leftwave absolute left-[0]'><img src={require('../../assets/images/white-shape.png')} alt='mail' className='h-[85vh]'/></div>
                <div className='wrapper flex items-center max-w-[1500px] m-auto h-[100%] px-[15px]'>
                    <div className='row'>
                        <div>
                            <div className='text-left relative max-w-[75%] z-[2]'>
                                <span className='sub-head  text-[25px] font-medium text-[#000]'>Knowledge Is Power. Share It</span>
                                <h1 className='main-head text-[#000] text-[96px] font-bold leading-[1.1] mt-[10px]'>Lorem <span className='text-[#13ABC1]'>Ispum Dolor</span> Sit lorem</h1>
                                <button className='custombtn bg-[#13ABC1] rounded-[26px] flex items-center font-semibold text-[16px] text-[#fff] min-h-[50px] px-[30px] gap-[8px] mt-[50px]'>Explore Free Courses <img src={require('../../assets/images/arrow.png')} /></button>
                            </div>
                            <div className='bottomtext relative z-[2] flex max-w-[70%] justify-end'>
                               <div className='iconbox w-max text-left flex items-center bg-[#ffffffa3] rounded-[20px] px-[20px] py-[15px] gap-[20px]'>
                                   <span className='icon bg-[#13ABC1] rounded-[50%] h-[60px] w-[60px] flex items-center justify-center'><img src={require('../../assets/images/mail-2.png')} alt='mail' width='30px'/></span>
                                   <span className='content'>
                                       <h3 className='text-[24px] font-extrabold'>Congratulations</h3>
                                       <p className='text-[14px] font-normal'>Your Admission Complete</p>
                                   </span>
                               </div>
                               <div className='iconbox w-max text-left flex items-center bg-[#ffffffa3] rounded-[20px] px-[20px] py-[15px] gap-[20px] relative top-[100px]'>
                                   <span className='icon bg-[#13ABC1] rounded-[50%] h-[60px] w-[60px] flex items-center justify-center'><img src={require('../../assets/images/mail-2.png')} alt='mail' width='30px'/></span>
                                   <span className='content'>
                                       <h3 className='text-[24px] font-extrabold'>250k</h3>
                                       <p className='text-[14px] font-normal'>Assisted Student</p>
                                   </span>
                               </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;