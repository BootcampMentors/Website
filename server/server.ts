import { app, PORT } from './config/init.config';

import './config/mongoose.config';

import { routes } from './routes/master.route';

routes(app);

app.listen(PORT, () => console.log(`now listening to port ${PORT}`));