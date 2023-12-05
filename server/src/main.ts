import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';

import { DEFAULT_EXPRESS_PORT } from './utils/constants';

// Setup
const app = express();
app.use(express.json());
app.use(cors());
app.use(helmet());
dotenv.config();

// Ports
export const expressPort = Number(
  process.env.EXPRESS_PORT || DEFAULT_EXPRESS_PORT
);

// Express Server
app.listen(expressPort, () => {
  console.log(`[STATUS] Express listening on port ${expressPort}...`);
});
