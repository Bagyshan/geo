import React from 'react'
import BzgrtNavbar from './BzgrtNavbar'
import BoezgrtAbout from './BoezgrtAbout'
import BoezgrtProductCard from './BoezgrtProductCard'
import BoezgrtProductDetail from './BoezgrtProductDetail'
import BoezgrtContacts from './BoezgrtContacts'

const BoezgrtMain = () => {
    return (
        <div className='boezgrtmain'>
            <BzgrtNavbar/>
            <BoezgrtAbout/>
            <BoezgrtProductCard/>
            <BoezgrtContacts/>
            <BoezgrtProductDetail/>
        </div>
    )
}

export default BoezgrtMain
