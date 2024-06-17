import { Icon } from 'Icons'
import React from 'react'

export default function Search() {
    return (
        <div className='relative mr-auto ml-4' htmlfor='search-input'>
            <label className='flex items-center justify-center top-0 left-0 absolute text-black h-10 w-12'>
                <Icon name='search' size={16}/>
            </label>
            <input autoFocus={true} className='bg-white text-black font-medium text-sm h-10 pl-12 placeholder:black rounded-full w-[22.75rem] w-max-full outline-none' type='text' id='search-input' placeholder="Sanatçılar, şarkılar veya podcast'ler" />
        </div>
    )
}
