# ---- Base ----
FROM node:20-alpine AS base

WORKDIR /app
RUN apk add --no-cache openssl
RUN npm install -g pnpm

# ---- Dependencies ----
FROM base AS dependencies

COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
COPY apps/api-gateway/package.json ./apps/api-gateway/
COPY apps/auth-service/package.json ./apps/auth-service/
COPY apps/merchant-service/package.json ./apps/merchant-service/
COPY apps/qr-service/package.json ./apps/qr-service/

RUN pnpm install --frozen-lockfile --shamefully-hoist

# ---- Build ----
FROM dependencies AS build

COPY apps/auth-service ./apps/auth-service

WORKDIR /app/apps/auth-service
RUN /app/node_modules/.bin/prisma generate --schema=./prisma/schema.prisma

WORKDIR /app
RUN /app/node_modules/.bin/tsc --project ./apps/auth-service/tsconfig.json

# ---- Production ----
FROM node:20-alpine AS production

WORKDIR /app
RUN apk add --no-cache openssl

COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/auth-service/dist ./dist
COPY --from=build /app/apps/auth-service/package.json ./
COPY --from=build /app/apps/auth-service/prisma ./prisma

EXPOSE 3001
CMD ["node", "dist/server.js"]