import { DatePipe, NgClass, NgStyle, TitleCasePipe } from "@angular/common";
import { Component, Input, OnInit } from "@angular/core";
import { PicSnap } from "../models/pic-snap.model";

@Component({
    selector: "app-pic-snap",
    imports: [NgStyle, NgClass, TitleCasePipe, DatePipe],
    templateUrl: "./pic-snap.component.html",
    styleUrl: "./pic-snap.component.scss",
})
export class PicSnapComponent implements OnInit {
    @Input() picSnap!: PicSnap;

    title!: string;
    imageUrl!: string;
    description!: string;
    createdAt!: Date;
    likes!: number;
    hasLiked!: boolean;
    likeButtonText!: string;

    ngOnInit(): void {
        this.hasLiked = false;
        this.likeButtonText = "Liker !";
    }

    onLike(): void {
        if (this.hasLiked) {
            this.unlike();
        } else {
            this.like();
        }
    }

    like(): void {
        this.picSnap.addLike();
        this.likeButtonText = "Retirer mon like !";
        this.hasLiked = !this.hasLiked;
    }

    unlike(): void {
        this.picSnap.removeLike();
        this.likeButtonText = "Liker !";
        this.hasLiked = !this.hasLiked;
    }
}
