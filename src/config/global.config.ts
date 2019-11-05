const configTemplate = {
  development: {
    baseUrl: "https://sm.ms/api",
    state: 0
  },
  production: {
    baseUrl: "https://sm.ms/api",
    state: 1
  }
};

export const buildConfig = configTemplate.development;
