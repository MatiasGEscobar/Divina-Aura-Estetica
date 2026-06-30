import styles from "./Services.module.css";

const services = [

{
title:"Limpieza Facial",
text:"Renová tu piel y devolvele su brillo natural.",
image:"/images/facial.jpg"
},

{
title:"Depilación Láser",
text:"Tecnología de última generación.",
image:"/images/laser.jpg"
},

{
title:"Tratamientos Corporales",
text:"Moldeá tu figura y mejorá tu bienestar.",
image:"/images/body.jpg"
},

{
title:"Diseño de Cejas",
text:"Una mirada perfecta hace la diferencia.",
image:"/images/cejas.jpg"
},

{
title:"Manicura",
text:"Uñas impecables para cualquier ocasión.",
image:"/images/manos.jpg"
}

];

const Services = () => {

return(

<section className={styles.services}>

<h2>Nuestros Servicios</h2>

<div className={styles.cards}>

{

services.map((service,index)=>(

<div className={styles.card} key={index}>

<img src={service.image}/>

<h3>{service.title}</h3>

<p>{service.text}</p>

<button>Ver más</button>

</div>

))

}

</div>

</section>

)

}

export default Services;