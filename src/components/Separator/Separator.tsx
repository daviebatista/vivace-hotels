import styles from './styles.module.scss';

function Separator  (props: any)  {
    const bg = props.bg
    return(
        <>
            <hr className={styles.separator} style={{backgroundColor: bg}}/>
        </>
    )
}

export default Separator