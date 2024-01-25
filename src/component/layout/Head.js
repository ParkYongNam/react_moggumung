import React from 'react';
import data from '../../data/menu.json'
import Logo from '../../svg/Logo'

import '../../sass/hd.scss'

function Head(props) {
    return (
        <header className='fixed-top py-4 container-fluid border-bottom
        d-flex justify-content-between align-items-center'>
            <h1><Logo logocolor="white"></Logo></h1>
            <button class="d-lg-none">햄버거</button>
        <nav className=''>
            {
                data.map((e,i)=>{
                    return(
                        <a href={e.href}>{e.menu}</a>
                    )
                })
            }
        </nav>
            
        </header>
    );
}

export default Head;