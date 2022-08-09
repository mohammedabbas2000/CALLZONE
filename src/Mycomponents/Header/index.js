import React from 'react'
import logo from "../../Asset/Group95.svg";
import HeaderItems from './HeaderItems';

export default function Header() {
    return (
        <div className='head fluid-container'>
            <nav>
                <div className="logo animated infinite bounce"><img src={logo} /></div>
                <div className="menu">
                    <a href="#">About us</a>
                    <a href="#">The Product</a>
                    <a href="#">Pricing</a>
                    <input type="submit" className='btn-signIn' value={'Sign In'}/>
                </div>
            </nav>
            <HeaderItems />
        </div>
    )
}
