import React from 'react'

export default function CategoryItem({ category }) {

  return (
    <div
      style={{ 'background': category.color }}
      className='relative before:pt-[100%] before:block rounded-lg '>

      <div className=' absolute inset-0 overflow-hidden'>
        <h3 className='font-semibold text-white text-2xl tracking-tighter p-4'>
          {category.title}
        </h3>
        <img src={category.cover} className=' shadow-spotify rotate-[25deg] w-[6.25rem] h-[6.25rem] translate-x-[18%] translate-y-[-2%] right-0 bottom-0 absolute' />
      </div>
    </div>
  )
}
