import { Component } from '@angular/core';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public title: string = "Component Communication";

  public employeeRecords: any = [
    {
      eName: "Kevin",
      eCity: "San Jose",
      eSalary: 120000
    },
    {
      eName: "Lisa",
      eCity: "Fremont",
      eSalary: 60000
    },
    {
      eName: "Alex",
      eCity: "Hayward",
      eSalary: 50000
    },
    {
      eName: "Lily",
      eCity: "Milpitals",
      eSalary: 100000000000
    }
  ];

  public getRecord() :void {
    console.log("sendRecord Event Emitted");
  }



}
