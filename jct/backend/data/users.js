import bcrypt from "bcryptjs"

const users  = [
	{
		"name": "Admin",
		"email": "alice@example.com",
		"password": bcrypt.hashSync("admin", 10),
		"isAdmin": true,
	},
	{
		"name": "Bob Doe",
		"email": "bob@example.com",
		"password": bcrypt.hashSync("bobdoe", 10),
	},
	{
		"name": "Charlie Doe",
		"email": "charlie@example.com",
		"password": bcrypt.hashSync("charliedoe", 10),
	},
	{
		"name": "Dave Doe",
		"email": "dave@example.com",
		"password": bcrypt.hashSync("davedoe", 10),
	},
	{
		"name": "Eve Doe",
		"email": "eve@example.com",
		"password": bcrypt.hashSync("evedoe", 10),
	}
]

export default users

