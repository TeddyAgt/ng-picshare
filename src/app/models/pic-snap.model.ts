import { LikeType } from "./like-type.type";

export class PicSnap {
    id!: string;
    location?: string;

    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public createdAt: Date,
        public likes: number
    ) {
        this.id = crypto.randomUUID().substring(0, 8);
    }

    addLike(): void {
        this.likes++;
    }

    removeLike(): void {
        this.likes--;
    }

    like(likeType: LikeType = "like"): void {
        if (likeType === "like") {
            this.addLike();
        } else {
            this.removeLike();
        }
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): PicSnap {
        this.setLocation(location);
        return this;
    }
}
