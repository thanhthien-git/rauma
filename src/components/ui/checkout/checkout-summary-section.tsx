export default function CheckoutSummary() {
  const SummaryRow = ({ label, amount, isTotal = false }: any) => (
    <div
      className={`flex justify-between items-center ${isTotal ? 'text-base' : 'text-sm text-gray-600'}`}
    >
      <span>{label}</span>
      <span className={isTotal ? 'text-black text-xl font-semibold' : ''}>{amount}₫</span>
    </div>
  )
  return (
    <div className="space-y-3 pt-4 border-t">
      <SummaryRow label="Merchandise Subtotal" amount="83.999" />
      <SummaryRow label="Shipping Subtotal" amount="36.100" />
      <div className="pt-3 border-t">
        <SummaryRow label="Total Payment:" amount="120.099" isTotal />
      </div>
    </div>
  )
}
