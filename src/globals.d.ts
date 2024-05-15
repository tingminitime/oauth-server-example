/**
 * @see https://www.totaltypescript.com/how-to-strongly-type-process-env
 */
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    FASTIFY_PORT: string
    HOST: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    JWT_SECRET: string
    COOKIE_SECRET: string
  }
}
