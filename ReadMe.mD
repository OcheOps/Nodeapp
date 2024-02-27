Sure, here's a README.md file documenting the steps to build, run, and test the web application using Docker and Docker Compose:

---

# Node.js Web Application with Express.js and MongoDB

This repository contains a Node.js web application built with Express.js and MongoDB. It provides two RESTful endpoints routes: `/users` and `/tasks`, each supporting CRUD operations. MongoDB is used to store collections of users and tasks.

## Prerequisites

- Docker
- Docker Compose

## Usage

### 1. Clone the Repository

```bash
git clone https://github.com/OcheOps/Nodeapp.git
cd Nodeapp
```

### 2. Set Environment Variables

Create a `.env` file in the root directory and add the following environment variables:

```plaintext
MONGODB_URL=mongodb+srv://username:password@your-mongodb-url/your-database-name?retryWrites=true&w=majority
```
and port number

Replace `username`, `password`, and `your-mongodb-url` with your MongoDB credentials and URL.

### 3. Build and Run the Docker Containers

```bash
docker-compose up --build
```

This command will build the Docker images for the web application and MongoDB database, create containers, and start them.

### 4. Access the Web Application

Once the containers are running, you can access the web application at `http://localhost:4000`.

### 5. Run Tests

```bash
docker-compose run web npm test
```

This command will run the tests for the web application.

### 6. Stop the Containers

```bash
docker-compose down
```

This command will stop and remove the Docker containers.


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Feel free to customize the README file according to your specific project requirements and preferences.