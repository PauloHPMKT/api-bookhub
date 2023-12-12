FROM node:16-alpine

USER node

WORKDIR /home/bookhub-api/app

COPY package*.json .

EXPOSE 3000

CMD ["sh", "-c", "npm install tail"] 
##"-f", "/dev/null"]