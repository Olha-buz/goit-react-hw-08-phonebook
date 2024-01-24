import { Loader } from "components/Loader/Loader";
import { LogoutForm } from "components/LogoutForm/LogoutForm";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUser } from "store/auth/selectorsAuth";
import css from './Layout.module.css';

export const Layout = () => {
    const isAuth = useSelector(selectUser);

    return (
        <>
            <header className={css.header}>
                <nav className={css.nav}>
                    {isAuth && <LogoutForm email={isAuth.email} />}
                    {isAuth === null && <NavLink className={css.navlinkHeader} to={'signup'}>Sign Up</NavLink>}
                    {isAuth === null && <NavLink className={css.navlinkHeader} to={'login'}>Log In</NavLink>}
                    
                </nav>
            </header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
};