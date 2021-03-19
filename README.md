## Truffle NextJS TypeScript

### Truffle Boilerplate with nextjs, typescript, tailwindcss, zeppelin, migrations, tests

## Install

```
git clone xxx
cd truffle xxx
yarn

or

npx truffle unbox xxx

// then create a .env file that looks like this:

TRUFFLE_MNEMONIC=candy maple cake sugar pudding cream honey rich smooth crumble sweet treat
GANACHE_MNEMONIC=grid voyage cream cry fence load stove sort grief fuel room save
TESTNET_MNEMONIC=a twelve word mnemonic phrase that works with some test network buddy
INFURA_API_KEY=yOUrInfURaKEy

```

## Run

```
yarn dev
```

## Test

```
truffle develop
yarn test
```

## Deploy

```
truffle develop
yarn deploy --network develop

// this just runs truffle deploy --reset --compile-all
```
