import { Injectable, OnInit } from "@angular/core";
import { PicSnap } from "../models/pic-snap.model";

@Injectable({
    providedIn: "root",
})
export class PicSnapsService {
    private picSnaps: PicSnap[] = [
        new PicSnap(
            "Mon premier snap",
            "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg",
            "blablabla",
            new Date(),
            4
        ).withLocation("Sur le canapé"),
        new PicSnap(
            "Mon deuxième snap",
            "https://cdn.pixabay.com/photo/2022/01/18/07/38/cat-6946505_1280.jpg",
            "blobloblo",
            new Date(),
            12
        ),
        new PicSnap(
            "Mon dernier snap",
            "https://cdn.pixabay.com/photo/2017/08/07/16/36/cat-2605502_960_720.jpg",
            "bliblibli",
            new Date(),
            7
        ),
    ];

    getPicSnaps(): PicSnap[] {
        return [...this.picSnaps];
    }
}
