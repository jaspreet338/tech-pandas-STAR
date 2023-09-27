ARG NODE_RELEASE=14
ARG ALPINE_RELEASE=3.14

# Previous lines in your Dockerfile
RUN npm run build

FROM node:${NODE_RELEASE}-alpine${ALPINE_RELEASE}
# Following lines in your Dockerfile



User
do you mean add this context to docer file
ChatGPT
Yes, exactly. By adding the ARG NODE_RELEASE=14 and ARG ALPINE_RELEASE=3.14 lines at the top of your Dockerfile, you are providing default values for the NODE_RELEASE and ALPINE_RELEASE arguments which are used later in the FROM instruction. This should resolve the "invalid reference format" error you were encountering during the build process.







FROM node:${NODE_RELEASE}-alpine${ALPINE_RELEASE} AS build


RUN echo "Node $(node -v) / NPM v$(npm -v)"

USER node
WORKDIR /home/node

COPY ./package*.json ./

RUN npm ci

RUN mkdir -p ./dist
COPY ./.babelrc .
COPY ./client ./client
COPY ./server ./server

RUN npm run build

FROM node:${NODE_RELEASE}-alpine${ALPINE_RELEASE}

LABEL maintainer="Jonathan Sharpe"

USER node
WORKDIR /home/node

COPY --from=build /home/node/package*.json ./

RUN npm ci --omit dev

COPY --from=build /home/node/dist ./dist

ENV PORT=80
EXPOSE 80

CMD [ "node", "dist/server.js" ]
