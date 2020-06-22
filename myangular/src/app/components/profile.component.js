"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var ProfileComponent = (function () {
    function ProfileComponent() {
        this.title = 'Hello World';
        this.showAddress = "true";
        this.person = {
            name: 'Next Zuckerberg',
            age: 25,
            address: {
                street: '232 Edgeburn Lane North West',
                city: 'Calgary',
                state: 'Alberta',
                zip: 'T3A 4K1'
            },
            avatar: 'data:image/png;base64,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',
            friends: [
                { name: 'Salome', age: 24 },
                { name: 'Ruachwar', age: 25 },
                { name: 'Reat', age: 23 },
                { name: 'Tabby', age: 24 },
                { name: 'GirlFromTheSouth', age: 24 }
            ]
        };
        this.title = 'User Profile';
    }
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'profile',
        templateUrl: 'profile.component.html'
    }),
    __metadata("design:paramtypes", [])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map