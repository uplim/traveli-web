# Traveli
“メモ帳以上、旅程表アプリ未満” の旅程管理アプリ  

URL: https://traveli-web.vercel.app
Storybook: https://traveli-dev.github.io/traveli-web/storybook

## 🔑 Requirements
- [Docker Desktop](https://www.docker.com/products/docker-desktop)

## 🛠️ Build and Setup
```sh
  # build
    docker compose build front
    docker compose up front
  # docker コンテナに入る (frontを起動した状態で別のターミナルから)
    docker compose exec front sh
  # create .env (.envファイルに、別途添付の環境変数をコピペしてください)
    cp .env.example .env
  # exit docker container
    exit
  # vscodeでエラーが出る場合は、下記コマンドを打ってください
  # copy modules to local (windowsでは管理者権限が必要です)
    docker cp traveli-web-front:/home/app/node_modules/ ./front/
```
以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:3000

## 💫 Start Node
```sh
  # 起動
    docker compose up front
  # 落とす
    docker compose down
```

## 📕 Start Storybook
```sh
  # 起動
  docker compose exec front yarn storybook
```
以下の URL にブラウザからアクセスできるか確認してください。
- http://localhost:6006

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
