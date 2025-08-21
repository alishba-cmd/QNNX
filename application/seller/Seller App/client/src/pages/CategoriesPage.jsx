

import SiteHeader from '../components/SiteHeader'
import SiteFooter from '../components/SiteFooter'
import TopCategories from '../components/TopCategories'
import { CATEGORIES } from '../constants/categories'
import { CUSTOM_SUBCATEGORIES } from '../constants/customSubcategories'
// using external image URLs to avoid SVG <image> embedding issues
const FALLBACK_IMG = 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=600&q=60'


export default function CategoriesPage(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-brand-900 via-brand-800 to-brand-700">
      <SiteHeader />
      <main className="max-w-6xl mx-auto px-6 py-12 space-y-8">
        <h1 className="text-2xl md:text-3xl text-white font-bold">Categories</h1>

        {/* Top highlighted categories carousel */}
        <TopCategories />

        {/* Full category grid */}
        <section className="bg-white/5 border border-white/10 rounded-2xl p-6">
          <h3 className="text-white font-semibold mb-4">All Categories</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {CATEGORIES.map((c, idx)=> {
              const imgMap = {
                'Groceries': 'https://plus.unsplash.com/premium_photo-1663039978847-63f7484bf701?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Z3JvY2VyaWVzfGVufDB8fDB8fHww',
                'Health & Beauty': 'https://images.unsplash.com/photo-1531751519425-e1fa9110434b?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80',
                "Men's Fashion": 'https://images.unsplash.com/photo-1543960713-7538001f7c7d?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1520975918751-9f7d6eb6d7b2?auto=format&fit=crop&w=1200&q=80',
                "Women's Fashion": 'https://plus.unsplash.com/premium_photo-1683121263622-664434494177?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1659265007230-1a26614a7e90?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1708295923533-53e60f78f1d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1708295923533-53e60f78f1d0?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZhc2hpb258ZW58MHx8MHx8fDA%3Dhttps://images.unsplash.com/photo-1552874869-5c39ec9288dc?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&w=1200&q=80',
                'Mother & Baby': 'https://images.unsplash.com/photo-1586954151244-599b59bc6e97?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1200&q=80',
                'Home & Lifestyle': 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80',
                'Electronic Devices': 'https://images.unsplash.com/photo-1603732551658-5fabbafa84eb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZWxlY3Ryb25pY3N8ZW58MHx8MHx8fDA%3D',
                'Electronic Accessories': 'https://plus.unsplash.com/premium_photo-1679079456083-9f288e224e96?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWxlY3Ryb25pYyUyMGRldmljZXN8ZW58MHx8MHx8fDA%3Dhttps://media.istockphoto.com/id/1267943701/photo/gamer-work-space-concept-top-view-a-gaming-gear-mouse-keyboard-joystick-headset-mobile.webp?a=1&b=1&s=612x612&w=0&k=20&c=MbGUDQQ0DOW4GAlwNm6H_VgEp5o22At4rKJYzlM7ki8=https://plus.unsplash.com/premium_photo-1681010317761-d0c42fdea9c0?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1517059224940-d4af9eec41e6?auto=format&fit=crop&w=1200&q=80',
                'TV & Home Appliances': 'https://images.unsplash.com/photo-1556185781-a47769abb7ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZSUyMGFwcGxpYW5jZXxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1519710164239-da123dc03ef4?auto=format&fit=crop&w=1200&q=80',
                'Sports & Outdoor': 'https://plus.unsplash.com/premium_photo-1684096758516-f2380c863d71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8b3V0ZG9vciUyMHNwb3J0c3xlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?auto=format&fit=crop&w=1200&q=80',
                'Watches, Bags & Jewellery': 'https://images.unsplash.com/photo-1597737175203-3b86b744081a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHdhdGNoJTJDYmFncyUyMGFuZCUyMGpld2VsbGVyeXxlbnwwfHwwfHx8MA%3D%3Dhttps://images.unsplash.com/photo-1526178619000-4f9f0d1d2a4a?auto=format&fit=crop&w=1200&q=80',
                'Automotive & Motorbike': 'https://images.unsplash.com/photo-1715372030036-d8f96cf1e8e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bW90b3JiaWtlJTJDJTIwY2FyfGVufDB8fDB8fHwwhttps://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=1200&q=80'
              }
              const img = imgMap[c] || FALLBACK_IMG
              return (
                <a key={idx} href={`/catalog?category=${encodeURIComponent(c)}`} className="block bg-white/6 rounded-lg p-0 overflow-hidden text-white hover:shadow-lg transition">
                  <div className="w-full h-28 rounded-t-md overflow-hidden">
                    <img
                      src={img}
                      alt={c}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e)=> { e.currentTarget.onerror = null; e.currentTarget.src = 'https://images.unsplash.com/photo-1493666438817-866a91353ca9?auto=format&fit=crop&w=600&q=60' }}
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-sm">{c}</div>
                  </div>
                </a>
              )
            })}
          </div>
        </section>

  {/* Featured subcategories removed per request */}
      </main>
      <SiteFooter />
    </div>
  )
}
