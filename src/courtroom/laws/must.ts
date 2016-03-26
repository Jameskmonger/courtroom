import { Law } from './law';

export class MustLaw implements Law {

    private _mustFunction: (...args: any[]) => boolean;

    constructor (mustFunction: (...args: any[]) => boolean) {
        this._mustFunction = mustFunction;
    }

    public verdict(defendant: any): boolean {
        return this._mustFunction(defendant);
    }

    public getName(): string {
        return 'must';
    }

    public getDetails(): any {
        return {
            name: 'anonymous'
        };
    }

}
