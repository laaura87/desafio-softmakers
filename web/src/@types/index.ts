export interface Contact {
  id?: number | string;
  image: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
  cep?: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  number?: string;
}
