import React, { useContext } from 'react'
import { ContextGlobal } from './utils/global.context'

const Footer = () => {

  const { context } = useContext(ContextGlobal)
  const { theme } = context

  return (
    <footer className= {theme} >
        <p>Powered by</p>
        <img src='/images/DH.png'             alt='DH-logo'                          />
        <img src='/images/ico-tiktok.png'     alt='icon tiktok'     className='Icons'/>
        <img src='/images/ico-whatsapp.png'   alt='icon whatsapp'   className='Icons'/>
        
    </footer>
  )
}

export default Footer