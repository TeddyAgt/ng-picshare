import { Component, OnInit } from "@angular/core";
import { PicSnap } from "./models/pic-snap.model";
import { PicSnapComponent } from "./pic-snap/pic-snap.component";

@Component({
    selector: "app-root",
    imports: [PicSnapComponent],
    templateUrl: "./app.component.html",
    styleUrl: "./app.component.scss",
})
export class AppComponent implements OnInit {
    mySnap!: PicSnap;
    myOtherSnap!: PicSnap;
    myLastSnap!: PicSnap;

    ngOnInit(): void {
        this.mySnap = new PicSnap(
            "Mon premier snap",
            "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
            "blablabla",
            new Date(),
            4
        );

        this.myOtherSnap = new PicSnap(
            "Mon deuxième snap",
            "https://cdn.pixabay.com/photo/2022/01/18/07/38/cat-6946505_1280.jpg",
            "blobloblo",
            new Date(),
            12
        );

        this.myLastSnap = new PicSnap(
            "Mon dernier snap",
            "https://cdn.pixabay.com/photo/2017/08/07/16/36/cat-2605502_960_720.jpg",
            "bliblibli",
            new Date(),
            7
        );
    }
}
