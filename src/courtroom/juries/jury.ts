export interface Jury {
  verdict(defendant: any): boolean;
  getName(): string;
  getDetails(): any;
}
