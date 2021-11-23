import styles from './Info.module.css';

export default function Info(props) {
  return (
    <div className={styles.infoContainer}>
    <div className={styles.info}>
      <div>{props.children}</div>
      <img src="/images/thinkingMan.png" alt='imagem com homem pensando'/>
    </div>
    </div>
  )
}
