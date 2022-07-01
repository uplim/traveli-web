# Traveli
“メモ帳以上、旅程表アプリ未満” の旅程管理アプリ

## 🔑 Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## 🛠️ Build and Setup
```sh
  # build
    docker compose build front
    docker compose up front
  # enter in a docker container (frontを起動した状態で打ってください)
    docker compose exec sh
  # install packages
    yarn install
  # create .env
    cp .env.example .env
  # exit docker container
    exit
  # copy modules to local (windowsでは管理者権限が必要です)
    docker cp traveli-web-front:/home/app/node_modules/ ./front/
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
全て、traveli-web-frontを起動した状態で打ってください。  
```sh
  # enter in a docker container
    docker compose exec front sh 
  # install packages
    docker compose exec front yarn install
    docker cp traveli-web-front:/home/app/node_modules/ ./front/
  # formatting
    docker compose exec front yarn format
```
