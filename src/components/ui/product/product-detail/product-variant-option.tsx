import { ProductVariant } from '@/types/product'
import clsx from 'clsx'

interface IProductVariantSelector {
  variantTypes: ProductVariant[]
  selectVariants: Record<string, string>
  onSelectVariant: (variantId: string, option: string) => void
}

export default function ProductVariantSelector({
  variantTypes,
  selectVariants,
  onSelectVariant,
}: Readonly<IProductVariantSelector>) {
  return (
    <>
      {variantTypes.map((variant) => (
        <div key={variant.id}>
          <h3 className="font-semibold mb-2">{variant.name}</h3>
          <div className="flex gap-3 flex-wrap">
            {variant.options.map((option) => (
              <button
                key={option}
                type="button"
                className={clsx(
                  'px-4 py-2 border rounded-lg text-sm transition-colors duration-200',
                  selectVariants[variant.id] === option
                    ? 'bg-black text-white'
                    : 'hover:ring hover:ring-gray-400',
                )}
                onClick={() => onSelectVariant(variant.id, option)}
              >
                {option.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}
