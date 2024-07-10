import { Build } from "./build";

export interface Favorite {
    id: number;
    userId: string;
    buildId: number;
    build: Build;
}
