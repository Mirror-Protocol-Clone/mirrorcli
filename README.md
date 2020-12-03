# `mirrorcli` <!-- omit in toc -->

Command-line interface for Mirror Protocol on Terra.

## Table of Contents <!-- omit in toc -->

- [Installation](#installation)
- [Configuration](#configuration)
  - [Specifying LCD settings](#specifying-lcd-settings)
  - [Specifying Contracts](#specifying-contracts)
  - [Specifying the Assets](#specifying-the-assets)
  - [Specify the Network [IMPORTANT]](#specify-the-network-important)
- [Usage](#usage)
  - [Execute](#execute)
  - [Query](#query)
- [License](#license)

## Installation

**Requirements**

- Node.js 12+
- NPM
- [`terracli`](https://github.com/terra-project/core) in your path

`mirrorcli` can be installed off NPM.

```bash
$ npm install -g @mirror-protocol/mirrorcli
```

The entrypoint `mirrorcli` should then be available in your `path`:

<pre>
        <div align="left">
        <strong>$ mirrorcli</strong>

        Usage: mirrorcli [options] [command]

        Command-line interface for interacting with Mirror Protocol on Terra

        Options:
          -V, --version   output the version number
          -v,--verbose    Show verbose error logs
          -h, --help      display help for command

        Commands:
          exec|x          Execute a function on a smart contract
          query|q         Run a smart contract query function
          config|c        Access configuration settings
          help [command]  display help for command
        </div>
</pre>

## Configuration

On first launch, `mirrorcli` will generate a `~/.mirrorclirc.json` in your `$HOME` directory, which will be used in subsequent sessions to specify settings such as LCD provider, gas prices for fee estimation, as well as contract addresses. It will come pre-configured with the official contracts for the mainnet version of Mirror on its `columbus-4` setting.

The following instructions show you how to modify settings using the `tequila-0004` network by default:

`mirrorcli` will create a configuration file in your home directory: `$HOME/.mirrorclirc.json`.

### Specifying LCD settings

Each network config should define how to connect to the Terra blockchain via LCD parameters.

```js
{
  "networks": {
    "tequila-0004": {
      "lcd": {
        "chainId": "tequila-0004",
        "url": "https://tequila-lcd.terra.dev",
        "gasPrices": {
          "uluna": 0.15,
          "usdr": 0.1018,
          "uusd": 0.15,
          "ukrw": 178.05,
          "umnt": 431.6259
        },
        "gasAdjustment": 1.2
      },
      ...
    }
  }
}
```

### Specifying Contracts

Each network configuration should point to the correct Mirror core contract addresses.

```js
{
  "networks": {
    "tequila-0004": {
      ...
      "contracts": {
        "collector": "terra1v046ktavwzlyct5gh8ls767fh7hc4gxc95grxy",
        "community": "terra10qm80sfht0zhh3gaeej7sd4f92tswc44fn000q",
        "factory": "terra10l9xc9eyrpxd5tqjgy6uxrw7dd9cv897cw8wdr",
        "gov": "terra12r5ghc6ppewcdcs3hkewrz24ey6xl7mmpk478s",
        "mint": "terra1s9ehcjv0dqj2gsl72xrpp0ga5fql7fj7y3kq3w",
        "oracle": "terra1uvxhec74deupp47enh7z5pk55f3cvcz8nj4ww9",
        "staking": "terra1a06dgl27rhujjphsn4drl242ufws267qxypptx",
        "terraswap": "terra18qpjm4zkvqnpjpw0zn0tdr8gdzvt8au35v45xf"
      },
    ...
    }
  }
}
```

### Specifying the Assets

`mirrorcli` takes

### Specify the Network [IMPORTANT]

By default, `mirrorcli` will use the network setting for `columbus-4` configured in `~/.mirrorclirc.json`. You can direct `mirrorcli` to use a different network configuration by changing the value of the `MIRRORCLI_NETWORK` environment variable.

#### Example

```sh
MIRRORCLI_NETWORK=tequila-0004 mirrorcli x mint [deposit ...]
```

OR

```sh
export MIRRORCLI_NETWORK=tequila-0004
mirrorcli x mint [deposit ...]
```

## Usage

`mirrorcli` allows you to:

- [**execute**](#execute) state-changing functions on Mirror and Terraswap smart contracts
- [**query**](#query) readonly data endpoints on Mirror and Terraswap smart contracts

### Execute

**USAGE: `mirrorcli exec|x [options] [command]`**

```
Execute a function on a smart contract

Options:
  -h, --help              display help for command

Commands:
  collector [options]     Mirror Collector contract functions
  community [options]     Mirror Community contract functions
  factory [options]       Mirror Factory contract functions
  gov [options]           Mirror Gov contract functions
  mint [options]          Mirror Mint contract functions
  oracle [options]        Mirror Oracle contract functions
  staking [options]       Mirror Staking contract functions
  terraswap|ts [options]  Terraswap contract functions
  token [options]         Terraswap CW20 Token contract functions
  help [command]          display help for command
```

### Query

**USAGE: `mirrorcli query|q [options] [command]`**

```
Run a smart contract query function

Options:
  -h, --help              display help for command

Commands:
  collector [options]     Mirror Collector contract queries
  community [options]     Mirror Community contract queries
  factory [options]       Mirror Factory contract queries
  gov [options]           Mirror Gov contract queries
  mint [options]          Mirror Mint contract queries
  oracle [options]        Mirror Oracle contract queries
  staking [options]       Mirror Staking contract queries
  terraswap|ts [options]  Terraswap contract queries
  token [options]         Terraswap CW20 Token contract queries
  help [command]          display help for command
```

## License

This software is licensed under the Apache 2.0 license. Read more about it [here](./LICENSE).

© 2020 Mirror Protocol
