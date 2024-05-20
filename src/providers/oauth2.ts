import * as oauthPlugin from '@fastify/oauth2'
import type { FastifyInstance } from 'fastify'
import type { OAuth2Namespace } from '@fastify/oauth2'

declare module 'fastify' {
  interface FastifyInstance {
    GoogleOAuth2: OAuth2Namespace
  }
}

export function registerOAuth2Provider(app: FastifyInstance) {
  app.register(oauthPlugin.fastifyOauth2, {
    name: 'GoogleOAuth2',
    scope: ['profile', 'email'],
    credentials: {
      client: {
        id: process.env.GOOGLE_CLIENT_ID,
        secret: process.env.GOOGLE_CLIENT_SECRET,
      },
      // auth: oauthPlugin.fastifyOauth2.GOOGLE_CONFIGURATION,
    },
    startRedirectPath: '/auth/google/login',
    callbackUri: `${process.env.BACKEND_HOST}/api/auth/google/callback`,
    callbackUriParams: {
      access_type: 'offline',
    },
    discovery: {
      issuer: 'https://accounts.google.com',
    },
  })
}
