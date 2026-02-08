import { CardProps } from "../../interfaces";

export default function Card({ title, location, price, imageUrl }: CardProps) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white shadow-sm overflow-hidden">
      <div className="h-44 bg-gray-100">
        {imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={imageUrl} alt={title} className="h-full w-full object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-500">
            No image
          </div>
        )}
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold text-gray-900">{title}</h3>
        {location && <p className="mt-1 text-sm text-gray-600">{location}</p>}
        {price && <p className="mt-2 text-sm font-medium text-gray-900">{price}</p>}
      </div>
    </div>
  );
}
