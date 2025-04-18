import React from 'react';
import styles from './Hero.module.css';

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
        <div>
          <img
            className={styles["building-img"]}
            src="https://i.shgcdn.com/84d8d91d-2d2d-4fb2-bd72-bf2c170c9236/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
            alt="building"
             loading="lazy"
          />
        </div>
        <div className={styles.heroContent}>
          <h1 className={styles.header}>
            We make any <br />
            building smart.
          </h1>
          <p className={styles.description}>
            We help you to create healthy, smart and energy efficient buildings
            with the use of IoT technology. Transform all buildings into
            sustainable places. Unlock the power of smart technology to deliver
            energy efficiency and well-being.
          </p>
          <a
            href="https://mclimate.eu/#solutions"
            target="_blank"
            className={styles.button}
          >
            Discover solutions
          </a>
        </div>
      </section>

  )
}

export default Hero
