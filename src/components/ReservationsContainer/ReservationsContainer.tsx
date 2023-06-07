import Separator from '../Separator/Separator';
import styles from './styles.module.scss';

function ReservationsContainer ()    {
    return(
        <>
            <section className={styles.section}>
                <div className={styles.formDiv}>
                    <h1 className={styles.titleForm}>Entre em contato e faça sua reserva</h1>
                        <Separator bg={'#064635'} />
                        <form className={styles.form}>
                        <label className={styles.labels} htmlFor="name">Nome</label>
                        <input className={styles.inputs} type="text" id='name' name='name'/>
                        <label className={styles.labels} htmlFor="email">Email</label>
                        <input className={styles.inputs} type="text" id='email' name='email'/>
                        <span className={styles.span}>
                            <input type="radio" id="hills" name="unit" value="Hills" className={styles.radios} />
                            <label htmlFor="hills" className={styles.labels} >Hills</label>
                            <input type="radio" id="shores" name="unit" value="Shores" className={styles.radios} />
                            <label htmlFor="shores" className={styles.labels} >Shores</label>
                        </span>
                        <label className={styles.labels} htmlFor="message">Mensagem</label>
                        <input type="text" id='message' name='message' className={styles.message} />
                        <button className={styles.reservation}>Enviar</button>
                        </form>
                </div>
                <div className={styles.imageDiv}>
                    <img src="../src/images/hotel-lounge.jpg" alt="Hotel Lounge" className={styles.image} />
                </div>
            </section>
        </>
    )
}

export default ReservationsContainer