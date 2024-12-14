export class PicSnap {
    location?: string;

    constructor(
        public title: string,
        public imageUrl: string,
        public description: string,
        public createdAt: Date,
        public likes: number
    ) {}

    addLike(): void {
        this.likes++;
    }

    removeLike(): void {
        this.likes--;
    }

    setLocation(location: string): void {
        this.location = location;
    }

    withLocation(location: string): PicSnap {
        this.setLocation(location);
        return this;
    }
}
