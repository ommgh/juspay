const productsData = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    quantity: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    quantity: 37,
    amount: "$4,754.50",
  },
  {
    name: "Half Sleeve Shirt",
    price: "$39.99",
    quantity: 64,
    amount: "$2,559.36",
  },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    quantity: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

const ProductTable = () => (
  <div className="bg-card rounded-xl p-6 h-full flex flex-col">
    <h3 className="text-sm font-semibold text-foreground mb-6">
      Top Selling Products
    </h3>

    <div className="w-full overflow-x-auto">
      <table className="w-full text-sm text-left">
        <thead>
          <tr className="text-muted-foreground border-b border-border">
            <th className="font-normal pb-3 px-4 whitespace-nowrap">Name</th>
            <th className="font-normal pb-3 px-4 whitespace-nowrap">Price</th>
            <th className="font-normal pb-3 px-4 whitespace-nowrap">
              Quantity
            </th>
            <th className="font-normal pb-3 px-4 whitespace-nowrap">Amount</th>
          </tr>
        </thead>
        <tbody className="text-foreground">
          {productsData.map((product, i) => (
            <tr key={i} className="group hover:bg-muted/50 transition-colors">
              <td className="py-3 px-4 whitespace-nowrap">{product.name}</td>
              <td className="py-3 px-4 whitespace-nowrap">{product.price}</td>
              <td className="py-3 px-4 whitespace-nowrap">
                {product.quantity}
              </td>
              <td className="py-3 px-4 whitespace-nowrap">{product.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ProductTable;
