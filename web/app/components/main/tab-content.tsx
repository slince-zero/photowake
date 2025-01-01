import WidgetSelector from './widget-selector'
import { WIDGET_PATHS, STYLE_OPTIONS, ACCESSORIES_OPTIONS } from '@/app/constants/avatar-config'
import { SelectedWidgets } from '@/app/types/avatar'

interface TabContentProps {
  activeTab: string
  selectedWidgets: SelectedWidgets
  onWidgetSelect: (type: string, path: string) => void
  onWidgetClear: (type: string) => void
}

export default function TabContent({
  activeTab,
  selectedWidgets,
  onWidgetSelect,
  onWidgetClear,
}: TabContentProps) {
  if (activeTab === 'Style') {
    return (
      <div className='space-y-6'>
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
          {STYLE_OPTIONS.map((style) => (
            <button
              key={style}
              className='px-4 py-2 rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
            >
              {style}
            </button>
          ))}
        </div>
      </div>
    )
  }

  if (activeTab === 'Accessories') {
    return (
      <div className='space-y-6'>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Glasses
          </label>
          <div className='grid grid-cols-2 gap-2'>
            {ACCESSORIES_OPTIONS.glasses.map((type) => (
              <button
                key={type}
                className='px-3 py-2 text-sm rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        <div className='space-y-2'>
          <label className='text-sm text-gray-600 dark:text-gray-400'>
            Other
          </label>
          <div className='grid grid-cols-2 gap-2'>
            {ACCESSORIES_OPTIONS.other.map((item) => (
              <button
                key={item}
                className='px-3 py-2 text-sm rounded-lg bg-purple-50 dark:bg-zinc-800 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-zinc-700 transition-colors'
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // Handle widget tabs (Face, Eyes, Eyebrows, etc.)
  const widgetPaths = WIDGET_PATHS[activeTab.toLowerCase() as keyof typeof WIDGET_PATHS]
  if (!widgetPaths) return null

  const paths = Array.isArray(widgetPaths) ? widgetPaths : [widgetPaths]

  return (
    <div className='space-y-6'>
      <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
        {paths.map((path) => (
          <WidgetSelector
            key={path}
            src={path}
            alt={activeTab}
            type={activeTab.toLowerCase()}
            selectedPath={selectedWidgets[activeTab.toLowerCase()]}
            onSelect={onWidgetSelect}
            onClear={onWidgetClear}
          />
        ))}
      </div>
    </div>
  )
} 