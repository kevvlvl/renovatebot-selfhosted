# RenovateBot Self-Hosted

In this repo, I'm using RenovateBot to perform dependency analysis on specific repositories of my github account.

## Prerequisites

- Create a github PAT/personal access token. I strongly recommend with minimal permissions (repo only) and with a short expiry time

## Setup with NPM

1. We install renovatebot using npm
2. I then drafted a configuration file 'config.js' based on RenovateBot's configurations documented on https://docs.renovatebot.com/self-hosted-configuration/
3. The following article was helpful in getting a head start with the config file: https://jerrynsh.com/12-tips-to-self-host-renovate-bot/
4. To test your config without any real changes, run: `renovate --dry-run=full`
5. When ready, run renovate: `renovate`

## Setup with the Docker image

1. Install the docker image using podman: `podman pull docker.io/renovate/renovate`
2. Run (from the same path of this repo):
```
$ podman run --rm \
-v "./config.js:/usr/src/app/config.js" \
-e RENOVATE_DRY_RUN=full \
renovate/renovate
```
