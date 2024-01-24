import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";
import { logInThunk } from "store/auth/thunksAuth";
import { selectError } from "store/contacts/selectorsContacts";

export const LoginForm = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const error = useSelector(selectError);
    
    const handleSubmit = evt => {
        evt.prevenrDefault();
        const form = evt.currentTarget;
        dispatch(logInThunk({
            email: form.elements.email.value,
            password: form.elements.password.value,
        }))
        form.reset();
        if (error === null) { navigate('/contacts') };
    };

    return (
        <div>
            LogIn Form
            <form onSubmit={handleSubmit} autoComplete='off'>
                <label>
                    Email
                    <input
                        type='email'
                        name='email'
                        placeholder='Enter email'
                    />
                </label>
                <label>
                    Password
                    <input
                        type='password'
                        name='password'
                        placeholder='Enter password'
                    />
                </label>
                <button type='submit'>
                    Log In
                </button>
            </form>
        </div>
       
    )
};