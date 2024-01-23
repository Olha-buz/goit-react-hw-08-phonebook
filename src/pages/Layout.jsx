const { Loader } = require("components/Loader/Loader")
const { Suspense } = require("react")
const { NavLink, Outlet } = require("react-router-dom")

export const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/login'>Log In</NavLink>
                    <NavLink to='/registration'>Registration</NavLink>
                    
                    <Suspense fallback={<Loader />}>
                        <Outlet />
                    </Suspense>
                </nav>
            </header>
        </>
    )
};