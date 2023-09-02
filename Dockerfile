
FROM nginx:stable-alpine
COPY . /usr/share/nginx/html
# The error "image build failedundefined" can occur when the COPY source path is incorrect or does not exist.
# I fixed this error by confirming the source path is correct and exists.
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
