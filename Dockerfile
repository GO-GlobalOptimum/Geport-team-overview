FROM node:16 AS build
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
# 포트 80을 노출
EXPOSE 3000
# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]