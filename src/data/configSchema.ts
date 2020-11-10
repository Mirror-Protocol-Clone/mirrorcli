export default {
  $schema: 'http://json-schema.org/draft-07/schema#',
  $ref: '#/definitions/MirrorCLIConfig',
  definitions: {
    AssetConfig: {
      title: 'AssetConfig',
      type: 'object',
      properties: {
        name: {
          type: 'string',
          title: 'name',
        },
        token: {
          type: 'string',
          title: 'token',
        },
        pair: {
          type: 'string',
          title: 'pair',
        },
        lpToken: {
          type: 'string',
          title: 'lpToken',
        },
      },
      required: ['lpToken', 'name', 'pair', 'token'],
    },
    MirrorCLIConfig: {
      title: 'MirrorCLIConfig',
      type: 'object',
      properties: {
        lcd: {
          type: 'object',
          properties: {
            chainId: {
              type: 'string',
              title: 'chainId',
            },
            url: {
              type: 'string',
              title: 'url',
            },
            gasPrices: {
              type: 'object',
              title: 'gasPrices',
              properties: {
                uusd: {
                  type: 'number',
                },
                umnt: {
                  type: 'number',
                },
                usdr: {
                  type: 'number',
                },
                uluna: {
                  type: 'number',
                },
                ukrw: {
                  type: 'number',
                },
              },
              additionalProperties: false,
            },
            gasAdjustment: {
              type: 'number',
              title: 'gasAdjustment',
            },
          },
          title: 'lcd',
        },
        contracts: {
          type: 'object',
          properties: {
            collector: {
              type: 'string',
              title: 'collector',
            },
            factory: {
              type: 'string',
              title: 'factory',
            },
            gov: {
              type: 'string',
              title: 'gov',
            },
            mint: {
              type: 'string',
              title: 'mint',
            },
            oracle: {
              type: 'string',
              title: 'oracle',
            },
            staking: {
              type: 'string',
              title: 'staking',
            },
            'mirror-token': {
              type: 'string',
              title: 'mirror-token',
            },
            'ts-factory': {
              type: 'string',
              title: 'ts-factory',
            },
            'ts-pair': {
              type: 'string',
              title: 'ts-pair',
            },
          },
          title: 'contracts',
        },
        assets: {
          type: 'object',
          additionalProperties: {
            $ref: '#/definitions/AssetConfig',
          },
          title: 'assets',
        },
      },
    },
  },
};