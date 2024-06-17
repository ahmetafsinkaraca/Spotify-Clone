import React from 'react'
import { Icon } from 'Icons'
import { useNavigate } from 'react-router-dom';

export default function Navigation() {

  const navigate = useNavigate();

  return (
    <nav className='flex items-center gap-x-4'>
    <button onClick= {() => navigate(-1)} className='bg-black bg-opacity-70 w-8 h-8 flex items-center justify-center rounded transform hover:scale-105'>
        <Icon name='prev' size={20} />
    </button>
    <button onClick={() => navigate(1)} className='bg-black bg-opacity-70 w-8 h-8 flex items-center justify-center rounded transform hover:scale-105'>
        <Icon name='next' size={20} />
    </button>
</nav>
  )
}
