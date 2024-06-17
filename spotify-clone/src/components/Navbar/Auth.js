import React from 'react'
import { Menu } from '@headlessui/react'
import { Icon } from 'Icons'


export default function Auth() {

  const user = {
    name: 'he he',
    avatar: 'https://i.scdn.co/image/ab6775700000ee856fca122911ed9eec4ce60c1e'
  }

  return (
    <Menu as="nav" className={"relative"}>
      {({ open }) => (
        <>
          <Menu.Button className={` h-8 flex items-center rounded-3xl pr-2 ${open ? 'bg-active' : 'bg-black'} hover:bg-active`}>
            <img src={user.avatar} className='w-8 h-8 rounded-full p-0.5' />
            <span className='text-sm forn-semibold px-2'>{user.name}</span>
            <span className={open && 'rotate-180'}>
              <Icon name='downDir' size={16} />
            </span>
          </Menu.Button>


          <Menu.Items className={" absolute top-full p-1 right-0 w-48 bg-active translate-y-"}>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` flex items-center justify-center h-10 text-sm font-semibold px-2  ${active && 'bg-white bg-opacity-10'}`}
                  href="#">
                    <span className='mr-10'>Account</span>
                  <span className='-mr-16'> 
                    <Icon name='external' size={20}/>
                    </span>
                   
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` flex items-center justify-center h-10 text-sm font-semibold px-2 ${active && 'bg-white bg-opacity-10'}`}
                  href="#">

                  Profile
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  className={` flex items-center justify-center h-10 text-sm font-semibold px-2 ${active && 'bg-white bg-opacity-10'}`}
                  href="#">

                  Log out
                </a>
              )}
            </Menu.Item>
          </Menu.Items>
        </>
      )}
    </Menu>
  )
}
