import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { signUpThunk } from "store/auth/thunksAuth";

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
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input
                        type='text'
                        name='name'
                        placeholder='Enter your name'
                    /> 
                </label> 
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter your email'
                    />
                </label>
                <label>
                    Password 
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter your password'
                    />
                </label>
                <button type='submit'>Sign Up</button>
            </form>
        </div>
    )
}