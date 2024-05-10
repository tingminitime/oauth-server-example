import { afterEach, describe, expect, it } from 'vitest'
import app from '../app.ts'

describe('say hello', () => {
  afterEach(() => {
    app.close()
  })

  it('get /api/hello', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/hello',
    })

    expect(response.statusCode).toBe(200)
    expect(response.json()).toEqual({
      success: true,
      message: 'Hello, stranger!',
    })
  })
})
