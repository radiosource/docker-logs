FROM node:latest as build

COPY package.json .
COPY index.js .
COPY console.js .
COPY app_console app_console
COPY config config

RUN npm install modclean -g
RUN npm install
RUN modclean -r
#RUN npm run fake


FROM node:alpine
RUN mkdir /var/www
WORKDIR "/var/www"
COPY --from=build app_console app_console
COPY --from=build config config
COPY --from=build node_modules node_modules
COPY --from=build package.json package.json
COPY index.js .
COPY console.js .

CMD npm run fake
