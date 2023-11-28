import React from 'react'
import { ReactComponent as Logo } from '.././img/logo.svg';
import { ReactComponent as Burger } from '.././img/burger.svg';
import { cl } from './Header.module.css'

const Header = () => {
  return (
    <header>
        <Logo className='logo'/>
        <nav> 
            <ul>
                <li>Все туры</li>
                <li>Отзывы</li>
                <li>Контакты</li>
            </ul>
            <button><Burger/></button>
        </nav>
    </header>
  )
}

export default Header