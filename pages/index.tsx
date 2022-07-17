import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import data1 from '../public/data1.json';
import data2 from '../public/data2.json';
import data3 from '../public/data3.json';
import data4 from '../public/data4.json';
import data5 from '../public/data5.json';
import data6 from '../public/data6.json';
import data7 from '../public/data7.json';
import scrollDownImg from '../public/scroll_down.svg'
import scrollUpperImg from '../public/scroll_upper.svg'
import MotionSection from './components/MotionSection';
import { useEffect, useRef, useState } from 'react';


const Home: NextPage = () => {

  const [isScrollUpper, SetIsScrollUpper] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null);

  const judgeScrollBottom = () => {

    const winScrollMaxY = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (window.scrollY >= winScrollMaxY - 10) {
      console.log('true')
      SetIsScrollUpper(true)
    } else {
      SetIsScrollUpper(false)
    }
  }

  useEffect(() => {
    if (!scrollRef) {
      return
    }

    window.addEventListener('scroll', judgeScrollBottom)

    return () => {
      window.removeEventListener('scroll', judgeScrollBottom)
    }
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Motions of Onomatopoeia</title>
        <meta name="description" content="擬音をアニメーションにしてみました。" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="Motions of Onomatopoeia" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="擬音をアニメーションにしてみました。" />
        <meta property="og:url" content="https://mau-sc-motion.vercel.app/" />
        <meta property="og:image" content="https://mau-sc-motion.vercel.app/ogp.jpg" />
        <meta property="og:site_name" content="Motions of Onomatopoeia" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Motions of Onomatopoeia" />
        <meta name="twitter:description" content="擬音をアニメーションにしてみました。" />
        <meta name="twitter:image" content="https://mau-sc-motion.vercel.app/ogp.jpg" />
        <meta name="twitter:url" content="https://mau-sc-motion.vercel.app/" />
      </Head>

      <main className={styles.main} ref={scrollRef}>
        <section className={styles.title}>
          <h1>
            Motions of Onomatopoeia
          </h1>
          <small>Created by NOMURA</small>
        </section>
        <MotionSection animationData={data1} title="スゥーーふぁーー" width={100} height={100} top={70} left={245} />
        <div className={styles.indicate}>
          <MotionSection animationData={data2} title="パーン" width={105} height={105} top={90} left={140} isHalf />
          <MotionSection animationData={data3} title="ボヨーン" width={55} height={55} top={20} left={155} isHalf />
          <MotionSection animationData={data4} title="スポン" width={80} height={80} top={95} left={160} isHalf />
          <MotionSection animationData={data5} title="パリン" width={120} height={115} top={69} left={140} isHalf isRect />
          <MotionSection animationData={data6} title="ガッチン" width={120} height={115} top={20} left={133} isHalf isRect />
          <MotionSection animationData={data7} title="ペチャッ" width={70} height={70} top={83} left={155} isHalf />
        </div>
        <div className={styles.scroll}>
          {
            isScrollUpper ?
              <Image src={scrollUpperImg} alt="スクロールアローの画像" width={48} height={25} />
              :
              <Image src={scrollDownImg} alt="スクロールアローの画像" width={48} height={25} />
          }
        </div>
      </main>
    </div>
  )
}

export default Home
