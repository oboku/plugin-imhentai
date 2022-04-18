## Install dependencies

- `npx lerna bootstrap`
- `npx lerna add foo --scope=bar [--dev]`

## Update / check dependencies

- `npx lerna exec --no-bail "pwd && npm outdated"` # packages
- `npm outdated` # root

## Publish

- `npx lerna publish`
