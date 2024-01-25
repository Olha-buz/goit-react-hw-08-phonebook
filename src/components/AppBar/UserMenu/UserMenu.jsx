
import { useAuth } from "hooks/useAuth";
import { useDispatch } from "react-redux"
import { logOutThunk } from "store/auth/operationsAuth";
import css from '../AppBar.module.css';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button className={css.headerButton} type='button' onClick={() => dispatch(logOutThunk())}>
                Log Out
            </button>
        </div>
    )

};