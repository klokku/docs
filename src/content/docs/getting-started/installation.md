---
title: Installation
description: How to install Klokku
---

## How to install Klokku

1. Open the console.
2. Copy the following command:
    ```shell
    docker run -d --name klokku \
       -p 8181:8181 \
       -v storage:/app/storage \
       -e KLOKKU_HOST="http://localhost:8181" \
       ghcr.io/klokku/klokku:latest
    ```
3. Define your environmental variables (-e):
   - `KLOKKU_HOST`: the URL address of your Klokku application.
4. Run the command. 
