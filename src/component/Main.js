import React from 'react'
import Quick from './layout/Quick'
import { C_S_Btn } from "../component/Commomui"

function Main() {
    return (
        <div>
            <div className='vh-100 bg-warning'>
                    <C_S_Btn>문의하기</C_S_Btn>
            </div>
            <div className='vh-100 bg-light'></div>
            <div className='vh-100 bg-warning'></div>
            <Quick></Quick>
        </div>
    )
}

export default Main
