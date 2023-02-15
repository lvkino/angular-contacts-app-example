export const environment = {
  production: true,
  appApi: {
    baseUrl: 'https://reqres.in/api'
  },
  socketConfig: {
    url: 'https://reqres.in/api',
    opts: {
      transports: ['websocket']
    }
  }
};
