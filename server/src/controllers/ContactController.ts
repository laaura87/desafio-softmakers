import { Response, Request } from "express";
import db from "../database/connection";
import Contacts from "../models/Contacts";

export default new (class ContactController {
  async show(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const findContact = await Contacts.show(id);

    if (!findContact) return res.json({ Error: "Contato não encontrado" });

    return res.json({ findContact });
  }

  async index(req: Request, res: Response): Promise<Response> {
    const contacts = await Contacts.index();

    return res.json({ contacts });
  }

  async create(req: Request, res: Response): Promise<Response> {
    const { name, surname, phone, email, adress } = req.body;

    const contact = {
      image: req.file.filename,
      name,
      surname,
      phone,
      email,
      adress,
    };

    try {
      await Contacts.create(contact);
      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        error: "Erro inexperado ao criar um novo contato.",
      });
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, surname, phone, email, adress } = req.body;

    const contact = {
      image: req.file.filename,
      name,
      surname,
      phone,
      email,
      adress,
      id,
    };

    try {
      await Contacts.update(contact);

      return res.status(201).send();
    } catch (error) {
      return res.status(400).json({
        error: "Erro inexperado ao editar o contato.",
      });
    }
  }

  async destroy(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const findUser = await Contacts.destroy(id);

    if (!findUser) return res.json({ error: "Contato não encontrado" });

    return res.json({ Messege: "Contato deletado com sucesso" });
  }
})();
