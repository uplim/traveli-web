# Traveli

## Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## Getting Started

### Init
```bash
 $ docker compose build front
```

### Install Packages
frontのコンテナを起動しておく必要があります。

```bash
 $ docker compose up front
 $ docker compose run --rm front yarn install
 # node_modulesをローカルにコピー
 $ docker cp traveli-web_front_1:/home/app/node_modules/ ./front/
```

### Start Node
```bash
 $ docker compose up front
```

### Formatting
pushする前に、自身でフォーマットしてください
```bash
 $ docker compose run --rm front yarn format
```

以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:3000
