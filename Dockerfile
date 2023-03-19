###################################################################################################
# STAGE 0: Build Container
###################################################################################################
FROM node:current-alpine3.16 AS builder

WORKDIR /usr/src/app
COPY . .
RUN npm upgrade -g yarn
RUN yarn install
RUN yarn run build
###################################################################################################
# STAGE 1: Runtime Container
###################################################################################################
FROM nginx:1.17.1-alpine
COPY --from=builder /usr/src/app/nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/build /usr/share/nginx/html

EXPOSE 8081