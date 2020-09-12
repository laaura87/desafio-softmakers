import db from "../database/connection";
import { Contact } from "../@types";

interface IndexParams {
  page: number;
  itemsPerPage: number;
}

const table = () => db("contact");

export default {
  async count(): Promise<number> {
    const result = await table().count(`id`);

    return parseInt(result[0].count as string, 10);
  },

  async index({ page, itemsPerPage }: IndexParams): Promise<Contact | any[]> {
    return await table()
      .select("*")
      .offset((page - 1) * itemsPerPage)
      .limit(itemsPerPage);
  },
  async show(id: string | number): Promise<Contact> {
    return await table().where({ id: id }).first();
  },
  async create(contact: Contact): Promise<Contact> {
    return await table().insert(contact);
  },
  async update(contact: Contact): Promise<Contact> {
    const contactId = await table().where({ id: contact.id }).first();
    await table().update(contact).where({ id: contact.id });
    return contactId;
  },
  async destroy(id: string | number): Promise<Contact> {
    const contact = await table().where({ id: id }).first();
    await table().where({ id: id }).del();
    return contact;
  },
};
