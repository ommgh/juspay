export type OrderStatus =
  | "In Progress"
  | "Complete"
  | "Pending"
  | "Approved"
  | "Rejected";

export interface Orders {
  id: string;
  orderId: string;
  user: {
    name: string;
    avatar: string;
  };
  project: string;
  address: string;
  date: string;
  status: OrderStatus;
}
