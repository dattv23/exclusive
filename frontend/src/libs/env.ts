import { z } from 'zod';

const configClientSchema = z.object({
  NEXT_PUBLIC_SHOW_LOGGER: z.enum(['true', 'false']).optional(),
  NEXT_PUBLIC_APP_URL: z.string(),
});

const configServerSchema = z.object({});

const configClient = configClientSchema.safeParse({
  NEXT_PUBLIC_SHOW_LOGGER: process.env.NEXT_PUBLIC_SHOW_LOGGER,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

const configServer = configServerSchema.safeParse({});

if (!configClient.success) {
  throw new Error('Environment variables for client not valid!');
}

if (!configServer.success) {
  throw new Error('Environment variables for server not valid!');
}

const envClientConfig = configClient.data;
const envServerConfig = configServer.data;

export { envClientConfig, envServerConfig };
