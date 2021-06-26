export const environment = {
  production: false,
  apiURL: 'http://dev-test.sfd.gov.sa:8020/api',
  redirectUrl: 'http://dev-test.sfd.gov.sa:8020',
  deployUrl: '',

  keycloak: {
    issuer: 'https://iam.sfd.gov.sa/auth/',
    realm: 'sfdsso',
    clientId: 'lms-test',
    clientSecret: 'bf20498f-3663-4ee2-ac7f-83099029c15'
  }
};
