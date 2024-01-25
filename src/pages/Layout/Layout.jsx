import { Loader } from "components/Loader/Loader";
import { Suspense } from "react";
// import { useSelector } from "react-redux";
import {  Outlet } from "react-router-dom";
// import { selectUser } from "store/auth/selectorsAuth";
import css from './Layout.module.css';
import { AppBar } from "components/AppBar/AppBar";

export const Layout = () => {
    // const isAuth = useSelector(selectUser);

    return (
        <>
            <header className={css.headerLayout}>

                <AppBar/>

                {/* ================ navigation ==============

                <NavLink className={css.navlinkHeader} to={''}>Home</NavLink>
                <nav className={css.nav}>
                    
                    {isAuth && <LogoutForm email={isAuth.email} />}
                    {isAuth === null && <NavLink className={css.navlinkHeader} to={'signup'}>Sign Up</NavLink>}
                    {isAuth === null && <NavLink className={css.navlinkHeader} to={'login'}>Log In</NavLink>}
                </nav> */}


            </header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
};