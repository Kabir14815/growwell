import { useEffect } from 'react'

const BASE_TITLE = 'Growwell School - Best Primary School in Kharar, Mohali'
const BASE_DESC = 'Growwell School Kharar - Best CBSE primary school. Pre-Nursery to Class 8. Play-based learning, safe environment. Call +91 8360444258.'
const BASE_URL = 'https://growwellschool.in'

export default function SeoHead({ title, description, path = '/' }) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${BASE_TITLE}` : BASE_TITLE
    const fullDesc = description || BASE_DESC
    const fullUrl = path ? `${BASE_URL}${path}` : BASE_URL

    document.title = fullTitle

    const metaDesc = document.querySelector('meta[name="description"]')
    if (metaDesc) metaDesc.setAttribute('content', fullDesc)

    const ogTitle = document.querySelector('meta[property="og:title"]')
    if (ogTitle) ogTitle.setAttribute('content', fullTitle)
    const ogDesc = document.querySelector('meta[property="og:description"]')
    if (ogDesc) ogDesc.setAttribute('content', fullDesc)
    const ogUrl = document.querySelector('meta[property="og:url"]')
    if (ogUrl) ogUrl.setAttribute('content', fullUrl)
  }, [title, description, path])

  return null
}
