import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import css from './LoginForm.module.css';
import { logInThunk } from "store/api";
import { selectAuthError } from "store/auth/selectorsAuth";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector(selectAuthError);
    
    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(logInThunk({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
        if (error === null) { navigate('/contacts') };
    };

    return (
        <div className={css.divLogin}>
            <h2 className={css.loginTitle}>Log In</h2>
            <form className={ css.loginForm} onSubmit={handleSubmit}>
                <label className={css.loginLabel}>
                    <p className={css.loginP}> Email</p>
                    <input
                        className={css.loginInput}
                        type='email'
                        name='email'
                        placeholder='Enter email'
                    />
                </label>
                <label className={css.loginLabel}>
                    <p className={css.loginP}>Password</p>
                    <input
                        className={css.loginInput}
                        type='password'
                        name='password'
                        placeholder='Enter password'
                    />
                </label>
                {error === 'Request failed with status code 400' &&
                    <p className={css.pErrorLogin}>Something wrong! Check your email/password.</p>}
                <button className={css.loginButton} type='submit'>
                    Log In
                </button>
            </form>
        </div>
       
    )
};