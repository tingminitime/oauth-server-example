import type { DeepReadonly } from 'ts-essentials'

const helloSchema = {
  type: 'object',
  nullable: true,
  properties: {
    name: {
      type: 'string',
    },
  },
}

export const HelloSchema: DeepReadonly<typeof helloSchema> = helloSchema
