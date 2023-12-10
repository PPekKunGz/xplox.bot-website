import Head from 'next/head'
import styles from '../styles/Home.module.css'

import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddModeratorIcon from '@mui/icons-material/AddModerator';

import Header from './components/header'
import Footer from './components/footer';
import Particle from './components/particle_effect'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>XPLOx🍒 บอทตัวน้อยๆ</title>
        <link rel="icon" href="/avatar.png" />
      </Head>

        {/* <!-- SEO --> */}
    <meta name="author" content="PPekKunGz Dev" />
    <meta name="keywords" content="" />

    <meta property="og:local" content="th_TH" />
    <meta property="og:url" content="https://xplox.vikoperation.studio/" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="XPLOx🍒#9610 | Website" />
    <meta property="og:description" content="" />
    <meta property="og:image" content="https://xplox.vikoperation.studio/avatar.png" />
    <meta property="og:url" content="https://xplox.vikoperation.studio/" />

      <Header />
      <Particle />

      {/* start --- sec 1 --- */}
      <div className={styles.sec_1}>
        <div className={styles.text__box}>
          <h1 className={styles.h1}>
            <span className={styles.text_1}>ยินดีตอนรับเข้าสู่บ้านของน้องนะคะ!</span>
            <span className={styles.text_2}>สามารถดูความสามารถของน้องได้ที่นี่เลยนะคะ!!</span>
            </h1>
          <div className={styles.xplox_prof}>
            <div className={styles.lines}></div>
            <div className={styles.imgBx}>
            <img src="/avatar.png" alt="XPLOx Profile Avatar" />
            </div>
          </div>
          <div className={styles.xplox_name}>XPLOx🍒 - น้องบอท</div>
          {/* <hr style={{width: "600px"}}/> */}
          <h3 className={styles.desc}>หนูชื่อ <span style={{
            color: "pink"
          }}>XPLOx</span> นะคะ ยินดีที่ได้รู้จักนะคะ <br/>
          หนูเป็นบอทที่สามารถสร้างความบรรเทิงหรือบรรเลงเพลงให้ทุกคนได้นะคะ <br/>
          หรือถ้าอยากจะรู้มากกว่านี้ว่ามีอะไรบ้าง สามารถเชิญหนูเข้าสู่เซิฟเวอร์ได้นะ!! 💕 </h3>
          {/* <hr style={{width: "350px"}}/> */}
          <div className={styles.xplox_btn}>
            <div className={styles.btn_invite}><a href="https://top.gg/bot/691256244194770944/invite" target="_blank" rel="noreferrer" ><GroupAddIcon/> เชิญน้องบอท</a></div>
            <div className={styles.btn_discord}><a href="https://discord.com/invite/vpU3nAEwhR" target="_blank" rel="noreferrer" ><AddModeratorIcon/> เซิฟเวอร์ของน้อง</a></div>
          </div>
        </div>
      </div>
      {/* end --- sec 1 --- */}
      <Footer />
    </div>
  )
}
