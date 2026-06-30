import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>

      <div className={styles["hero-left"]}>

        <span className={styles.badge}>
          ✨ Tu bienestar, nuestra prioridad
        </span>

        <h1>
          Resaltá tu belleza,
          <br />
          <span>descubrí tu mejor versión</span>
        </h1>

        <p>
          En Divina Aura contamos con tratamientos
          estéticos personalizados para que te sientas
          bien por dentro y por fuera.
        </p>

        <button className={styles["hero-btn"]}>
          Reservar turno →
        </button>

        <div className={styles["hero-icons"]}>

          <div>
            💎
            <span>Profesionales certificadas</span>
          </div>

          <div>
            🛡️
            <span>Productos Premium</span>
          </div>

          <div>
            ❤️
            <span>Resultados garantizados</span>
          </div>

        </div>

      </div>

      <div className={styles["hero-right"]}>

        <img
          src="/images/facial.jpg"
          alt="Tratamiento Facial"
        />

      </div>

    </section>
  );
};

export default Hero;