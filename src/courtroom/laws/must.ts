import { Law } from './law';

export class MustLaw implements Law {

    private _mustFunction: (...args: any[]) => boolean;

    constructor (mustFunction: (...args: any[]) => boolean) {
        this._mustFunction = mustFunction;
    }

    public verdict(defendant: any): boolean {
        this._mustFunction(defendant);
        return false;
    }

    public getName(): string {
        return 'must';
    }

    public getDetails(): any {
        return {};
    }

}
