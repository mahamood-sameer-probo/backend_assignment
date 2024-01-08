
# Backend Project




## Setting up and Running the project

```bash
  git clone https://github.com/mahamood-sameer-probo/backend_assignment.git
  cd backend_assignment
  npm install
  node app.js
```

    
## API Reference

#### Create a contract

```http
  POST /create_contract/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `contract_id`      | `string` | **Required**. Id of contract |
| `contract_name`      | `string` | **Required**. name of contract |
| `contract_description`      | `string` | **Required**. description of contract |
| `contract_amount`      | `integer` | **Required**. amount for the contract |
| `user_id`      | `string` | **Required**. Id of the user who is creating the contract |


#### Update a contract

```http
  PUT /update_contract/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `contract_id`      | `string` | **Required**. Id of contract |
| `contract_name`      | `string` | **Required**. name of contract |
| `contract_description`      | `string` | **Required**. description of contract |
| `contract_amount`      | `integer` | **Required**. amount for the contract |
| `user_id`      | `string` | **Required**. Id of the user who is creating the contract |

#### Delete a contract

```http
  DELETE /delete_contract/
```

| Body | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `contract_id`      | `string` | **Required**. Id of contract |



#### Get all contracts of a user

```http
  GET /get_contracts/${id}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `id` | `string` | **Required**. User Id to fetch |

#### Get a specific contract

```http
  GET /get_contract/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of contract to fetch |







## Running Tests

To run tests, run the following command

```bash
  npm run test
```


## Lessons Learned

Unit testing using mocha and chai ✅



