import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040/';

const getContactsApi = () => {
  return axios
    .get('contacts')
    .then(({ data }) => data)
    .catch(error => {
      throw error;
    });
};

export { getContactsApi };

const addContactApi = contactData => {
  return axios
    .post(`contacts`, contactData)
    .then(({ data }) => {
      return data;
    })
    .catch(err => {
      throw err;
    });
};

export { addContactApi };

const deleteContactApi = contactId => {
  return axios
    .delete(`contacts/${contactId}`)
    .then(({ data }) => data)
    .catch(err => {
      throw err;
    });
};

export { deleteContactApi };
