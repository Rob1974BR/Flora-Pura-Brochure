import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'
export const metadata: Metadata = { title:'Flora Pura | Premium Roses from Kenya', description:'Flora Pura digital rose collection — premium roses grown in Naivasha, Kenya.' }
export const viewport: Viewport = { colorScheme:'light', themeColor:'#111111', userScalable:true }
export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en"><body>{children}{process.env.NODE_ENV==='production' && <Analytics />}</body></html> }
