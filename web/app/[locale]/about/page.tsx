import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('LandingBody')
  return <div className='text-red-200'>{t('Generate Avatar')}</div>
}
