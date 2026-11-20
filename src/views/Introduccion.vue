<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .row.justify-content-center.align-items-start.mb-2
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            p(data-aos="fade-left") La planificación de una explotación porcícola exige relacionar el sistema productivo, la genética, la capacidad de las instalaciones y las necesidades de los animales en cada etapa. Este componente desarrolla criterios para organizar el alojamiento, preparar las áreas de trabajo, conducir el proceso reproductivo y administrar la alimentación, la sanidad y la bioseguridad. Su propósito es apoyar decisiones técnicas que protejan el bienestar animal, la inocuidad y la continuidad de la producción.
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/intro/img1.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 El aprendizaje se orienta a resolver situaciones de granja mediante registros, cálculos y procedimientos verificables. Los ejemplos numéricos son didácticos; sus supuestos deben ajustarse a las condiciones reales de la explotación. Las decisiones clínicas, los tratamientos y las intervenciones que puedan causar dolor corresponden al personal competente y requieren orientación veterinaria.
          p.mb-3 Al finalizar el componente, el aprendiz podrá justificar la distribución de áreas y recursos, calcular necesidades básicas de capacidad y alimentación, programar acontecimientos reproductivos y proponer acciones correctivas sustentadas en indicadores. Cada decisión debe quedar vinculada con un responsable, una evidencia de cumplimiento y una fecha de seguimiento.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/intro/img2.png', alt='', style="width: 100%; height: auto;")
      p(data-aos="fade-left") El desarrollo de contenidos relaciona las características de los porcinos con la planificación de las instalaciones y el manejo de los animales, e integra la reproducción, la alimentación, la sanidad y la bioseguridad con criterios de bienestar, registros y ejemplos de cálculo para sustentar decisiones en la explotación. Los temas de reproducción, alimentación y manejo del lechón, y sanidad y bioseguridad porcina se desarrollan en un anexo del componente formativo.




</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
