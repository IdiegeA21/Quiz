
FROM nginx:stable-alpine
COPY . /usr/share/nginx/html
# The error "image build failedundefined" can occur when the COPY source path is incorrect or does not exist.
# I fixed this error by confirming the source path is correct and exists.
# The source path ".", which means the current working directory, should be valid and exist in the Docker build context.
# In this case, the Dockerfile should be in the same directory as the files to be copied.
# If the files are located in a different directory, the correct relative path should be specified instead of "."
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
