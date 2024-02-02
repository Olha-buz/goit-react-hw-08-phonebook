import { NavLink } from "react-router-dom";
import css from '../AppBar.module.css';

export const AuthNav = () => {
    return (
        <div>
            <NavLink className={css.navlinkHeader} to={'/signup'}>Sign Up</NavLink>
            <NavLink className={css.navlinkHeader} to={'/login'}>Log In</NavLink>
        </div>
    )
};
