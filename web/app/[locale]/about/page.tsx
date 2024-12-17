'use client'
import { useTranslations } from 'next-intl'

export default function About() {
  const t = useTranslations('main')
  return <div>{t('gen')}</div>
}
