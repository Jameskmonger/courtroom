export interface Law {
  verdict(defendant: any): boolean;
  getName(): string;
  getDetails(): any;
}
