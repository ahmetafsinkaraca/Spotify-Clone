import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Title({title, more = false}) {
    return (
        <header className='flex items-center justify-between mb-4'>

            <NavLink to={more ?? '#'}>
            <h3 className='text-2xl hover:underline font-bold tracking-tight text-white'>{title}</h3>
            </NavLink>

            {more && (
                <NavLink className='text-sm font-semibold hover:underline uppercase text-link' to={more} >
                    SEE ALl
                </NavLink>
            )}
        </header>
    )
}
