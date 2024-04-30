FROM node:22.0.0
WORKDIR /app
COPY package.json /app/
RUN npm install
COPY . .
CMD ["npm", "start"]