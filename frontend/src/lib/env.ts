import { z } from 'zod';

// Client-side environment variables schema
const configClientSchema = z.object({
  NEXT_PUBLIC_SHOW_LOGGER: z.enum(['true', 'false']).optional(),
  NEXT_PUBLIC_APP_URL: z.string(),
});

// Server-side environment variables schema
const configServerSchema = z.object({
  DOMAIN: z.string(),
  DOMAIN_API: z.string(),
});

// Validate client-side environment variables
const configClient = configClientSchema.safeParse({
  NEXT_PUBLIC_SHOW_LOGGER: process.env.NEXT_PUBLIC_SHOW_LOGGER,
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
});

// Validate server-side environment variables
const configServer = configServerSchema.safeParse({
  DOMAIN: process.env.DOMAIN,
  DOMAIN_API: process.env.DOMAIN_API,
});

// Check for client-side environment variable validation errors
if (!configClient.success) {
  console.error(
    'Client environment validation errors:',
    configClient.error.format(),
  );
  throw new Error('Environment variables for client not valid!');
}

// Check for server-side environment variable validation errors
if (!configServer.success) {
  console.error(
    'Server environment validation errors:',
    configServer.error.format(),
  );
  throw new Error('Environment variables for server not valid!');
}

// Export the validated configurations
const envClientConfig = configClient.data;
const envServerConfig = configServer.data;

export { envClientConfig, envServerConfig };
