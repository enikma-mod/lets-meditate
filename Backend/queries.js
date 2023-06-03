const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'meditationapp',
  password: '12345',
  port: 5432,
})

//GET
const getUsers = (request, response) => {
  pool.query('SELECT * FROM categories ORDER BY id ASC', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//GET
const getUserById = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('SELECT * FROM categories WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}

//POST
const createUser = (request, response) => {
  const { title, description, duration, image } = request.body

  pool.query('INSERT INTO categories (title, description, duration, image) VALUES ($1, $2, $3, $4)', [title, description, duration, image], (error, results) => {
    if (error) {
      throw error
    } else {
      response.status(201).send(`Data inserted into categories successfully`)
      console.log('Inserted row:', results.rows[0]);
    }
  })
}

const updateUser = (request, response) => {
  const id = parseInt(request.params.id)
  const { title, description, duration, image } = request.body

  pool.query(
    'UPDATE categories SET name = $1, email = $2 WHERE id = $3',
    [title, description, duration, image, id],
    (error, results) => {
      if (error) {
        throw error
      }
      response.status(200).send(`User modified with ID: ${id}`)
    }
  )
}

const deleteUser = (request, response) => {
  const id = parseInt(request.params.id)

  pool.query('DELETE FROM categories WHERE id = $1', [id], (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).send(`User deleted with ID: ${id}`)
  })
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}