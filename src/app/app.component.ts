import { Component } from "@angular/core";
import { PicSnapComponent } from "./pic-snap/pic-snap.component";

@Component({
    selector: "app-root",
    imports: [PicSnapComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {}
