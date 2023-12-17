import * as contactsService from './contacts.js';

invokeContacts = async ({ action, id, ...data }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
      return console.log(allContacts);
    case 'getById':
      const oneContact = await contactsService.removeContact(id);
      return oneContact;
  }
};
