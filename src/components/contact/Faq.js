import React, { useState } from 'react';

const Faq = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(0);

    const onTitleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="ui styled accordion">
            {items.map((item, index) => (
                <AccordionItem
                    key={item.title}
                    item={item}
                    index={index}
                    activeIndex={activeIndex}
                    onTitleClick={onTitleClick}

                />
            ))}
        </div>
    )
}


const AccordionItem = ({ item, index, activeIndex, onTitleClick }) => {
    const active = index === activeIndex ? 'active' : '';

    return (
        <>
            <div className='faq py-[20px] border-b-[1px] border-[#b5b5b55c]'>
                <div className={`title roboto text-left font-bold text-[30px] cursor-pointer  ${active}`} onClick={() => onTitleClick(index)}>
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content roboto text-left pt-[10px] w-[90%] ${active}`}>
                    <p>{item.content}</p>
                </div>
            </div>
        </>
    );
};

export default Faq;