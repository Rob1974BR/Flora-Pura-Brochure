import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = { title:'Flora Pura | Digital Rose Collection', description:'Discover the Flora Pura digital rose collection.' }
export const viewport: Viewport = { colorScheme:'light', themeColor:'#18392b', userScalable:true }
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}{process.env.NODE_ENV==='production' && <Analytics />}</body></html> }
