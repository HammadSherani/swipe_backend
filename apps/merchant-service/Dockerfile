FROM node:20-alpine AS base
WORKDIR /app
RUN apk add --no-cache openssl
RUN npm install -g pnpm

FROM base AS dependencies
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api-gateway/package.json ./apps/api-gateway/
COPY apps/auth-service/package.json ./apps/auth-service/
COPY apps/merchant-service/package.json ./apps/merchant-service/
COPY apps/qr-service/package.json ./apps/qr-service/
RUN pnpm install --frozen-lockfile --shamefully-hoist

FROM dependencies AS build
COPY apps/merchant-service ./apps/merchant-service
WORKDIR /app/apps/merchant-service
RUN /app/node_modules/.bin/prisma generate --schema=./prisma/schema.prisma
WORKDIR /app
RUN /app/node_modules/.bin/tsc --project ./apps/merchant-service/tsconfig.json

FROM node:20-alpine AS production
WORKDIR /app
RUN apk add --no-cache openssl
COPY --from=build /app/apps/merchant-service/dist ./dist
COPY --from=build /app/apps/merchant-service/node_modules ./node_modules
COPY --from=build /app/apps/merchant-service/package.json ./
COPY --from=build /app/apps/merchant-service/prisma ./prisma
EXPOSE 3002
CMD ["node", "dist/server.js"]