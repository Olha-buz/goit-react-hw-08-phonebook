import { useDispatch, useSelector } from 'react-redux';
import css from './Filter.module.css';
import { selectFilter } from 'store/contacts/selectorsContacts';
import { addFilter } from 'store/contacts/filterSlice';


export const Filter = () => {
    const filter = useSelector(selectFilter);
    const dispatch = useDispatch();

    const handleFilter = evt => {
        evt.preventDefault();
        const name = evt.currentTarget.value;
        dispatch(addFilter(name));
    };

    return (
        <>
            <label className={css.filter}>
                Find contacts by name:
                <input
                    className={css.inputfilter}
                    type="text"
                    name="filter"
                    value={filter}
                    onChange={handleFilter}
                />
            </label>
        </>
    );
};