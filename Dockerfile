FROM harbor.dev.wh.digitalchina.com/library/nginx:latest
RUN mkdir /usr/share/nginx/dist
RUN rm -rf /etc/nginx/nginc.conf
COPY ./nginx.conf /etc/nginx/nginx.conf
COPY dist/. /usr/share/nginx/dist
RUN /bin/cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime && echo 'Asia/Shanghai' >/etc/timezone
EXPOSE 80