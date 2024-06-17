import React from 'react'
import { Icon } from 'Icons'
import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <nav className='px-6'>
            <ul className='flex flex-col'>
                <li>
                    <NavLink to={"/"} className={({isActive}) => isActive ? 'h-10 gap-x-4 items-center text-sm font-semibold hover:text-white text-link flex rounded px-4 bg-active' : 'h-10 gap-x-4 items-center text-sm font-semibold hover:text-white text-link flex rounded px-4 hover:bg-active'}>
                        <span>
                            <Icon name="home" />
                        </span>
                        Ana sayfa
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/search"} className={({isActive}) => isActive ? 'h-10 gap-x-4 items-center text-sm font-semibold hover:text-white text-link flex rounded px-4 bg-active' : 'h-10 gap-x-4 items-center text-sm font-semibold hover:text-white text-link flex rounded px-4 hover:bg-active'}>
                        <span>
                            <Icon name="search" />
                        </span>
                        Ara
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/collection"} className={({isActive}) => isActive ? 'h-10 gap-x-4 items-center text-sm font-semibold hover:text-white text-link flex rounded px-4 bg-active' : 'h-10 gap-x-4 items-center text-sm font-semibold hover:text-white text-link flex rounded px-4 hover:bg-active'}>
                        <span>
                            <Icon name="collection" />
                        </span>
                        Kitaplığın
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}