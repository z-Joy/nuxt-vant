FROM node:10.7

ENV APP_ROOT /home/admin/
ENV HOST 0.0.0.0

WORKDIR ${APP_ROOT}
ADD . ${APP_ROOT}

RUN \
cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime

RUN npm install
RUN npm run build