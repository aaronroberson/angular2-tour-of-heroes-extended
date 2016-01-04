System.register(['angular2/core', 'angular2/http'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var HeroService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            HeroService = (function () {
                function HeroService(_http) {
                    var _this = this;
                    this._http = _http;
                    _http.get('app/heroes.json')
                        .subscribe(function (res) {
                        console.log(res.json());
                        _this.heroes = res.json();
                    });
                }
                HeroService.prototype.ngOnInit = function () {
                    this.fetchHeroes();
                };
                HeroService.prototype.getHero = function (id) {
                    return Promise.resolve(this.heroes)
                        .then(function (heroes) { return heroes.filter(function (hero) { return hero.id === id; })[0]; });
                };
                HeroService.prototype.getHeroes = function () {
                    return this.heroes;
                };
                HeroService.prototype.fetchHeroes = function () {
                    var _this = this;
                    this._http.get('app/heroes.json')
                        .subscribe(function (res) {
                        console.log(res.json());
                        _this.heroes = res.json();
                    });
                };
                HeroService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], HeroService);
                return HeroService;
            })();
            exports_1("HeroService", HeroService);
        }
    }
});
//# sourceMappingURL=hero.service.js.map