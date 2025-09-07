import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '강남 나눔 생태계 플랫폼',
  description: '품격있는 나눔으로 만드는 따뜻한 강남구를 위한 블록체인 기반 나눔 마켓플레이스',
  keywords: ['강남구', '복지', '나눔', '블록체인', 'NFT', '마켓플레이스', '사회적기업'],
  authors: [{ name: '박용환', email: 'sanoramyun8@gmail.com' }],
  openGraph: {
    title: '강남 나눔 생태계 플랫폼',
    description: '품격있는 나눔으로 만드는 따뜻한 강남구',
    type: 'website',
    locale: 'ko_KR',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}