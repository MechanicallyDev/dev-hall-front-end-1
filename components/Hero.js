import styles from './Hero.module.css';

export default function Hero(props) {
  return (<div className={styles.hero}>
    {props.children}
  </div>)
}