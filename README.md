```
// 将node服务打包成镜像
docker build -f ./Dockerfile -t chatgpt-service:latest .

// 运行容器
docker run --name chatgpt -p 3000:3000 -it -d chatgpt-service:latest
```