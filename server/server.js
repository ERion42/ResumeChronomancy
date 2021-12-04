const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const promisify = require('util').promisify;
const { ApolloServer } = require('apollo-server-express');
const path = require('path');

const { typeDefs, resolvers } = require('./schemas');
const { authMiddleware } = require('./utils/auth');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authMiddleware,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
// app.use(morgan('dev'));
// app.use(cors())
// app.options('*', cors());

// const writeFilePromise = promisify(fs.writeFile);

// WriteTextToFileAsync = async (contentToWrite) => {
//     try {
//         const path = 'trial.txt';
//         await writeFilePromise(contentToWrite, path);
//     } catch (error) {
//         throw new Error(`${error}`)
//     }
// }

// app.use('/write', async (req, res, next) => {
//     try {
//         const fileContent = req.body;
//         await WriteTextToFileAsync(fileContent);
//         return res.status(200).send( { message: 'File written successfully' })
//     } catch (error) {
//         throw new Error(`${error}`)
//     }
// })

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
};

db.once('open', () => {
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}`);
        console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
    });
});
