import React from 'react'
import BzgrtNavbar from './BzgrtNavbar'
import BoezgrtAbout from './BoezgrtAbout'
import BoezgrtProductCard from "./BoezgrtProductCard";

const BoezgrtMain = () => {
    return (
        <div className='boezgrtmain'>
            <BzgrtNavbar/>
            <BoezgrtProductCard/>
        </div>
    )
}

export default BoezgrtMain
