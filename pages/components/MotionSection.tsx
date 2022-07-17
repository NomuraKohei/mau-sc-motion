import styles from './MotionSection.module.css'
import Lottie from 'react-lottie';
import { useState } from 'react';

interface Props {
  animationData: any;
  title: string;
  width: number;
  height: number;
  top: number;
  left: number;
  isHalf?: boolean;
  isRect?: boolean;
}

const MotionSection: React.FC<Props> = props => {
  const [isTap, setIsTap] = useState(false)
  const [stop, setStop] = useState(true);

  const clickHandler = () => {
    setStop(false)
    setIsTap(true)
  }

  const onHoverHandler = () => {

    setIsTap(true)
  }

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: props.animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <section>
      <h2 className={styles.motionTitle}>{props.title}</h2>
      <div className={props.isHalf ? styles.lottieHalf : styles.lottie}>
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isStopped={stop}
          isClickToPauseDisabled
        />
        <button onClick={clickHandler} aria-label={`${props.title}のアニメーションを動かす`} onMouseOver={clickHandler} onMouseLeave={() => setStop(true)} className={props.isRect ? isTap ? `${styles.lottieButton} ${styles.lottieButtonRectangle}` : `${styles.lottieButton} ${styles.lottieButtonRectangle} ${styles.lottieButtonShow}` : isTap ? styles.lottieButton : `${styles.lottieButton} ${styles.lottieButtonShow}`} style={{ width: props.width, height: props.height, top: props.top, left: props.left }} >{isTap ? '' : 'TAP or HOVER'}</button>
      </div>
    </section>
  )
}

export default MotionSection
