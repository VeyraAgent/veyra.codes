# veyra.codes — local containerized preview
# Build the static site with Node, serve it with nginx.
# Usage:
#   docker build -t veyra-codes .
#   docker run --rm -d -p 8080:80 --name veyra-codes veyra-codes
#   open http://localhost:8080

FROM node:22-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
