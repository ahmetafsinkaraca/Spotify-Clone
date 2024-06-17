import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Icon } from 'Icons'
import {setSidebar} from "stores/player";


export default function SidebarCover() {

    const dispatch = useDispatch()
    const current = useSelector(state => state.player.current)


  return (
    <div className='pt-[100%] bg-black relative group'>
      <img src={current.image} className='w-full h-full object-cover absolute top-0 left-0' alt=''/>
      <button 
      onClick={() => dispatch(setSidebar())}
      className="w-6 h-6 bg-black opacity-0 group-hover:opacity-60 hover:!opacity-100 justify-center items-center flex right-1 top-1 absolute -rotate-90">
        <Icon name='arrowLeft' size={16}/>
      </button>
    </div>
  )
}
