FROM gcr.io/educative-exec-env/educative-ubuntu-microvm

RUN apt-get update && apt-get install -y docker.io
RUN apt-get install -y curl && apt-get install -y wget
RUN curl -L "https://github.com/docker/compose/releases/download/1.29.2/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose && chmod +x /usr/local/bin/docker-compose && ln -s /usr/local/bin/docker-compose /usr/bin/docker-compose

RUN git clone https://github.com/abiodunjames/docker-lessons.git 

ENTRYPOINT [ "service", "start", "docker" ]
