export class Exchange {
    from: string;
    to: string;
    rate: number;
    dateRate: Date;
    amount: number;
    value: number;

    constructor(from: string, to: string, amount: number) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
}