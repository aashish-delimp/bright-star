import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function CourseComponent() {
  // Sample data for courses
  const courses = [
      {
          id: 1,
          title: "Learn the basics of lorem in a welcoming environment.",
          category: "Popular",
          rating: 4.5,
          description: "Fusce tristique blandit turpis eu lobortis. In fringilla, sapien in bibendum accumsan, est felis lobortis nisi.",
          videos: 15,
          duration: "4:30 hours",
          lessons: 5,
          price: "$75.00",
          image: '../../assets/images/course.jpg'
      },
      // Add more courses as needed
  ];
    return (
        <>
            <section className='couses-section py-[50px] text-left'>
                <div className='wrapper max-w-[1400px] m-auto px-[15px]'>
                    <div className='column'>
                        <div className='headingtwo Epilogue font-bold text-[40px] text-[#13ABC1] relative pb-[30px] pt-[80px]'>
                        <div className='sunwave absolute top-0 left-[-6rem]'><img src={require('../../assets/images/sunwave.png')} alt='course' className='max-w-[200px]' /></div>
                        <h2>Popular <span className='text-[#FBD405]'>Courses</span> Categories</h2>
                        </div>
                        <div className='coursepart'>
                        <Tabs>
                <TabList>
                <div className='filter flex gap-[30px] roboto'>
                    <Tab><button className='active cstm-btn border-[#00000087] border-[1px] rounded-[26px] text-[18px] text-[#000] min-h-[50px] leading-[50px] px-[30px] font-bold'>Category 1</button></Tab>
                    <Tab><button className='cstm-btn border-[#00000087] border-[1px] rounded-[26px] text-[18px] text-[#000] min-h-[50px] leading-[50px] px-[30px] font-bold'>Category 2</button></Tab>
                    <Tab><button className='cstm-btn border-[#00000087] border-[1px] rounded-[26px] text-[18px] text-[#000] min-h-[50px] leading-[50px] px-[30px] font-bold'>Category 3</button></Tab>
                    <Tab><button className='cstm-btn border-[#00000087] border-[1px] rounded-[26px] text-[18px] text-[#000] min-h-[50px] leading-[50px] px-[30px] font-bold'>Category 4</button></Tab>
                    </div>
                </TabList>
                <TabPanel>
                <div className='courselists pt-[70px]'>
                                <div className='course flex flex-wrap gap-[50px]'>
                                {courses.map(course => (
                    <div className='courseitem roboto' key={course.id}>
                      <div className='coursebox text-left'>
                        <div className='courseimage relative'>
                          <div className='coursethumbnail'>
                          <img src={require('../../assets/images/course.jpg')} alt='course' width='100%' />
                              </div>
                          <div className='coursecategory flex justify-between absolute w-[100%] top-[20px] px-[15px]'>
                            <span className='roboto bg-[#FBD405] rounded-[26px] text-[12px] text-[#fff] min-h-[34px] leading-[34px] px-[30px] font-bold uppercase'>{course.category}</span>
                            <span className='roboto bg-[#13ABC1] rounded-[26px] text-[12px] text-[#fff] min-h-[34px] leading-[34px] px-[30px] font-bold uppercase'>Best seller</span>
                          </div>
                        </div>
                        <div className='coursecontent py-[20px]'>
                          <div className='rating'>⭐⭐⭐⭐⭐ <span className='text-[#27ADC6] text-[16px] font-normal pl-2'>{course.rating}</span></div>
                          <div className='title text-[22px] font-semibold leading-[1.1] py-[15px]'><h3>{course.title}</h3></div>
                          <div className='description text-[#434343] text-[16px] font-normal'>{course.description}</div>
                        </div>
                        <div className='lessonwrapper flex border-b-[1px] pb-[20px] border-[#27ADC6]'>
                          <div className='iconbox flex items-center w-[33.33%] gap-[5px] border-r-[1px] border-black'>
                            <div className='icon'><img src={require('../../assets/images/play.png')} alt='course' width='20px' /></div>
                            <div className='content text-[14px] font-normal'>{course.videos} Videos</div>
                          </div>
                          <div className='iconbox flex items-center w-[33.33%] gap-[5px] border-r-[1px] border-black pl-[20px]'>
                            <div className='icon'><img src={require('../../assets/images/clock.png')} alt='course' width='20px' /></div>
                            <div className='content text-[14px] font-normal'>{course.duration}</div>
                          </div>
                          <div className='iconbox flex items-center w-[33.33%] gap-[5px] pl-[20px]'>
                            <div className='icon'><img src={require('../../assets/images/file.png')} alt='course' width='20px' /></div>
                            <div className='content text-[14px] font-normal'>{course.lessons} Lessons</div>
                          </div>
                        </div>
                        <div className='paymentbutton py-[15px] flex justify-between'>
                          <button className='enrollbtn bg-[#13ABC1] rounded-[26px] text-[14px] text-[#fff] min-h-[40px] leading-[40px] px-[30px] font-bold'>Enroll Now</button>
                          <button className='pricebtn border-black border-[1px] rounded-[26px] text-[14px] text-[#000] min-h-[40px] leading-[40px] px-[30px] font-bold'>{course.price}</button>
                        </div>
                      </div>
                    </div>
                  ))}
                                </div>
                            </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>

                <TabPanel>
                    <h2>Any content 4</h2>
                </TabPanel>
            </Tabs>
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CourseComponent