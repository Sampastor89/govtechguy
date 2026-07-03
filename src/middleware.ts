import { defineMiddleware } from 'astro:middleware';

export const onRequest = defineMiddleware((context, next) => {
  const authHeader = context.request.headers.get('Authorization');

  if (!authHeader?.startsWith('Basic ')) {
    return unauthorized();
  }

  const decoded = Buffer.from(authHeader.slice(6), 'base64').toString('utf-8');
  const colonIndex = decoded.indexOf(':');
  const password = decoded.slice(colonIndex + 1);
  const validPass = import.meta.env.AUTH_PASSWORD ?? process.env.AUTH_PASSWORD;

  if (!validPass || password !== validPass) {
    return unauthorized();
  }

  return next();
});

function unauthorized() {
  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="GovTech Guy", charset="UTF-8"' },
  });
}
