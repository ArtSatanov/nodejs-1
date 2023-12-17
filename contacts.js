import fs from 'fs/promises';
import path from 'path';

const contactsPath = path.resolve('db', 'contact.json');

// TODO: задокументувати кожну функцію
export async function listContacts() {
  const data = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(data);
  // ...твій код. Повертає масив контактів.
}

export function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

export function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

export function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
}
