import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';

@Component({
    selector: 'employee-details',
    template: `<div>
                    <div *ngFor="let data of appData">
                        <p>{{data.name}} resides in {{data.city}}</p>
                    </div>
                </div>`,
    styleUrls: ['./app.component.css'],
    providers: [AppService]
})
export class DetailsComponent implements OnInit {
    private appData: any;

    constructor(private appService: AppService) {
        this.appData = [];
    }

    ngOnInit() {
        this.appService.getAppData().subscribe(data => this.appData = data);
    }

}