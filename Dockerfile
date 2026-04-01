FROM node:24-alpine AS builder
WORKDIR /app

# rub yarn install
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn/ .yarn
RUN yarn install --frozen-lockfile

# run build
COPY ./src src
COPY ./public public
COPY index.html index.html
COPY tsconfig.json tsconfig.json
COPY vite.config.mjs vite.config.mjs
RUN yarn build

# serve react app via nginx
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf

RUN chown -R nginx:nginx /var/cache/nginx /var/log/nginx /etc/nginx/conf.d && \
    touch /var/run/nginx.pid && \
    chown -R nginx:nginx /var/run/nginx.pid

USER nginx
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
