import css from './Home.module.css';

export const Home = () => {
    return (
        <div className={css.divHome}>
            <div className={css.divText}>
                <h1>Phonebook</h1>
                <p>Log in or sign up to start!</p>
            </div>
        </div>
    )
};


