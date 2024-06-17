import React from 'react'

export default function WideCategoryItem({ category }) {

    return (
        <div
            style={{ 'background': category.color }}
            className='relative w-[27.3rem] h-[14rem] rounded-lg flex-shrink-0'>
            <div className=' absolute inset-0 overflow-hidden'>
                <h3 className='font-semibold text-white text-[2.5rem] tracking-tighter p-4'>
                    {category.title}
                </h3>
                <img src={category.cover} className=' shadow-spotify rotate-[25deg] w-32 h-32 translate-x-[18%] translate-y-[-2%] right-0 bottom-0 absolute' />
            </div>
        </div>
    )
}

