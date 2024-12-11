import Image from 'next/image'

const PEOPLECOMMENTS = [
  {
    avatar: '/review-avatar/01.jpg',
    name: 'Michael Chen',
    rating: 5,
    comment:
      'The variety of styles is impressive! I especially love the anime style option. Quick and easy to use.',
  },
  {
    avatar: '/review-avatar/02.jpg',
    name: 'Sarah Johnson',
    rating: 4,
    comment:
      'Great tool for creating unique avatars. Would love to see more customization options in future updates.',
  },
  {
    avatar: '/review-avatar/03.jpg',
    name: 'David Rodriguez',
    rating: 5,
    comment:
      'Absolutely fantastic! The realistic style portraits are incredibly detailed. Worth every penny.',
  },
  {
    avatar: '/review-avatar/04.jpg',
    name: 'Emma Wilson',
    rating: 4,
    comment:
      'User-friendly interface and fast generation. The cartoon style is my personal favorite.',
  },
  {
    avatar: '/review-avatar/05.jpg',
    name: 'Akiko Tanaka',
    rating: 5,
    comment:
      'Perfect for creating professional profile pictures. The quality exceeds my expectations!',
  },
  {
    avatar: '/review-avatar/06.jpg',
    name: 'James Miller',
    rating: 5,
    comment:
      'Incredible tool for both personal and business use. The AI technology behind this is truly remarkable.',
  },
]

export default function ReviewCard() {
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
          <p className='text-gray-600 dark:text-gray-400'>{person.comment}</p>
        </div>
      ))}
    </>
  )
}
