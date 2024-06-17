import React from 'react'
import { Icon } from 'Icons'

export default function DownloadApp() {
  return (
        <a href='#' className='text-sm font-semibold flex flex-shrink-0 hover:text-white gap-x-4 items-center h-10 px-6 text-link'>
            <Icon name='download' size={20}/>
            Uygulamayı yükle
        </a>
  )
}
