import { Component, OnInit } from "@angular/core";
import { HeaderComponent } from "./header/header.component";
import { PicSnap } from "./models/pic-snap.model";
import { PicSnapListComponent } from "./pic-snap-list/pic-snap-list.component";
import { PicSnapComponent } from "./pic-snap/pic-snap.component";

@Component({
    selector: "app-root",
    imports: [HeaderComponent, PicSnapListComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent {}
