# Build Stage 1
# This build created a staging docker image
#
FROM node:16.13.2-alpine3.15 AS appbuild
WORKDIR /home/workday
COPY . ./
RUN npm install

# Build Stage 2
# This build takes the production build from staging build
#
FROM node:16.13.2-alpine3.15
WORKDIR /home/workday
COPY --from=appbuild /home/workday ./
EXPOSE 1111
ENTRYPOINT ["sh","-c","npm start"]