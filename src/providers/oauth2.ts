import oauthPlugin from '@fastify/oauth2'
import type { FastifyInstance } from 'fastify'

export function registerGoogleOauth2Provider(app: FastifyInstance) {
  app.register(oauthPlugin, {
    name: 'GoogleOAuth2',
    credentials: {
      client: {
        id: process.env.GOOGLE_CLIENT_ID,
        secret: process.env.GOOGLE_CLIENT_SECRET,
      },
      auth: oauthPlugin.GOOGLE_CONFIGURATION,
    },
    startRedirectPath: '/auth/google/login',
    callbackUri: `${process.env.HOST}/auth/google/callback`,
  })
}
