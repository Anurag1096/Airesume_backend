# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Enable pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install

COPY tsconfig.json ./
COPY src ./src

RUN pnpm run build

# ---------- Production Stage ----------
FROM node:20-alpine

WORKDIR /app

# Enable pnpm
RUN corepack enable
RUN corepack prepare pnpm@latest --activate

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --prod

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["node", "dist/index.js"]

