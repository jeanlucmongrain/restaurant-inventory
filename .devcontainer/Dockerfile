# https://hub.docker.com/r/drone/cli/tags
FROM drone/cli:1.7.0-alpine as drone
# https://hub.docker.com/_/node
# https://nodejs.org/en/about/releases/
FROM node:20.0.0-alpine3.17
RUN apk add git gcc linux-headers musl-dev docker-cli openssh-client
COPY github.pub /etc/ssh/ssh_known_hosts
COPY --from=drone /bin/drone /bin/drone
