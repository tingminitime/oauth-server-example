import type { OAuth2Namespace } from '@fastify/oauth2'

declare module 'fastify' {
  interface FastifyInstance {
    GoogleOAuth2: OAuth2Namespace
  }
}
