# 指定基础镜像
FROM node:14

# 设置工作目录
WORKDIR /app

# 复制项目文件到容器中
COPY . .

# 安装依赖
RUN npm install

# 构建项目
RUN npm run build

# 安装serve来运行构建后的项目
RUN npm install -g serve

# 设置运行时的命令
CMD ["serve", "-s", "build", "-l", "9000"]

# 暴露端口
EXPOSE 9000

