const configTemplate = {
  development: {
    baseUrl: "http://localhost:4000/"
  },
  production: {
    baseUrl: "https://sm.ms/api"
  }
};

export const buildConfig = configTemplate.development;
