# FROM node as build
# WORKDIR /app/
# COPY ./frontend .
# RUN npm install 
# RUN npm run build
# RUN npm start


FROM nginx
WORKDIR /
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx.conf /etc/nginx/conf.d/

# COPY --from=build /app/build /usr/share/nginx/html
# RUN rm -rf /var/www/build
# COPY --from=build /app/build /var/www/build
# COPY /nginx/nginx.conf /etc/nginx/sites-enabled/default

# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
# CMD ["npm", "start"]