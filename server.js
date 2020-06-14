import app from './app';
import config from './config';

const { PORT } = config;

require('dotenv').config({
    path: '.env'
})

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
