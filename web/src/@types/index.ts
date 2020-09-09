export interface Contact {
  id?: number | string;
  image: string;
  name: string; //done
  surname: string; //done
  phone: string; //done
  email: string; //done
  cep?: string;
  state: string;
  city: string;
  street: string;
  neighborhood: string;
  number?: string;
}
