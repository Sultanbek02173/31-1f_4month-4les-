import { NavLink } from 'react-router-dom';
import './header.scss';

export const Header = () => {
    return (
        <header>
            <nav>
                <NavLink to={'/'}><li>Главная</li></NavLink>
                <NavLink to={'/menu-page'}><li>Меню</li></NavLink>
                <button>Бронь столика</button>
            </nav>
        </header>
    );
}

