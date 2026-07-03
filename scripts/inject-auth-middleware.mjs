import { writeFileSync, mkdirSync, readFileSync } from 'fs';
import { join } from 'path';

const VERCEL_OUTPUT = '.vercel/output';
const MIDDLEWARE_DIR = join(VERCEL_OUTPUT, 'functions/_middleware.func');

mkdirSync(MIDDLEWARE_DIR, { recursive: true });

writeFileSync(join(MIDDLEWARE_DIR, 'index.js'), `
export default async function middleware(request) {
  const authHeader = request.headers.get('Authorization');

  if (!authHeader || !authHeader.startsWith('Basic ')) {
    return unauthorized();
  }

  const decoded = atob(authHeader.slice(6));
  const colonIndex = decoded.indexOf(':');
  const password = decoded.slice(colonIndex + 1);
  const validPass = process.env.AUTH_PASSWORD;

  if (!validPass || password !== validPass) {
    return unauthorized();
  }
}

function unauthorized() {
  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="GovTech Guy", charset="UTF-8"' },
  });
}
`);

writeFileSync(join(MIDDLEWARE_DIR, '.vc-config.json'), JSON.stringify({
  runtime: 'edge',
  entrypoint: 'index.js',
}));

const configPath = join(VERCEL_OUTPUT, 'config.json');
const config = JSON.parse(readFileSync(configPath, 'utf8'));

config.routes.unshift({
  src: '/(.*)',
  middlewarePath: '_middleware',
  continue: true,
});

writeFileSync(configPath, JSON.stringify(config, null, '\t'));

console.log('✅ Auth middleware injected into Vercel output');
