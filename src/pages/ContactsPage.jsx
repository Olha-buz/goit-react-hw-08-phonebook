import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { selectToken } from "store/auth/selectorsAuth";
import { selectError, selectLoading } from "store/contacts/selectorsContacts";
import { fetchContactsThunk } from "store/contacts/thunkContact";

export const Contacts = () => {
    const dispatch = useDispatch();

    const token = useSelector(selectToken);
    const isLoading = useSelector(selectLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContactsThunk(token));
    }, [token, dispatch]);

    return (
        <div>
            <title>Phonebook</title>
            {isLoading && <Loader />}
            {error && <p>Please log in to use the service</p>}
            <ContactForm />
            <Filter />
            <ContactList />
        </div>
    )
};