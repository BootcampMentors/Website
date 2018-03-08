import { app, PORT } from './config/init.config';

import './config/mongoose.config';

app.listen(PORT, () => console.log(`now listening to port ${PORT}`));