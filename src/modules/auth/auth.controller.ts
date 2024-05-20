import type { FastifyReply, FastifyRequest } from 'fastify'
import app from '@/app.ts'

function google(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  app.GoogleOAuth2.generateAuthorizationUri(
    req,
    reply,
    (err, authorizationEndpoint) => {
      if (err)
        console.error(err)
      reply.redirect(authorizationEndpoint)
    },
  )
}

async function googleCallback(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    const { token } = await app.GoogleOAuth2.getAccessTokenFromAuthorizationCodeFlow(req)

    reply
      .setCookie('access_token', token.access_token)
      .redirect(`${process.env.FRONTEND_HOST}/member`)
  }
  catch (err) {
    console.error(err)
    reply.send({
      success: false,
      message: 'Failed to authenticate',
    })
  }
}

export const AuthController = {
  google,
  googleCallback,
}
