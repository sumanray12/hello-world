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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(appService) {
        this.appService = appService;
        this.appData = [];
    }
    EmployeeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.appService.getAppData().subscribe(function (data) { return _this.appData = data; });
        //this.appData = this.appService.getAppData();
    };
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: 'employee-list',
            templateUrl: './employee.component.html',
            styleUrls: ['./app.component.css'],
            providers: [app_service_1.AppService]
        }),
        __metadata("design:paramtypes", [app_service_1.AppService])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;
//# sourceMappingURL=employee.component.js.map