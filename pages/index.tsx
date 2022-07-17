import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import data1 from '../public/data1.json';
import data2 from '../public/data2.json';
import data3 from '../public/data3.json';
import data4 from '../public/data4.json';
import data5 from '../public/data5.json';
import MotionSection from './components/MotionSection';


const Home: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title> Motions fo Onomatopoeia - NOMURA</title>
        <meta name="description" content="Animations - Multimedia Fundamentals" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Motions fo Onomatopoeia
        </h1>
        <MotionSection animationData={data1} title="スゥーーふぁー" width={100} height={100} top={70} left={245} />
        <div className={styles.indicate}>
          <MotionSection animationData={data2} title="パーン" width={105} height={105} top={90} left={140} isHalf />
          <MotionSection animationData={data3} title="ボヨーン" width={55} height={55} top={20} left={155} isHalf />
          <MotionSection animationData={data4} title="スポン" width={80} height={80} top={95} left={160} isHalf />
          <MotionSection animationData={data5} title="パリン" width={120} height={115} top={69} left={140} isHalf isRect />
        </div>
      </main>
    </div>
  )
}

export default Home