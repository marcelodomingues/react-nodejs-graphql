const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Allow cross-origin
app.use(cors());

app.use(
	'/graphql',
	graphqlHTTP({
		schema,
		graphiql: true
	})
)
	.use(express.static('public'))
	.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'public', 'index.html'));
	})
	.listen(PORT, () => console.log(`Server started on port ${PORT}`));
