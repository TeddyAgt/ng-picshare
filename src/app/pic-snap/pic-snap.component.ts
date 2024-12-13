import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-pic-snap",
    imports: [],
    templateUrl: "./pic-snap.component.html",
    styleUrl: "./pic-snap.component.scss",
})
export class PicSnapComponent implements OnInit {
    title!: string;
    imageUrl!: string;
    description!: string;
    createdAt!: Date;
    likes!: number;

    ngOnInit(): void {
        this.title = "Mon premier snap";
        this.imageUrl =
            "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg";
        this.description = "blablabla";
        this.createdAt = new Date();
        this.likes = 0;
    }
}
