import { useAuth } from "hooks/useAuth"
import { NavLink } from "react-router-dom";
import css from '../AppBar.module.css';

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

    return (
        <nav className={css.nav}>
            <NavLink className={css.navlinkHeader} to='/'>Home</NavLink>
            {isLoggedIn && (<NavLink className={css.navlinkHeader} to='/contacts'>Contacts</NavLink>)}
        </nav>
    )
};