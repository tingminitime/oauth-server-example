import { Type } from '@sinclair/typebox'
import type { DeepReadonly } from 'ts-essentials'

const responseOK = Type.Object({
  success: Type.Boolean(),
  data: Type.Object({
    email: Type.String(),
    email_verified: Type.Boolean(),
    family_name: Type.String(),
    given_name: Type.String(),
    locale: Type.String(),
    name: Type.String(),
    picture: Type.String(),
    sub: Type.String(),
  }),
})

export const UserResponseSchema = {
  ResponseOK: responseOK as DeepReadonly<typeof responseOK>,
}
