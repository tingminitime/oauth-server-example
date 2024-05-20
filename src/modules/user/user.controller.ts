import type { FastifyReply, FastifyRequest } from 'fastify'
import app from '@/app.ts'

async function getUserProfile(
  req: FastifyRequest,
  reply: FastifyReply,
) {
  try {
    if (req.cookies.access_token) {
      const userInfo = await app.GoogleOAuth2.userinfo(req.cookies.access_token)
      // console.log('[userInfo]', userInfo)

      reply.code(200).send({
        success: true,
        data: userInfo,
      })
    }
    else {
      reply.code(401).send({
        success: false,
        message: 'Unauthorized',
      })
    }
  }
  catch (err) {
    reply.send(err)
  }
}

export const UserController = {
  getUserProfile,
}
