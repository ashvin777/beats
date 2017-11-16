export function routerConfig($stateProvider, $urlRouterProvider) {
  'ngInject';

  $stateProvider
    .state('home', {
      url: '/',
      component: 'homeComponent'
    });

  $urlRouterProvider.otherwise('/');
}
