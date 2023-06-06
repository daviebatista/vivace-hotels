
import styles from './styles.module.scss';

function Introduction ()    {
    return(
        <>
            <section className={styles.section}>
                <div className={styles.left}>
                    <h1 className={styles.title}>VIVACE</h1>
                    <p className={styles.subtitle}>
                        O Descanso Que Você Merece
                    </p>
                    <p className={styles.description}>
                        Tire suas férias com a agência de pousadas que atende a todos os gostos.
                    </p>
                    <button className={styles.button}>FAÇA SUA RESERVA</button>
                </div>
                <div className={styles.right}>
                    <div className={styles.nav}>
                        <div className={styles.links}>
                            <a href="" className={styles.anchors}>
                                <p>Sobre</p>
                            </a>
                            <a href="" className={styles.anchors}>
                                <p>Quartos</p>
                            </a>
                            <a href="" className={styles.anchors}>
                                <p>Contato</p>
                            </a>
                        </div>
                        <button className={styles.reservation}>Reservar</button>
                    </div>
                    <img src="../src/images/hotel-bar.jpg" alt="Coffee Lounge" className={styles.image} />
                </div>
            </section>
        </>
    )
}

export default Introduction