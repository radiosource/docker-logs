FROM node:latest as build

COPY package.json .
COPY index.js .
COPY console.js .
COPY app app
COPY config config
COPY public public
COPY test test
ADD logs ./logs

RUN npm install modclean -g
RUN npm install
RUN modclean -r
RUN npm run test

FROM node:alpine
RUN mkdir /var/www
WORKDIR "/var/www"
COPY --from=build app app
COPY --from=build logs logs
COPY --from=build config config
COPY --from=build public public
COPY --from=build node_modules node_modules
COPY --from=build package.json package.json
COPY index.js .
COPY console.js .


EXPOSE 3000
ENV NODE_APP_INSTANCE=3000
CMD npm run start::watcher
CMD npm run start::server