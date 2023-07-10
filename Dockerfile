FROM node:16 AS builder
COPY ./ /offensive-packaging.github.io
WORKDIR /offensive-packaging.github.io
RUN yarn install && yarn next build && yarn next export -o _build


FROM nginx:stable-alpine
ENV DEBIAN_FRONTEND noninteractive
COPY --from=builder /offensive-packaging.github.io/_build/ /usr/share/nginx/html/
