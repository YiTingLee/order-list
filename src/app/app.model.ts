export interface Order {
  name: string;
  logo: string;
  status: {
    code: number;
    type: string;
  };
  date: Date;
}
