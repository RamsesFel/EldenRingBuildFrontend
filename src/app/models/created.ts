import { Build } from "./build";

export interface Created {
    id: number;
    userId: string;
    buildId: number;
    build: Build;
}
