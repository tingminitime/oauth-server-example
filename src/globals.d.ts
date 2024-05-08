/**
 * @see https://www.totaltypescript.com/how-to-strongly-type-process-env
 */
namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    FASTIFY_PORT: string
  }
}
