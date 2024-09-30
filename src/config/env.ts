export const env = {
  apiUrl: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/api',
  environment: process.env.NODE_ENV ?? 'development',
};
