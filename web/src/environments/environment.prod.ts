export const environment = {
  production: true,
  apiURL: '/pilot/api',
  redirectUrl: 'https://my.sfd.gov.sa/pilot',
  deployUrl: '/pilot',

  keycloak: {
    issuer: 'https://iam.sfd.gov.sa/auth/',
    realm: 'sfdsso',
    clientId: 'lms-prod',
    clientSecret: 'c0349495-69e8-4781-8d37-bb903044b5e9'
  }
};
