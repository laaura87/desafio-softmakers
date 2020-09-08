import db from "../database/connection";

export interface Contact {
  id?: number | string;
  image: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  adress: string;
}

const table = db("contact");

export default {
  async show(id: string | number): Promise<Contact> {
    return await table.where({ id: id }).first();
  },
  async index(): Promise<Contact | any[]> {
    return await table.select("*");
  },
  async create(contact: Contact): Promise<Contact> {
    return await table.insert(contact);
  },
  async update(contact: Contact): Promise<Contact | number> {
    return await table.update(contact).where({ id: contact.id });
  },
  async destroy(id: string | number): Promise<Contact> {
    return await table.where({ id: id }).del();
  },
};
