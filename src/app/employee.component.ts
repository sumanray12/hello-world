import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'employee-list',
    template: `<div>
                    <div *ngFor="let data of appData">
                        <p>{{data.id}}. {{data.name}}</p>
                    </div>
                </div>`,
    styleUrls: ['./app.component.css'],
    providers: [AppService]
})
export class EmployeeComponent implements OnInit {
    private appData: any;

    constructor(private appService: AppService) {
        this.appData = [];
    }

    ngOnInit() {
        this.appService.getAppData().subscribe(data => this.appData = data);
    }

}