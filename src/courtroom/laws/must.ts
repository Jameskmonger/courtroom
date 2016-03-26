import { Law } from './law';

export class MustLaw implements Law {

    public verdict(defendant: any): boolean {
        return false;
    }

    public getName(): string {
        return 'must';
    }

    public getDetails(): any {
        return {};
    }
    
}
