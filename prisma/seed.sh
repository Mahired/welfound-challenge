# @TODO: remove this and rename _seed.ts to seed.ts once https://github.com/prisma/prisma/issues/5161
# has been resolved.
npx ts-node --compiler-options '{"module":"CommonJS"}' -r tsconfig-paths/register prisma/_seed.ts
