import styles from "./footer.module.css"
export default function Footer(){
    return(<div className={styles.conteiner}>
        
       
       
      
          
          <div className={styles.contact}>
            <div className={styles.contactChild}>
            <p>Contact</p>
            <p><i class="fa-regular fa-envelope"> </i>freddigonzalo17@gmail.com</p>
            <p><i class="fa-solid fa-location-dot"></i>Argentina</p>
            </div>
        <div className={styles.about}>
            <h6>About me</h6>
            <p>
            Soy un desarrollador web full stack apasionado por la creación de experiencias digitales. Mi enfoque abarca tanto el lado del cliente como del servidor, lo que me permite diseñar y construir aplicaciones web funcionales y atractivas. Siempre estoy buscando formas de mejorar y aprender nuevas tecnologías para ofrecer soluciones web eficientes y efectivas.
            </p>
        </div>
          </div>
          <div className={styles.iconCont}>
        <a className={styles.icon} href="https://www.linkedin.com/in/gonzalo-freddi-39866a252/"><i class="fa-brands fa-linkedin"> </i></a>
        <a className={styles.icon} href="https://github.com/gonzafreddi" target="_blank"><i class="fa-brands fa-github"></i></a>
        <a href="https://www.instagram.com/freddigonzalo/"target="_blank" className={styles.icon}><i class="fa-brands fa-instagram"></i></a>
       </div>
        <p>@Copyright Gonzalo Freddi 2023</p>
    </div>)
}