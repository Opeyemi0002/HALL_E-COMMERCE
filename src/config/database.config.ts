import { registerAs } from '@nestjs/config';
import { getIntValidation } from 'src/common/helper/int-transform.helper';

export default registerAs('database', () => ({
  host: process.env.DB_HOST,
  port: getIntValidation(process.env.DB_PORT, '5432'),
  userName: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  name: process.env.DB_NAME,
  autoLoadEntities: process.env.DB_AUTOLOAD_ENTITIES === 'true',
  sync: process.env.DB_SYNC === 'true',
}));
