import categories from 'data/categories'
import React, { useEffect, useRef, useState } from 'react'
import Title from 'components/Title'
import favoriteCategories from 'data/favorite-categories'
import ScrollContainer from 'react-indiana-drag-scroll'
import CategoryItem from 'components/CategoryItem'
import WideCategoryItem from 'components/WideCategoryItem'
import { Icon } from 'Icons'


export default function Search() {

  const favoritesRef = useRef()
  const [prev, setPrev] = useState(false)
  const [next, setNext] = useState(false)

  useEffect(() => {
    if(favoritesRef.current) {

      const scrollHandle = () => {

        const isEnd = favoritesRef.current.scrollLeft + favoritesRef.current.offsetWidth === favoritesRef.current.scrollWidth;
        const isStart = favoritesRef.current.scrollLeft === 0;
        setPrev(!isStart)
        setNext(!isEnd)
      }

      scrollHandle()
      favoritesRef.current.addEventListener('scroll', scrollHandle)

      return () => {
        favoritesRef?.current?.removeEventListener('scroll', scrollHandle)
      }
    }
  }, [favoritesRef])

  const slideFavoritesNext = () => {
    favoritesRef.current.scrollLeft += favoritesRef.current.offsetWidth - 300 
  }

  const slideFavoritesPrev = () => {
    favoritesRef.current.scrollLeft -= favoritesRef.current.offsetWidth - 300
  }

  return (
    <>
    <section className='mb-8'>
    <Title title='En çok dinlediğin türler'/>
    <div className='relative'>
    {prev && <button className='text-black bg-white flex items-center justify-center rounded-full absolute -left-6 z-10 w-12 top-1/2 -translate-y-1/2 h-12 hover:scale-[1.06]' onClick={slideFavoritesPrev}><Icon name='prev' size={24}/></button>}
    {next && <button className='text-black bg-white flex items-center justify-center rounded-full absolute -right-6 z-10 w-12 top-1/2 -translate-y-1/2 h-12 hover:scale-[1.06]' onClick={slideFavoritesNext}><Icon name='next' size={24}/></button>}

    <ScrollContainer 
      innerRef = {favoritesRef}
      className='flex gap-x-6 scrollable overflow-x'>

      {favoriteCategories && favoriteCategories.map((category, index) => <WideCategoryItem category={category} key={index}/>)}
    </ScrollContainer>
    </div>
    </section>

    <section>
    <Title title='Hepsine göz at'/>
    <div className='grid grid-cols-5 gap-6'>
      {categories && categories.map((category, index) => <CategoryItem category={category} key={index}/>)}
    </div>
    </section>
    </>
  )
}
