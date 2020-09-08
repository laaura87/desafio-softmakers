import { Response, Request } from "express";
import db from "../database/connection";

interface Contact {
  image: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  adress: string;
}

export default new (class ContactController {
  async show(req: Request, res: Response): Promise<Response> {
    const contacts = await db("contact").select("*");

    return res.json({ contacts });
  }

  async post(req: Request, res: Response): Promise<Response> {
    const { image, name, surname, phone, email, adress } = req.body;

    const trx = await db.transaction();

    try {
      const insertContact = trx("contact").insert({
        image,
        name,
        surname,
        phone,
        email,
        adress,
      });

      await trx.commit();
      return res.status(201).send();
    } catch (error) {
      await trx.rollback();
      return res.status(400).json({
        error: "Erro inexperado ao criar um novo contato.",
      });
    }
  }

  async showOne(req: Request, res: Response) {}

  async edit(req: Request, res: Response): Promise<Response> {
    const { image, name, surname, phone, email, adress } = req.body;
    const { id } = req.params;

    const trx = await db.transaction();
    try {
      const insertContact = trx("contact")
        .update({
          image,
          name,
          surname,
          phone,
          email,
          adress,
        })
        .where({ id: id });

      await trx.commit();
      return res.status(201).send();
    } catch (error) {
      await trx.rollback();
      return res.status(400).json({
        error: "Erro inexperado ao editar o contato.",
      });
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.body;

    const findUser = await db("contact").where({ id: id }).del();

    if (!findUser) return res.send("Contato não encontrado");

    return res.send(`Contato deletado`);
  }
})();
