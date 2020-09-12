import { Response, Request } from "express";
import Contacts from "../models/Contacts";
import { deleteFile } from "../services/files";
import { Contact } from "../@types";

export default new (class ContactController {
  async index(req: Request, res: Response): Promise<Response> {
    try {
      const page = parseInt((req.query.page as string) || "1", 10);
      const config = { page, itemsPerPage: 5 };
      const contacts = await Contacts.index(config);
      const count = await Contacts.count();

      return res.json({
        ...config,
        count,
        pages: Math.ceil(count / config.itemsPerPage),
        contacts,
      });
    } catch (error) {
      return res.status(500).json({
        error: "Unexpected error when show contacts.",
      });
    }
  }

  async show(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const findContact = await Contacts.show(id);

      if (!findContact)
        return res.status(404).send({ Error: "Contact not found." });

      return res.json({ findContact });
    } catch (error) {
      return res.status(500).send("Unexpected error while showing contact.");
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const contact: Contact = {
        ...req.body,
        image: req.file.filename,
      };

      await Contacts.create(contact);
      return res.status(201).send();
    } catch (error) {
      return res.status(500).json({
        error: "Unexpected error when creating new contact.",
      });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const contact: Contact = {
        ...req.body,
        image: req.file.filename,
        id,
      };

      const updateContact = await Contacts.update(contact);

      deleteFile(updateContact.image);

      return res.status(201).send();
    } catch (error) {
      return res.status(500).json({
        error: "Unexpected error while editing contact",
      });
    }
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const deletedContact = await Contacts.destroy(id);
      deleteFile(deletedContact.image);
      if (!deletedContact) return res.json({ error: "Contact not found" });
      return res.json({ Messege: "Contact successfully deleted" });
    } catch (error) {
      return res
        .status(500)
        .json({ error: "Unexpected error when deleting contact" });
    }
  }
})();
