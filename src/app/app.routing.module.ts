import { NgModule } from "../../node_modules/@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EmployeeComponent } from "./employee.component";
import { DetailsComponent } from "./details.component";

const routes: Routes = [
    {path : "employees", component : EmployeeComponent},
    {path : "details",   component : DetailsComponent}
];

export const routingComponents = [EmployeeComponent,DetailsComponent];

@NgModule({
    imports : [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{}