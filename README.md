# Bun Sample Module

Bun開発環境のサンプルです

## 環境
Bun: latest

(2023-12-25 latest: Bun v1.0.20)

## 構成
```
├── .devcontainer
│   ├── devcontainer.json
│   ├── docker
│   │   └── bun
│   │       └── Dockerfile
│   └── docker-compose.yml
├── build
│   ├── index.d.ts
│   ├── index.js
│   └── packages
│       ├── calcs
│       │   ├── index.d.ts
│       │   └── index.js
│       └── clients
│           ├── index.d.ts
│           └── index.js
├── bunfig.toml
├── bun.lockb
├── package.json
├── README.md
├── src
│   ├── index.ts
│   ├── packages
│   │   ├── calcs
│   │   │   └── index.ts
│   │   └── clients
│   │       └── index.ts
│   └── tests
│       ├── calcs.test.ts
│       └── clients.test.ts
└── tsconfig.json

```

- .devcontainer
    - Bun環境コンテナ定義
- build
    - ビルドファイル
- bunfig.toml
    - Bun Configファイル
- bun.lockb
    - パッケージロックファイル
- package.json
    - パッケージ定義
- src
    - packages
        - サンプルモジュール開発ファイル
    - tests
        - テストファイル
- tsconfig.json
    - コンパイル設定

## セットアップ
VSCode > [Remote-Container]を使用。
1. VSCode起動 > 「左下の「><」押下後、「コンテナで再度開く」
2. `bun install`

## コマンド一覧
- bun run build = ビルドファイル作成
- bun run clear:build = ビルドファイル削除
- bun run test = テスト実行

## 参照
- [Bun公式ドキュメント](https://bun.sh/docs)
- [Bun Github](https://github.com/oven-sh/bun)

