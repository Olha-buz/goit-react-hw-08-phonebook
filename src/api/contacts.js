import axios from 'axios';

export const fetchAllContacts = async () => {
    const response = await axios.get('contacts');
    console.log(response.data);
    return response.data;
};

export const addContact = async ({ name, number }) => {
    const response = await axios.post('contacts', { name, number });
    console.log(response.data);
    return response.data;
};

export const deleteContact = async (contactId) => {
    const response = await axios.delete(`contacts/${contactId}`);
    console.log(response.data);
    return response.data;
};
