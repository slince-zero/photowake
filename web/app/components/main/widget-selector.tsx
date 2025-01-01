import Image from 'next/image'
import { X } from 'lucide-react'

interface WidgetSelectorProps {
  src: string
  alt: string
  type: string
  selectedPath?: string
  onSelect: (type: string, path: string) => void
  onClear: (type: string) => void
}

export default function WidgetSelector({
  src,
  alt,
  type,
  selectedPath,
  onSelect,
  onClear,
}: WidgetSelectorProps) {
  const isSelected = selectedPath === src

  return (
    <div className='relative group'>
      <Image
        src={src}
        alt={alt}
        width={100}
        height={100}
        className={`cursor-pointer rounded-lg p-2 ${
          isSelected
            ? 'bg-purple-100 dark:bg-purple-900'
            : 'hover:bg-purple-50 dark:hover:bg-purple-950'
        }`}
        onClick={() => onSelect(type, src)}
      />
      {isSelected && (
        <button
          onClick={() => onClear(type)}
          className='absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white opacity-0 group-hover:opacity-100 transition-opacity'
        >
          <X size={14} />
        </button>
      )}
    </div>
  )
} 