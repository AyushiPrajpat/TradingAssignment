// components/PortfolioGroup.tsx
'use client'

interface Props {
  title: string
  values: {
    startMargin: string
    perOrder: string
    maxHolding: string
  }
}

export default function PortfolioGroup({ title, values }: Props) {
  return (
    <div className="bg-white border rounded-md p-4 space-y-2 shadow-sm">
      <h3 className="text-sm font-semibold text-gray-500">{title}</h3>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <p className="text-xs text-gray-500 mb-1">Start Margin</p>
          <input
            type="text"
            defaultValue={values.startMargin}
            className="w-full px-3 py-2 border border-gray-300  text-gray-700 rounded-md text-sm"
          />
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Per Order Value (Rule–001)</p>
          <input
            type="text"
            defaultValue={values.perOrder}
            className="w-full px-3 py-2 border border-gray-300  rounded-md text-sm text-gray-700"
          />
        </div>
        <div>
          <p className="text-xs text-gray-500 mb-1">Max Holding Count (Rule–002)</p>
          <input
            type="text"
            defaultValue={values.maxHolding}
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-700 text-sm"
          />
        </div>
      </div>
    </div>
  )
}
