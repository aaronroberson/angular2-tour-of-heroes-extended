System.register(['angular2/platform/browser', 'angular2/router', 'angular2/http', './hero.service', './app.component'], function(exports_1) {
    var browser_1, router_1, http_1, hero_service_1, app_component_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (hero_service_1_1) {
                hero_service_1 = hero_service_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(app_component_1.AppComponent, [
                hero_service_1.HeroService,
                router_1.ROUTER_BINDINGS,
                http_1.HTTP_BINDINGS
            ]);
        }
    }
});
//# sourceMappingURL=boot.js.map