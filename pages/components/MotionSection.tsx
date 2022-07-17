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
  const [stop, setStop] = useState(true);

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
      <h2>{props.title}</h2>
      <div className={props.isHalf ? styles.lottieHalf : styles.lottie}>
        <Lottie
          options={defaultOptions}
          height="100%"
          width="100%"
          isStopped={stop}
          isClickToPauseDisabled
          ariaRole={''}
        />
        <button onMouseOver={() => setStop(false)} onMouseLeave={() => setStop(true)} className={props.isRect ? `${styles.lottieButton} ${styles.lottieButtonRectangle}` : styles.lottieButton} style={{ width: props.width, height: props.height, top: props.top, left: props.left }}></button>
      </div>
    </section>
  )
}

export default MotionSection
