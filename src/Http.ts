import { injectable } from "inversify";

export interface IHttp {
    get(url: string): number;
}


@injectable()
export class Http implements IHttp {
    get(url) {
        return 5;
    }
}