import { z } from 'zod';

const configClientSchema = z.object({
  NEXT_PUBLIC_SHOW_LOGGER: z.enum(['true', 'false']).optional(),
  NEXT_PUBLIC_APP_URL: z.string(),
});

const configServerSchema = z.object({
  DOMAIN: z.string(),
  DOMAIN_API: z.string(),
});

const configClient = configClientSchema.safeParse({
  NEXT_PUBLIC_SHOW_LOGGER: process.env.NEXT_PUBLIC_SHOW_LOGGER,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

const configServer = configServerSchema.safeParse({
  DOMAIN: process.env.DOMAIN,
  DOMAIN_API: process.env.DOMAIN_API,
});

if (!configClient.success) {
  throw new Error('Environment variables for client not valid!');
}

if (!configServer.success) {
  throw new Error('Environment variables for server not valid!');
}

const envClientConfig = configClient.data;
const envServerConfig = configServer.data;

export { envClientConfig, envServerConfig };
