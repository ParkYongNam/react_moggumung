import React from 'react';
import data from '../../data/menu.json'
import Logo from '../../svg/Logo'
import { Link } from 'react-router-dom'

import '../../sass/hd.scss'

function Head(props) {
    return (
        <header className='fixed-top py-4 container-fluid 
        d-flex justify-content-between align-items-center'>
            <h1 className='mb-0 d-flex'><Logo logocolor="white"></Logo></h1>
            <button class="d-lg-none">햄버거</button>
            <ul id='Gnb' className='mainmenu d-lg-flex d-none mb-0'>
                {
                    data.map((e,i)=>{
                        return(
                            <li className='py-3 py-lg-0'><Link to={e.href} className={`text-white ${ i ===0 ? "" : "ps-lg-4"}`}>{e.menu}</Link></li>
                        )
                    })
                }
            </ul>
            
        </header>
    );
}
{}
export default Head;