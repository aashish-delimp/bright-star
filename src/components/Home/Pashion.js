import React from 'react';

const Pashion = () => {
    return (
        <>
            <section className='bg-[#F8F8F8] py-[150px]'>
                <div className='wrapper max-w-[1400px] m-auto px-[15px]'>
                    <div className='row flex'>
                        <div className='column w-[55%] pr-[30px]'>

                            <div className='imagewidget relative'>
                                <div className='sunwave absolute top-[-5rem] right-[2rem]'><img src={require('../../assets/images/sunwave.png')} alt='course' className='flipx' width='120px' /></div>
                                <div className='totalstudent  ml-auto absolute top-[-3rem] right-[4rem] h-[150px] w-[150px] bg-[#13ABC1] rounded-[50%] text-white Epilogue font-bold text-[40px] leading-[1.1] flex justify-center flex-col'>1.4k<div className='roboto text-[16px] font-normal'>Total Students</div></div>
                                <img src={require('../../assets/images/pashion.jpg')} alt='course' width='80%' />
                                <div className='getknowbox w-max ml-auto bg-[#fff] p-[20px] border-[1px] border-[#DEDEDE] rounded-[20px] absolute right-0 bottom-[-7rem]'>
                                    <div className='iamgewrap flex gap-[20px] '>
                                        <div className='thumnil relative'><img src={require('../../assets/images/enrolchild.jpg')} alt='user' width='150px' /> <span className='onlinedot absolute h-[10px] w-[10px] bg-[#2ABF6F] rounded-[50%] top-[15px] left-[15px]'></span></div>
                                        <div className='thumnil relative'><img src={require('../../assets/images/enrolchild.jpg')} alt='user' width='150px' /><span className='onlinedot absolute h-[10px] w-[10px] bg-[#2ABF6F] rounded-[50%] top-[15px] left-[15px]'></span></div>
                                    </div>
                                    <div className='iconbox text-left flex items-center gap-[20px] py-[10px] justify-between'>
                                        <span className='content'>
                                            <h3 className='text-[24px] font-semibold'>Get it know!</h3>
                                            <p className='text-[14px] font-normal text-[#434343]'>Lorem ispum dolor</p>
                                        </span>
                                        <span className=''><button className='custombtn bg-[#13ABC1] rounded-[26px] flex items-center font-semibold text-[16px] text-[#fff] min-h-[50px] px-[20px] gap-[8px] '>Enroll Now <img src={require('../../assets/images/arrow.png')} /></button></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='column w-[45%] pl-[30px]'>
                            <div className='contentwidget text-left'>
                                <div class="headingtwo Epilogue font-bold text-[40px] text-[#13ABC1] relative leading-[1.1] "><h2>Igniting your passion, fueling your future</h2></div>
                                <div className='decription roboto text-[#434343] text-[16px] font-normal py-[20px]'>Integer venenatis consequat elit. Curabitur eget laoreet nibh. Cras euismod, tellus vitae luctus ultricies, lacus erat sagittis nulla, id ornare velit ligula congue ex. Etiam rhoncus urna ut pulvinar euismod.</div>
                                <ul className='Epilogue font-semibold text-[18px] customlist'>
                                    <li>Get smarter, one click time</li>
                                    <li>Go from clueless to expert</li>
                                    <li>A new horizon of learning</li>
                                </ul>
                                <div className='iconbox w-max text-left flex items-center gap-[20px] py-[20px]'>
                                    <span className='icon bg-[#2ABF6F] rounded-[50%] h-[50px] w-[50px] flex items-center justify-center'><img src={require('../../assets/images/playicon.png')} alt='mail' width='15px' /></span>
                                    <span className='content'>
                                        <h3 className='text-[24px] font-semibold text-[#13ABC1]'>24 Teachers Online Connected</h3>
                                        <p className='text-[14px] font-normal text-[#434343]'>Unlimited Course</p>
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

export default Pashion;