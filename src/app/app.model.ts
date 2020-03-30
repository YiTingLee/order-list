export interface Order {
  name: string;
  logo: string;
  status: {
    code: OrderCodeEnum;
    type: string;
  };
  date: string;
}

export enum OrderCodeEnum {
  Processing = 1,
  Success = 2,
  Cancelled = 3,
  Sent = 4
}
