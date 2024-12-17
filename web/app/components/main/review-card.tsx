import Image from 'next/image'
import { useLocale } from 'next-intl'

const PEOPLECOMMENTS = [
  {
    avatar: '/review-avatar/01.jpg',
    name: 'Michael Chen',
    rating: 5,
    comment: {
      en: 'The variety of styles is impressive! I especially love the anime style option. Quick and easy to use.',
      zh: '款式种类令人印象深刻！我特别喜欢动漫风格的选项。使用起来快速又简单。',
    },
  },
  {
    avatar: '/review-avatar/02.jpg',
    name: 'Sarah Johnson',
    rating: 4,
    comment: {
      en: 'Great tool for creating unique avatars. Would love to see more customization options in future updates.',
      zh: '这是一个很棒的工具，可以创建独特的头像。希望未来能有更多定制选项。',
    },
  },
  {
    avatar: '/review-avatar/03.jpg',
    name: 'David Rodriguez',
    rating: 5,
    comment: {
      en: 'Absolutely fantastic! The realistic style portraits are incredibly detailed. Worth every penny.',
      zh: '绝对棒极了！写实风格的肖像画非常逼真。物有所值。',
    },
  },
  {
    avatar: '/review-avatar/04.jpg',
    name: 'Emma Wilson',
    rating: 4,
    comment: {
      en: 'User-friendly interface and fast generation. The cartoon style is my personal favorite.',
      zh: '用户友好的界面和快速生成。卡通风格是我个人的最爱。',
    },
  },
  {
    avatar: '/review-avatar/05.jpg',
    name: 'Akiko Tanaka',
    rating: 5,
    comment: {
      en: 'Perfect for creating professional profile pictures. The quality exceeds my expectations!',
      zh: '非常适合创建专业头像。质量超出我的预期！',
    },
  },
  {
    avatar: '/review-avatar/06.jpg',
    name: 'James Miller',
    rating: 5,
    comment: {
      en: 'Incredible tool for both personal and business use. The AI technology behind this is truly remarkable.',
      zh: '非常适合个人和企业使用。背后的AI技术真是令人惊叹。',
    },
  },
]

export default function ReviewCard() {
  const locale = useLocale()
  return (
    <>
      {PEOPLECOMMENTS.map((person) => (
        <div
          key={person.name}
          className='bg-white dark:bg-zinc-900 p-6 rounded-xl shadow-md border border-gray-100 dark:border-zinc-800'
        >
          <div className='flex items-center gap-4 mb-4'>
            <div className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400'>
              <Image
                src={person.avatar}
                alt={person.name}
                width={48}
                height={48}
                className='rounded-full'
              />
            </div>
            <div>
              <h3 className='font-semibold text-gray-800 dark:text-gray-200'>
                {person.name}
              </h3>
              <div className='flex text-yellow-400'>
                {'★'.repeat(person.rating)}
              </div>
            </div>
          </div>
          <p className='text-gray-600 dark:text-gray-400'>
            {person.comment[locale as keyof typeof person.comment]}
          </p>
        </div>
      ))}
    </>
  )
}
