# Shopping List Management Backend

This is the backend system for a web application that allows users to manage their shopping lists. The frontend of the application is built with React and communicates with the backend via a RESTful API. The backend is implemented in Node.js using TypeScript and uses MongoDB as its primary data store.

## Requirements

Your task is to implement a new API endpoint that allows users to share their shopping lists with other users. Specifically, you need to:

1. Implement a new endpoint that allows a user to share a shopping list with another user. The endpoint should take the following parameters:
   - `listId` (string): the ID of the shopping list to be shared.
   - `sharedWith` (string): the email address of the user to share the list with.
   - `permission` (string): the permission level to grant the shared user ('read' or 'write').

2. Implement a new endpoint that allows a user to view all the shopping lists they have shared with others and the permission levels they have granted. The endpoint should take the following parameter:
   - `userId` (string): the ID of the user whose shared lists to retrieve.

3. Ensure that the new endpoints are authenticated, so that only logged-in users can access them.

4. Write unit tests to verify the functionality of the new endpoints.

## Constraints

- You must use Node.js and TypeScript for the implementation.
- You must use MongoDB as the data store.
- You must use a RESTful API design.
- You must use JWT for authentication.
- Your code must be modular and maintainable.
- Your code must follow industry best practices for security and performance.
- Your code must be properly documented.

## Submission

Please submit your code as a Git repository hosted on a public code hosting service such as GitHub or GitLab. The repository should contain the following:

1. All the code necessary to implement the new API endpoints, along with any additional code required to support them.

2. A README file explaining how to build, test, and run the code.

3. A document explaining your design decisions and any trade-offs you made.

4. Unit tests for the new endpoints.

## Prerequisites

Before you begin, make sure you have the following prerequisites installed on your system:

- Node.js: You can download and install it from [nodejs.org](https://nodejs.org/).
- MongoDB: Ensure you have a running MongoDB server. You can download and install MongoDB from [mongodb.com](https://www.mongodb.com/try/download/community).

## Getting Started

1. Clone this repository to your local machine:

   ```bash
   git clone <repository_url>
   ```

2. Change to the project directory:
   ```bash
   cd shopping-list-backend
   ```

## Running the Server
```bash
   npm install
```

## API Endpoints

The API provides the following endpoints:

### Share a Shopping List

**POST /api/share-list**

- Share a shopping list with another user.
- Requires authentication.

**Parameters:**

- `listId` (string): the ID of the shopping list to be shared.
- `sharedWith` (string): the email address of the user to share the list with.
- `permission` (string): the permission level to grant the shared user ('read' or 'write').

### View Shared Shopping Lists

**GET /api/shared-lists/:userId**

- View all the shopping lists shared with a user and their permissions.
- Requires authentication.

**Parameters:**

- `userId` (string): the ID of the user whose shared lists to retrieve.


## Testing

To run the unit tests for this project, follow these steps:

1. Make sure you have installed all project dependencies by running:

   ```bash
   npm install


## Contributing

We welcome contributions from the community to make this project better. To contribute, please follow these steps:

1. Fork the repository to your GitHub account.

2. Clone the forked repository to your local machine:

   ```bash
   git clone <your_forked_repo_url>


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

