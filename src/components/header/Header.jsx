import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = ({setOpen}) => {
    return (
        <header>
            <nav className='links'>
                <NavLink to={'/'}><li>Главная</li></NavLink>
                <NavLink to={'/menu-page'}><li>Меню</li></NavLink>
                <button onClick={() => {setOpen(true)}}>Бронь столика</button>
            </nav>
        </header>
    );
}

