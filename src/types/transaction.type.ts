export interface ITransaction {
    sender: string;
    receiver: string;
}

export interface ITransactionInfo extends ITransaction {
    amount: string;
    status: number;
    date: string;
    remark: string;
}
