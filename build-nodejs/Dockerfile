FROM node:11-alpine

COPY package*.json ./

# I don't know if everything is needed but it avoids any dependencies problem
RUN apk --no-cache add --virtual native-deps g++ gcc libgcc libstdc++ linux-headers autoconf automake make nasm python git
RUN npm install node-gyp -g
RUN npm install

COPY index.js ./
COPY shard.js ./
COPY utils/ ./utils/
COPY commands ./commands/

CMD ["npm", "start"]
