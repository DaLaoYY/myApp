export interface CustomerInfo {
  firstLastName: string;
  phone: number;
  rewardPoint: number;
}

export class Customer {
  constructor(
    public firstLastName: string,
    public phoneNumber: string,
    public point: number
  ) {}
}
