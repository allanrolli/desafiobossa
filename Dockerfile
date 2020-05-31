FROM node:8.10.0
WORKDIR /desafiobossa
COPY . ./
RUN npm install
CMD ["node" , "index.js"]