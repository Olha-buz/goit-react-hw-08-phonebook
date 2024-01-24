import { Loader } from "components/Loader/Loader";
import { LogoutForm } from "components/LogoutForm/LogoutForm";
import { Suspense } from "react";
import { useSelector } from "react-redux";
import { NavLink, Outlet } from "react-router-dom";
import { selectUser } from "store/auth/selectorsAuth";

export const Layout = () => {
    const isAuth = useSelector(selectUser);

    return (
        <>
            <header>
                <nav>
                    {isAuth && <LogoutForm email={isAuth.email} />}
                    {isAuth === null && <NavLink to={'signup'}>Sign Up</NavLink>}
                    {isAuth === null && <NavLink to={'login'}>Log In</NavLink>}
                    
                </nav>
            </header>
            <Suspense fallback={<Loader />}>
                <Outlet />
            </Suspense>
        </>
    )
};