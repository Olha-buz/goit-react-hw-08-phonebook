import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { signUpThunk } from "store/auth/operationsAuth";
import css from './SignupForm.module.css';

export const SignupForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = evt => {
        evt.preventDefault();
        const form = evt.currentTarget;
        dispatch(signUpThunk({
            name: form.elements.name.value,
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
        navigate('/contacts');
    };

    return (
        <div className={css.divSignup}>
            <h2>Sign Up</h2>
            <form className={css.signupForm} onSubmit={handleSubmit}>
                <label className={css.signupLabel}>
                    <p className={css.signupP} >Name</p>
                    <input
                        className={css.signupInput}
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                    /> 
                </label > 
                <label className={css.signupLabel}>
                    <p className={css.signupP} >Email</p>
                    <input
                        className={css.signupInput}
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                    />
                </label>
                <label className={css.signupLabel}>
                    <p className={css.signupP} >Password </p>
                    <input
                        className={css.signupInput}
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                    />
                </label>
                <button className={css.signupButton} type='submit'>Sign Up</button>
            </form>
        </div>
    )
}