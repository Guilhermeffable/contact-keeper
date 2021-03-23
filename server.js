const express = require('express');
const users = require('./routes/users');

const app = express();

app.get('/', (req, res) =>
    
    res.json({ msg: 'Welcome to the Contact Keeper API.' }) 
    
);

console.log(users)

// Define routes
app.use('/api/users', users);
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));