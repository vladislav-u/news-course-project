import { body } from 'express-validator';

const schema = [body('url').isURL(), body('image').isURL()];

export { schema as cardSchema };
