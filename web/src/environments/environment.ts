// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiURL: 'http://localhost:8020/api',
  redirectUrl: 'http://localhost:4200',
  modulesSysURL: 'http://localhost:8020/api',
  deployUrl: '',

  keycloak: {
    issuer: 'https://iam.sfd.gov.sa/auth/',
    realm: 'sfdsso',
    clientId: 'lms-dev',
    clientSecret: '9871c513-a0a7-419a-9462-4058e3e27343'
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
