import app from './app';
import config from './config';

// const { PORT } = config;

const port = process.env.PORT || 5000

require('dotenv').config({
    path: '.env'
})

app.listen(port, () => console.log(`Server started on PORT ${port}`));
