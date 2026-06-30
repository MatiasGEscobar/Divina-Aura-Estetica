import styles from "./Features.module.css";

const Features = () => {
  return (
    <section className={styles.features}>

      <div className={styles.feature}>
        🎁
        <h3>Promociones</h3>
      </div>

      <div className={styles.feature}>
        📅
        <h3>Turnos Online</h3>
      </div>

      <div className={styles.feature}>
        ❤️
        <h3>Atención Personalizada</h3>
      </div>

      <div className={styles.feature}>
        🌿
        <h3>Ambiente Relajante</h3>
      </div>

    </section>
  );
};

export default Features;