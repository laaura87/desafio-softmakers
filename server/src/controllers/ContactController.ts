import { Response, Request } from "express";
import Contacts from "../models/Contacts";
import { deleteFile } from "../services/files";

export default new (class ContactController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const findContact = await Contacts.show(id);

    if (!findContact) return res.json({ Error: "Contact not found." });

    return res.json({ findContact });
  }

  async index(req: Request, res: Response): Promise<Response> {
    const contacts = await Contacts.index();

    return res.json({ contacts });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const {
      name,
      surname,
      phone,
      email,
      cep,
      state,
      city,
      street,
      neighborhood,
      number,
    } = req.body;

    const contact = {
      image: req.file.filename,
      name,
      surname,
      phone,
      email,
      cep,
      state,
      city,
      street,
      neighborhood,
      number,
    };

    try {
      await Contacts.create(contact);
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        error: "Unexpected error when creating new contact.",
      });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const {
      name,
      surname,
      phone,
      email,
      adress,
      cep,
      state,
      city,
      street,
      neighborhood,
      number,
    } = req.body;

    const contact = {
      image: req.file.filename,
      name,
      surname,
      phone,
      email,
      adress,
      id,
      cep,
      state,
      city,
      street,
      neighborhood,
      number,
    };

    try {
      await Contacts.update(contact);

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        error: "Unexpected error while editing contact",
      });
    }
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    try {
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
