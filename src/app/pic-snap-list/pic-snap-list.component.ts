import { Component, OnInit } from "@angular/core";
import { PicSnap } from "../models/pic-snap.model";
import { PicSnapComponent } from "../pic-snap/pic-snap.component";
import { PicSnapsService } from "../services/pic-snaps.service";

@Component({
    selector: "app-pic-snap-list",
    imports: [PicSnapComponent],
    templateUrl: "./pic-snap-list.component.html",
    styleUrl: "./pic-snap-list.component.scss",
})
export class PicSnapListComponent implements OnInit {
    picSnaps!: PicSnap[];

    constructor(private picSnapsService: PicSnapsService) {}

    ngOnInit(): void {
        this.picSnaps = this.picSnapsService.getPicSnaps();
    }
}
