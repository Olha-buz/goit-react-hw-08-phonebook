
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"

import css from '../AppBar.module.css';
import { logOutThunk } from "store/api";

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div className={css.headerUserMenu}>
            <p className={css.pheaderUser}>Welcome, {user.name}!</p>
            <button className={css.headerButtonUser} type='button' onClick={() => dispatch(logOutThunk())}>
                Log Out
            </button>
        </div>
    )

};