import { DataTable } from "./_components/table";
import { columns } from "./_components/columns";

async function fetchOrders() {
  const response = await fetch("http://localhost:3000/api/orders", {
    cache: "no-cache",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch orders");
  }

  return response.json();
}

export default async function OrdersPage() {
  const orders = await fetchOrders();

  return (
    <main className="px-4 py-6 w-full max-w-7xl mx-auto">
      <DataTable columns={columns} data={orders} />
    </main>
  );
}
