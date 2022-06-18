# Traveli
“メモ帳以上、旅程表アプリ未満” の旅程管理アプリ

## 🔑 Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## 🛠️ Build and Setup
```sh
  # build
    docker compose build front
  # install packages
    docker compose run --rm front yarn install
  # copy modules to local
    docker cp traveli-web_front_1:/home/app/node_modules/ ./front/
```

## 💫 Start Node
```sh
  # 起動
    docker compose up front
  # 落とす
    docker compose down front
```

以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:3000

## 🧸 Other Commands
```sh
  # enter in a docker container
    docker compose run --rm front sh
  # install packages
    docker compose run --rm front yarn install
    docker cp traveli-web_front_1:/home/app/node_modules/ ./front/
  # formatting
    docker compose run --rm front yarn format
```