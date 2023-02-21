FROM node:18.14.1-alpine3.17

# 将本地代码复制到工作目录内
COPY ./ ./

# 安装依赖、安装pm2
RUN npm install && npm install pm2 -g && pm2 kill

# 启动服务
CMD pm2-runtime 'npm start'