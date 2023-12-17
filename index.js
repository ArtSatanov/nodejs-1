import * as contactsService from './contacts.js';

invokeContacts = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    case 'getById':
      const oneContact = await contactsService.removeContact(id);
      return oneContact;
    case 'addContact':
      const addContact = await contactsService.addContact(name, email, phone);
      return addContact;
    case 'removeContact':
      const removeContact = await contactsService.removeContact(id);
      return removeContact;
  }
};
