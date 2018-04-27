var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function ($routeProvider) {
    $routeProvider

        .when('/header', {
            templateUrl: 'header.html',
        })
        .when('/dashboard', {
            templateUrl: 'dashboard.html'
        })
        .when('/elements', {
            templateUrl: 'elements.html'
        })
        .when('/buttons', {
            templateUrl: 'buttons.html'
        })
        .when('/content-slider', {
            templateUrl: 'content-slider.html'
        })
        .when('/jquery-ui', {
            templateUrl: 'jquery-ui.html'
        })
        .when('/jqgrid', {
            templateUrl: 'jqgrid.html'
        })
        .when('/form-elements', {
            templateUrl: 'form-elements.html'
        })
        .when('/form-elements-2', {
            templateUrl: 'form-elements-2.html'
        })
        .when('/form-wizard', {
            templateUrl: 'form-wizard.html'
        })
        .when('/dropzone', {
            templateUrl: 'dropzone.html'
        })
        .when('/widgets', {
            templateUrl: 'widgets.html'
        })
        .when('/calendar', {
            templateUrl: 'calendar.html'
        })
        .when('/inbox', {
            templateUrl: 'inbox.html'
        })
        .when('/invoice', {
            templateUrl: 'invoice.html'
        })
        .when('/faq', {
            templateUrl: 'faq.html'
        })
        .when('/tables', {
            templateUrl: 'tables.html'
        })
        .when('/mobile-menu-2', {
            templateUrl: 'mobile-menu-2.html'
        })
        .when('/mobile-menu-1', {
            templateUrl: 'mobile-menu-1.html'
        })
        .when('/mobile-menu-3', {
            templateUrl: 'mobile-menu-3.html'
        })
        .when('/pricing', {
            templateUrl: 'pricing.html'
        })

        .when('/gallery', {
            templateUrl: 'gallery.html'
        })

        .when('/nestable-list', {
            templateUrl: 'nestable-list.html'
        })
        .when('/timeline', {
            templateUrl: 'timeline.html'
        })
        .when('/profile', {
            templateUrl: 'profile.html'
        })
        .when('/search', {
            templateUrl: 'search.html'
        })
        .when('/error-404', {
            templateUrl: 'error-404.html'
        })
        .when('/error-500', {
            templateUrl: 'error-500.html'
        })
        .when('/email', {
            templateUrl: 'email.html'
        })
        .when('/typography', {
            templateUrl: 'typography.html'
        })
        .when('/wysiwyg', {
            templateUrl: 'wysiwyg.html'
        })
        .when('/treeview', {
            templateUrl: 'treeview.html'
        })

        .when('/grid', {
            templateUrl: 'grid.html'
        })
        .when('/menu', {
            templateUrl: 'menu.html'
        })

        .when('/top-menu', {
            templateUrl: 'top-menu.html'
        })
        .when('/two-menu-1', {
            templateUrl: 'two-menu-1.html'
        })
        .when('/two-menu-2', {
            templateUrl: 'two-menu-2.html'
        });
});


