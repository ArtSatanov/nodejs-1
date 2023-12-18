import * as contactsService from './contacts.js';
import { program } from 'commander';

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case 'list':
      const allContacts = await contactsService.listContacts();
      return console.table(allContacts);
    case 'getById':
      const oneContact = await contactsService.removeContact(id);
      return console.log(oneContact);
    case 'addContact':
      const addContact = await contactsService.addContact(name, email, phone);
      return console.log(addContact);
    case 'removeContact':
      const removeContact = await contactsService.removeContact(id);
      return console.log(removeContact);
    default:
      console.warn('\x1B[31m Unknown action type!');
  }
};

program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse();

const argv = program.opts();

invokeAction(argv);
