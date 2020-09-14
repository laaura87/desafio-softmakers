## Contacts

### Create a new contact

- **URL**

  - `POST /contacts`

- **Body**

  - `image: File` - Image PNG, JPG, JPEG or GIF up to 5mb size
  - `name: string` - Name
  - `surname: string` - Surname
  - `phone: string` - Phone number
  - `email: string` - Email
  - `state: string` - State
  - `city: string` - City
  - `street: string` - Street
  - `neighborhood: string` - Neighborhood
  - `(optional) number: string` - House number
  - `(optional) cep: string` - CEP (Brazil only)

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** no content

- **Error Response:**

  - **Code:** 500 <br />
    **Content:** `{ error: "Unexpected error when creating new contact." }`

### List contacts

- **URL**

  - `GET /contacts?page={page}`

  - **Query Params**
    - `page: number` - Page of contact list

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ "page": 1, "itemsPerPage": 5, "count": 13, "pages": 3, "contacts": [ { "id": 85, "image": "/uploads/265465.png", "name": "Michael", "surname": "Jackson", "email": "michael@samplemail.com", "phone": "99999999999", "cep": "12345678", "state": "PE", "city": "Caruaru", "street": "Av. Agamenom Magalhães", "neighborhood": "Maurício de Nassau", "number": "1500" }, ] }`

- **Error Response:**

  - **Code:** 500 <br />
    **Content:** `{ error: "Unexpected error when show contacts." }`

### View one contact

- **URL**

  - `GET /contacts/{id}`

  - **URL Params**
    - `id: number` - Contact ID

- **Success Response:**

  - **Code:** 201 <br />
    **Content:** `{ "id": 85, "image": "/uploads/265465.png", "name": "Michael", "surname": "Jackson", "email": "michael@samplemail.com", "phone": "99999999999", "cep": "12345678", "state": "PE", "city": "Caruaru", "street": "Av. Agamenom Magalhães", "neighborhood": "Maurício de Nassau", "number": "1500" }`

- **Error Response:**

  - **Code:** 404 <br />
    **Content:** `{ error: "Contact not found." }`

  or

  - **Code:** 500 <br/>
    **Content:** `{ error: "Unexpected error while showing contact." }`

### Edit contact

- **URL**

  - `PUT /contacts/{id}`

  - **URL Params**
    - `id: number` - Contact ID

- **Body**

  - `image: File` - Image PNG, JPG, JPEG or GIF up to 5mb size
  - `name: string` - Name
  - `surname: string` - Surname
  - `phone: string` - Phone number
  - `email: string` - Email
  - `state: string` - State
  - `city: string` - City
  - `street: string` - Street
  - `neighborhood: string` - Neighborhood
  - `(optional) number: string` - House number
  - `(optional) cep: string` - CEP (Brazil only)

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** no content

- **Error Response:**

  - **Code:** 500 <br />
    **Content:** `{ error: "Unexpected error while editing contact." }`

### Delete contact

- **URL**

  - `DELETE /contacts/{id}`

  - **URL Params**
    - `id: number` - Contact ID

- **Success Response:**

  - **Code:** 200 <br />
    **Content:** `{ message: "Contact successfully deleted." }`

- **Error Response:**

  - **Code:** 404 <br />
    **Content:** `{ error: "Contact not found." }`

  or

  - **Code:** 500 <br />
    **Content:** `{ error: "Unexpected error when deleting contact." }`
