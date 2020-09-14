# SoftMakers Contatos

Contact management web system.

Challenge proposed by [SoftMakers](https://github.com/BrSoftMakers/challenge-fullstack-developer) as a criterion for the selection process.

## Technologies

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [React](https://reactjs.org/)
- [Knex.js](http://knexjs.org/)

Project made using [REST](https://en.wikipedia.org/wiki/Representational_state_transfer) architecture.

## Getting started

### **Server**

Create a `.env` file in the `server` folder, and fill with the postgres url, like this

```
DB_URL=postgres:// put url here
```

Install the dependencies running the following commands

```
cd server
yarn install
```

Run the database migrations

```
yarn knex:migrate
```

Finally, run the project

```
yarn start
```

Development server will be running in the [http://localhost:3050](http://localhost:3050)

### **Client**

Install the dependencies running the following commands

```
cd web
yarn install
```

Finally, run the project

```
yarn start
```

Development server will be running in the [http://localhost:3000](http://localhost:3000)

To change backend url, edit `/web/src/services/api.ts`.

## Documentation

the documentation for the backend routes are in the `docs` folder, the routes are the following.

- `/contacts` - Contacts collection

## License

This project is MIT licensed.
