'use client'

import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { useEffect, useState } from 'react'

import {
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaStar
} from 'react-icons/fa'

import Marquee from 'react-fast-marquee'
import toast, { Toaster } from 'react-hot-toast'

const drinks = [
  {
    title: 'Honey Latte',
    description: 'Smooth espresso blended with rich local honey.',
    price: '$6'
  },
  {
    title: 'Iced Breve',
    description: 'Creamy iced espresso favorite loved by locals.',
    price: '$7'
  },
  {
    title: 'Italian Soda',
    description: 'Refreshing handcrafted sparkling flavors.',
    price: '$5'
  },
  {
    title: 'Classic Drip',
    description: 'Fresh brewed Tennessee warmth in every cup.',
    price: '$4'
  }
]

const gallery = [
  '/images/gallery1.jpg',
  '/images/gallery2.jpg',
  '/images/gallery3.jpg',
  '/images/gallery4.jpg'
]

export default function Home() {

  const { scrollYProgress } = useScroll()

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  })

  useEffect(() => {

    const mouseMove = (e: MouseEvent) => {

      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })

    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }

  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success('Message sent ☕')
  }

  return (

    <main className="bg-[#FFF9F2] text-[#4B2E2B] overflow-hidden">

      <Toaster position="top-right" />

      {/* CUSTOM CURSOR */}
      <motion.div
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-[#C58B45] pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28
        }}
      />

      {/* SCROLL BAR */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#C58B45] origin-left z-[999]"
        style={{
          scaleX: scrollYProgress
        }}
      />

      {/* NAVBAR */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-white/60 border-b border-[#eadccd]">

        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

          <div className="flex items-center gap-4">

            <Image
              src="/images/logo.png"
              width={55}
              height={55}
              alt="Logo"
              className="rounded-full"
            />

            <h1 className="text-2xl font-bold">
              Worth Coffee Co
            </h1>

          </div>

          <div className="hidden md:flex gap-10 uppercase text-sm tracking-[3px]">

            <a href="#story" className="hover:text-[#C58B45] transition-all">
              Story
            </a>

            <a href="#menu" className="hover:text-[#C58B45] transition-all">
              Menu
            </a>

            <a href="#gallery" className="hover:text-[#C58B45] transition-all">
              Gallery
            </a>

            <a href="#contact" className="hover:text-[#C58B45] transition-all">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-32 px-6 md:px-20 overflow-hidden">

        {/* BACKGROUND BLOBS */}
        <div className="absolute inset-0 -z-10">

          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0]
            }}
            transition={{
              duration: 20,
              repeat: Infinity
            }}
            className="absolute top-0 left-0 w-96 h-96 bg-[#C58B45]/20 blur-[120px] rounded-full"
          />

          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0]
            }}
            transition={{
              duration: 18,
              repeat: Infinity
            }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#4B2E2B]/20 blur-[120px] rounded-full"
          />

        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >

            <p className="uppercase tracking-[6px] text-sm mb-6 text-[#C58B45]">
              Tennessee Coffee Culture
            </p>

            <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">

              Coffee Worth

              <span className="block text-[#C58B45]">
                Slowing Down For
              </span>

            </h1>

            <p className="text-lg leading-9 text-[#6f554d] mb-10 max-w-xl">

              Handcrafted coffee, warm smiles, and small-town Tennessee charm served daily in the heart of Dunlap.

            </p>

            <div className="flex flex-col md:flex-row gap-5">

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3
                }}
                href="#menu"
                className="px-8 py-5 bg-[#4B2E2B] text-white rounded-full shadow-2xl text-center"
              >
                Explore Menu
              </motion.a>

              <motion.a
                whileHover={{
                  scale: 1.05,
                  y: -3
                }}
                href="#contact"
                className="px-8 py-5 border border-[#4B2E2B] rounded-full text-center hover:bg-[#4B2E2B] hover:text-white transition-all"
              >
                Visit Us
              </motion.a>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <Image
              src="/images/hero.jpg"
              width={700}
              height={850}
              alt="Hero"
              className="rounded-[40px] shadow-2xl"
              priority
            />

            {/* FLOAT CARD */}
            <motion.div
              animate={{
                y: [0, -10, 0]
              }}
              transition={{
                repeat: Infinity,
                duration: 3
              }}
              className="absolute -bottom-10 -left-10 bg-white p-6 rounded-[30px] shadow-2xl"
            >

              <p className="uppercase tracking-[4px] text-sm text-[#C58B45] mb-3">
                Community Favorite
              </p>

              <div className="flex gap-1 text-yellow-500 mb-3">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>

              <h3 className="text-2xl font-bold">
                Rated 4.9 ★
              </h3>

            </motion.div>

          </motion.div>

        </div>

      </section>

      {/* STORY */}
      <section
        id="story"
        className="py-32 px-6 md:px-20 bg-[#f7efe5]"
      >

        <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">

          <motion.div
            whileInView={{
              opacity: 1,
              x: 0
            }}
            initial={{
              opacity: 0,
              x: -80
            }}
            transition={{
              duration: 1
            }}
          >

            <Image
              src="/images/story.jpg"
              width={700}
              height={700}
              alt="Story"
              className="rounded-[40px] shadow-2xl"
            />

          </motion.div>

          <motion.div
            whileInView={{
              opacity: 1,
              y: 0
            }}
            initial={{
              opacity: 0,
              y: 80
            }}
            transition={{
              duration: 1
            }}
          >

            <p className="uppercase tracking-[6px] text-sm mb-5 text-[#C58B45]">
              Our Story
            </p>

            <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
              Built From Community & Coffee
            </h2>

            <p className="text-lg leading-9 text-[#6f554d]">
              Worth Coffee Co began with a simple mission: create a welcoming place where every cup feels personal.
            </p>

          </motion.div>

        </div>

      </section>

      {/* MENU */}
      <section id="menu" className="py-32 px-6 md:px-20">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-sm mb-5 text-[#C58B45]">
            Signature Drinks
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Crafted Favorites
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">

          {drinks.map((drink, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -15,
                rotate: 1
              }}
              className="bg-white/80 backdrop-blur-xl rounded-[35px] p-8 shadow-2xl border border-white/40"
            >

              <h3 className="text-2xl font-bold mb-5">
                {drink.title}
              </h3>

              <p className="text-[#6f554d] leading-8 mb-8">
                {drink.description}
              </p>

              <span className="text-[#C58B45] text-2xl font-bold">
                {drink.price}
              </span>

            </motion.div>

          ))}

        </div>

      </section>

      {/* MARQUEE */}
      <section className="py-20 bg-[#4B2E2B] text-white">

        <Marquee speed={40} gradient={false}>

          <div className="flex gap-20 text-3xl font-semibold px-10">

            <span>☕ Best coffee stop in Tennessee</span>
            <span>☕ Worth Coffee Co feels like home</span>
            <span>☕ Crafted coffee & warm community</span>
            <span>☕ Sip • Relax • Repeat</span>

          </div>

        </Marquee>

      </section>

      {/* GALLERY */}
      <section
        id="gallery"
        className="py-32 px-6 md:px-20"
      >

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-sm mb-5 text-[#C58B45]">
            Gallery
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Morning Coffee Moments
          </h2>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto">

          {gallery.map((img, index) => (

            <motion.div
              key={index}
              whileHover={{
                scale: 1.05
              }}
              className="overflow-hidden rounded-[35px] shadow-2xl"
            >

              <Image
                src={img}
                width={600}
                height={600}
                alt="Gallery"
                className="h-[350px] object-cover w-full hover:scale-110 transition-all duration-700"
              />

            </motion.div>

          ))}

        </div>

      </section>

      {/* INSTAGRAM */}
      <section className="py-32 bg-[#f7efe5] text-center px-6 md:px-20">

        <FaInstagram className="text-7xl mx-auto mb-8 text-[#C58B45]" />

        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          Follow The Journey
        </h2>

        <p className="text-[#6f554d] text-lg mb-10 max-w-2xl mx-auto leading-9">

          Explore handcrafted drinks, local community moments,
          and Tennessee coffee culture through our Instagram.

        </p>

        <motion.a
          whileHover={{
            scale: 1.05,
            y: -3
          }}
          whileTap={{
            scale: 0.95
          }}
          href="https://www.instagram.com/worthcoffeeco/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-10 py-5 bg-[#4B2E2B] text-white rounded-full shadow-2xl hover:bg-[#C58B45] transition-all duration-300"
        >
          @worthcoffeeco
        </motion.a>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-32 px-6 md:px-20"
      >

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-sm mb-5 text-[#C58B45]">
            Visit Us
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Stop By For A Cup
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto mb-20">

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-[35px] p-10 shadow-2xl text-center"
          >
            <FaMapMarkerAlt className="text-4xl mx-auto mb-6 text-[#C58B45]" />

            <p className="text-[#6f554d]">
              16218 Rankin Ave,
              Dunlap, TN 37327
            </p>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-[35px] p-10 shadow-2xl text-center"
          >
            <FaPhoneAlt className="text-4xl mx-auto mb-6 text-[#C58B45]" />

            <a
              href="tel:+14237150748"
              className="text-[#6f554d] hover:text-[#C58B45] transition-all"
            >
              +1 (423) 715-0748
            </a>
          </motion.div>

          <motion.div
            whileHover={{ y: -10 }}
            className="bg-white rounded-[35px] p-10 shadow-2xl text-center"
          >
            <FaInstagram className="text-4xl mx-auto mb-6 text-[#C58B45]" />

            <a
              href="https://www.instagram.com/worthcoffeeco/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#6f554d] hover:text-[#C58B45] transition-all"
            >
              @worthcoffeeco
            </a>
          </motion.div>

        </div>

        {/* CONTACT FORM */}
        <form
          onSubmit={handleSubmit}
          className="max-w-3xl mx-auto grid gap-6"
        >

          <input
            type="text"
            placeholder="Full Name"
            required
            className="p-5 rounded-2xl border border-[#d8c4b1] bg-white"
          />

          <input
            type="email"
            placeholder="Email Address"
            required
            className="p-5 rounded-2xl border border-[#d8c4b1] bg-white"
          />

          <textarea
            rows={5}
            placeholder="Message"
            className="p-5 rounded-2xl border border-[#d8c4b1] bg-white"
          />

          <motion.button
            whileHover={{
              scale: 1.05
            }}
            whileTap={{
              scale: 0.95
            }}
            type="submit"
            className="bg-[#4B2E2B] text-white py-5 rounded-full shadow-2xl hover:bg-[#C58B45] transition-all duration-300"
          >
            Send Message
          </motion.button>

        </form>

      </section>

      {/* FOOTER */}
      <footer className="py-10 bg-[#4B2E2B] text-center text-white">

        © 2026 Worth Coffee Co — Crafted with warmth & community.

      </footer>

    </main>
  )
}