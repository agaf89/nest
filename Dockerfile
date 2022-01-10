FROM node:14-alpine
WORKDIR /src
ADD package.json package.json
RUN npm install
ADD . .
RUN npm run build
RUN npm prune --production
COPY --from=build /src/dist ./dist
CMD ["node", "./dist/main.js"]
