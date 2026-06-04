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
COPY apps/api-gateway/tsconfig.json ./apps/api-gateway/
RUN pnpm install --frozen-lockfile --shamefully-hoist

FROM dependencies AS build
COPY apps/api-gateway ./apps/api-gateway
WORKDIR /app
RUN /app/node_modules/.bin/tsc --project ./apps/api-gateway/tsconfig.json

FROM node:20-alpine AS production
WORKDIR /app
RUN apk add --no-cache openssl
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/apps/api-gateway/dist ./dist
COPY --from=build /app/apps/api-gateway/package.json ./
EXPOSE 3010
CMD ["node", "dist/server.js"]