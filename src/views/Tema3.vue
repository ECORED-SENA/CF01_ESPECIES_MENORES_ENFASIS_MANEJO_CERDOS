<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Manejo según la etapa productiva
      .row.justify-content-center.align-items-start.mb-2
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            p(data-aos="fade-left") El manejo de los porcinos según la etapa productiva comprende el conjunto de actividades realizadas para garantizar que cada animal reciba atención acorde con su edad, condición fisiológica, función productiva y estado de bienestar. Un manejo adecuado permite organizar los grupos, disminuir lesiones, facilitar las labores del personal, mejorar los resultados productivos y mantener condiciones apropiadas de sanidad, bioseguridad y bienestar animal.
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t3/img1.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 En una explotación porcícola, el manejo no debe limitarse a realizar procedimientos sobre los animales. También implica evaluar diariamente su comportamiento, condición corporal, locomoción, respuesta ante las personas, consumo de agua y alimento, presencia de lesiones y adaptación al ambiente. La metodología del ICA para evaluar bienestar en porcinos incluye precisamente indicadores relacionados con hambre y sed, confort, facilidad de movimiento, lesiones, enfermedad, dolor inducido por el manejo, comportamiento y relación entre las personas y los animales.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t3/img2.png', alt='', style="width: 100%; height: auto;")
      p(data-aos="fade-left") Las actividades de manejo deben ser realizadas por personal capacitado, utilizando procedimientos que reduzcan el miedo, el dolor y el estrés evitable. La OMSA recomienda que los cuidadores conozcan el comportamiento de los cerdos, reconozcan signos de dolor, enfermedad o angustia y utilicen métodos de manejo que reduzcan movimientos bruscos, ruidos fuertes y situaciones que provoquen respuestas de miedo.
      Separador
      //- Inicio Tema3.1
      .row
        #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.1 Manejo de reproductores, hembras y lechones
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 El manejo debe diferenciarse de acuerdo con la función y etapa del animal. Los reproductores requieren condiciones que permitan conservar su capacidad reproductiva y mantener una adecuada condición corporal; las hembras deben recibir atención diferenciada durante reemplazo, gestación, maternidad y recuperación; y los lechones necesitan vigilancia más frecuente debido a su mayor vulnerabilidad durante los primeros días de vida y durante los cambios de etapa.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t3/img3.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 La OMSA establece que los animales de mayor riesgo, entre ellos las hembras en parto, los lechones recién nacidos, los animales recién destetados y los animales enfermos o lesionados, requieren evaluaciones más frecuentes.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de los reproductores
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La condición física, el comportamiento y el desempeño de los reproductores influyen en los resultados de la explotación. Su manejo debe conservar una condición corporal adecuada, prevenir lesiones y facilitar una interacción segura con los trabajadores.
      p(data-aos="fade-left") El seguimiento de los reproductores debe incluir estos aspectos:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-10
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Evaluación diaria")
                p.mb-4 Permite identificar cambios en apetito, comportamiento, locomoción, condición corporal, lesiones o alteraciones que puedan afectar su desempeño.
              .row(titulo="Condición corporal")
                p.mb-4 Debe vigilarse para evitar tanto animales excesivamente delgados como animales con exceso de condición, ya que ambos extremos pueden afectar la capacidad reproductiva y el bienestar.
              .row(titulo="Locomoción")
                p.mb-4 Debe evaluarse durante los desplazamientos para detectar cojeras, rigidez, dificultad para levantarse o alteraciones en las extremidades.
              .row(titulo="Comportamiento")
                p.mb-4 Cambios en actividad, interacción con otros animales o respuesta frente al cuidador pueden ser señales tempranas de dolor, enfermedad, miedo o alteraciones ambientales.
              .row(titulo="Manejo del macho reproductor")
                p.mb-4 Debe realizarse con precaución debido a su tamaño, fuerza y comportamiento. El personal debe utilizar instalaciones seguras y evitar situaciones que puedan generar enfrentamientos o accidentes.
              .row(titulo="Interacción con las personas")
                p.mb-4 El manejo debe basarse en movimientos tranquilos y previsibles. La respuesta del animal al cuidador constituye un indicador de bienestar.
              .row(titulo="Registro del desempeño")
                p.mb-4 Los eventos reproductivos y productivos deben documentarse para facilitar la toma de decisiones sobre permanencia, reemplazo o descarte.
      //- Fin Accordion 1
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de las hembras
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El manejo de las hembras debe ajustarse a su estado reproductivo y productivo. Las necesidades de una hembra de reemplazo difieren de las de una hembra gestante, próxima al parto o recién parida.
      p(data-aos="fade-left") Las prioridades de manejo se diferencian según el estado de las hembras:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido
            .py-3.py-md-4(titulo="Hembras de reemplazo")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta01_1.png', alt='')
                .col-md-6
                  h4 Hembras de reemplazo
                  p Requieren adaptación progresiva al sistema, evaluación de su comportamiento y condición corporal y selección de aquellas que presenten características adecuadas para incorporarse al grupo reproductivo.
            .py-3.py-md-4(titulo="Hembras gestantes")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta01_2.png', alt='')
                .col-md-6
                  h4 Hembras gestantes
                  p Deben manejarse evitando situaciones que generen golpes, caídas, competencia excesiva o estrés innecesario. El agrupamiento y la disponibilidad de espacio deben permitir que los animales puedan levantarse, acostarse y desplazarse adecuadamente.
            .py-3.py-md-4(titulo="Hembras próximas al parto")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta01_3.png', alt='')
                .col-md-6
                  h4 Hembras próximas al parto
                  p Requieren mayor frecuencia de seguimiento porque se encuentran en una etapa de mayor riesgo. Se debe vigilar su comportamiento, estado general y preparación para el parto.
            .py-3.py-md-4(titulo="Hembras lactantes")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta01_4.png', alt='')
                .col-md-6
                  h4 Hembras lactantes
                  p Requieren vigilancia de su estado corporal, comportamiento y capacidad para atender la camada. Las condiciones del área deben facilitar la interacción con los lechones y disminuir el riesgo de lesiones.
            .py-3.py-md-4(titulo="Hembras después del destete")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta01_5.png', alt='')
                .col-md-6
                  h4 Hembras después del destete
                  p Deben ser evaluadas durante la transición hacia la siguiente etapa reproductiva, registrando los eventos necesarios para la organización del sistema.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") El bienestar durante estas etapas debe evaluarse mediante indicadores relacionados con comportamiento, condición corporal, lesiones, locomoción, eficiencia reproductiva y estado sanitario. La OMSA reconoce estos indicadores como herramientas útiles para valorar objetivamente el bienestar de los cerdos.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de los lechones
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los lechones requieren un manejo especialmente cuidadoso porque durante las primeras etapas de vida presentan mayor susceptibilidad a cambios ambientales, competencia, lesiones y problemas de adaptación. El personal debe realizar evaluaciones frecuentes y actuar oportunamente ante cualquier alteración.
      p(data-aos="fade-left") La atención de los lechones debe priorizar las siguientes actividades:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta02_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Evaluación de la camada
                            p Permite verificar actividad, comportamiento, capacidad de desplazamiento, acceso a la madre y presencia de animales débiles o lesionados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta02_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Vigilancia de los lechones pequeños o débiles
                            p Estos animales requieren atención prioritaria porque pueden presentar mayor dificultad para competir y adaptarse al ambiente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta02_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Relación con la madre
                            p Debe comprobarse que los lechones tengan acceso a la cerda y que el ambiente reduzca el riesgo de aplastamiento y lesiones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta02_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Identificación temprana de alteraciones
                            p Diarrea, apatía, dificultad locomotora, lesiones, cambios de comportamiento o disminución de la actividad deben generar una evaluación oportuna.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta02_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Manejo durante el destete
                            p Constituye una transición importante y debe organizarse reduciendo el estrés y evitando mezclas innecesarias que aumenten los enfrentamientos entre animales.
            //- Fin Carrusel
            p(data-aos="fade-left") La OMSA recomienda especial vigilancia de los lechones recién nacidos y recién destetados debido a su mayor vulnerabilidad.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios de manejo humanitario
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") A continuación, se presenta un pódcast que explica los principios del manejo humanitario de los porcinos, los criterios que debe aplicar el personal para reducir el miedo, el dolor y el estrés evitable, y su relación con el bienestar animal y la productividad de la explotación.
      //- Inicio Podcast
      .container-fluid.tarjeta.tarjeta--blanca.px-0.mb-2(data-aos="fade-left")
        .row.g-0.align-items-stretch
          .col-12.col-lg-7.mb-3.mb-lg-0.d-flex
            .p-4.p-md-5.bg-custom-dark-teal.w-100.rounded-4.d-flex.align-items-center
              .row.g-3.align-items-center.w-100
                .col-md-5.text-center.mb-4.mb-md-0
                  img.img-fluid(src="@/assets/curso/temas/bg/podcast.svg" style="max-width: 200px;")
                .col-md-7.ps-md-4
                  h2.mb-3.fw-bold(style="color:#FFF") Pódcast
                  .tarjeta.bg-white.p-3.shadow-sm.border-lemon
                    h5.mb-3.fw-bold Principios de manejo humanitario de los porcinos
                    TarjetaAudio.color-primario(
                      texto="" 
                      :audio="podcast1"
                      @audio-hover="mostrarIndicadorTarjetaAudio = false"
                    )
                      .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
          .col-12.col-lg-5.d-flex.ps-lg-4
            figure.mb-0.w-100
              img.h-100.w-100(src='@/assets/curso/temas/t3/img4.png' alt='' style="object-fit: cover;")
      //- Fin Podcast
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Rutina de atención por prioridades
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La ronda de manejo debe diferenciar acciones inmediatas, acciones del turno y seguimiento programado. La falta de agua, la dificultad respiratoria marcada, la incapacidad para incorporarse, el sangrado persistente y el deterioro rápido requieren atención prioritaria y comunicación al responsable. Otros hallazgos, como pérdida progresiva de condición corporal o diferencias de crecimiento, exigen una investigación ordenada y ajustes documentados. La prioridad se establece por gravedad y riesgo, no únicamente por el valor productivo del animal.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t3/img3.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 50px; height: 50px; object-fit: contain;")
            p.mb-0 La adaptación de lechones destetados debe integrar acceso efectivo a bebida, alimento apropiado y estabilidad social. La presencia de equipos no asegura su utilización, por lo que debe comprobarse que su altura, funcionamiento y ubicación sean compatibles con el tamaño de los animales. Si un grupo reduce el consumo, primero se investigan agua, ambiente, disponibilidad de alimento y condición sanitaria. Incrementar la cantidad ofrecida sin identificar la causa puede aumentar el desperdicio.
      Separador
      //- Inicio Tema3.2
      .row
        #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.2 Movimientos de los animales dentro de las instalaciones
      p(data-aos="fade-left") El movimiento interno comprende el traslado de los animales entre corrales, salas o áreas de producción. Es una actividad rutinaria que puede convertirse en un factor de estrés y lesiones si no se realiza correctamente. Por ello, el desplazamiento debe planificarse antes de iniciar la actividad, verificando que la ruta esté libre de obstáculos y que las instalaciones se encuentren en condiciones adecuadas.
      p(data-aos="fade-left") El diseño de las instalaciones facilita el manejo cuando proporciona pasillos, puertas y corrales que permiten desplazamientos seguros. La OMSA señala que las instalaciones bien diseñadas y mantenidas contribuyen a un manejo adecuado de los cerdos.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Preparación antes del movimiento
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Antes de movilizar los animales se debe comprobar:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta03_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ruta de desplazamiento
                            p.text-center Debe estar despejada y libre de objetos que dificulten el avance.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta03_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Pisos
                            p.text-center Deben proporcionar estabilidad y disminuir el riesgo de resbalones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta03_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Puertas y compuertas
                            p.text-center Deben encontrarse abiertas o cerradas según la secuencia prevista y funcionar correctamente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta03_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Iluminación
                            p.text-center Debe evitar contrastes fuertes que puedan hacer que los animales se detengan o cambien bruscamente de dirección.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta03_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Personal
                            p.text-center Debe ser suficiente y conocer previamente la ruta y el procedimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta03_6.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Destino
                            p.text-center El corral o área receptora debe estar preparado antes de iniciar el traslado.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios para movilizar porcinos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La movilización debe seguir estos principios:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Utilizar el comportamiento natural")
                p.mb-4 Los cerdos tienden a seguir a otros individuos y responden a estímulos del entorno. El cuidador puede aprovechar estos comportamientos para facilitar el desplazamiento.
              .row(titulo="Evitar la presión excesiva")
                p.mb-4 Cuando los animales retroceden o se amontonan, aumentar la presión puede incrementar el miedo y dificultar todavía más el movimiento.
              .row(titulo="Dar espacio")
                p.mb-4 Permitir que los animales tengan tiempo para explorar y avanzar reduce la necesidad de utilizar fuerza.
          .col-lg-4.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img6.png", alt="").img400.m-auto
      //- Fin Accordion 1
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-4.order-1.order-lg-1.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t3/img7.png", alt="").img400.m-auto
          .col-lg-8.order-2.order-lg-2
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Trabajar con grupos manejables")
                p.mb-4 Los grupos deben organizarse de acuerdo con las características de los animales y la capacidad de las instalaciones.
              .row(titulo="Evitar cambios repentinos")
                p.mb-4 Las modificaciones bruscas en iluminación, ruido, presencia de personas o movimiento pueden generar respuestas de miedo.
              .row(titulo="Utilizar barreras de manejo")
                p.mb-4 Las tablas o paneles pueden orientar el desplazamiento y evitar que los animales se dispersen.
      //- Fin Accordion 2
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Animales con dificultades para movilizarse
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Un animal con cojera, debilidad, lesión o incapacidad para caminar debe recibir una valoración antes de ser trasladado.
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Los animales no ambulatorios no deben movilizarse de manera rutinaria. La OMSA establece que estos animales no deben desplazarse salvo cuando sea absolutamente necesario para tratamiento, recuperación o diagnóstico, y que, cuando sea indispensable moverlos, debe hacerse con métodos que no incrementen el dolor ni agraven las lesiones.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t3/img8.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 Por esta razón, arrastrar un cerdo por las extremidades, orejas o cola constituye una práctica inadecuada. En estos casos debe solicitarse la intervención del personal competente y, cuando corresponda, del médico veterinario.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Movimientos entre etapas productivas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los cambios de etapa deben realizarse de manera organizada y registrarse cuando corresponda. Los principales movimientos internos incluyen:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Maternidad → precebo
                            p.text-center Representa una transición importante para los lechones y debe reducirse la mezcla innecesaria de animales desconocidos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Precebo → levante
                            p.text-center Debe realizarse cuando los animales hayan alcanzado las condiciones definidas por el sistema productivo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Levante → ceba
                            p.text-center El movimiento debe organizarse evitando sobrecargas y procurando que los grupos sean manejables.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ingreso de reemplazos
                            p.text-center Los animales nuevos deben seguir el procedimiento establecido por la explotación para adaptación y control sanitario antes de mezclarlos con el grupo establecido.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta04_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Traslado a enfermería
                            p.text-center Los animales que requieren atención deben separarse de acuerdo con los procedimientos de la explotación, evitando generar estrés adicional.
            //- Fin Carrusel
            p(data-aos="fade-left") La OMSA recomienda evitar añadir uno o pocos animales a un grupo grande ya establecido y, cuando sea posible, mezclar animales previamente familiarizados.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Indicadores para evaluar la calidad del movimiento
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La calidad del manejo se determina a partir de la respuesta de los animales y de los acontecimientos registrados durante el traslado:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta05_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Vocalización excesiva
                            p.text-center Puede indicar miedo, dolor o una manipulación inadecuada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta05_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Resbalones y caídas
                            p.text-center Pueden indicar problemas de piso, exceso de velocidad o presión durante el manejo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta05_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Golpes y lesiones
                            p.text-center Evidencian deficiencias en el procedimiento o en las instalaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta05_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Retroceso y amontonamiento
                            p.text-center Pueden indicar miedo, obstáculos o una presión de manejo excesiva.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta05_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Tiempo de desplazamiento
                            p.text-center Permite identificar rutas o procedimientos que dificultan el movimiento.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta05_6.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Respuesta frente al cuidador
                            p.text-center Una reacción exagerada de huida puede indicar una interacción deficiente entre las personas y los animales.
            //- Fin Carrusel
            p(data-aos="fade-left") La respuesta al manejo, las caídas, las lesiones y los cambios de comportamiento permiten evaluar el bienestar durante la movilización.
      Separador
      //- Inicio Tema3.3
      .row
        #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.3 Manejo e identificación de los animales
      .row.justify-content-center.align-items-start.mb-2
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            p(data-aos="fade-left") La identificación constituye una herramienta fundamental para organizar la información de la explotación. Permite relacionar un animal o grupo con su origen, etapa productiva, movimientos, eventos reproductivos, tratamientos, peso, condición y destino. Los registros deben ser confiables, legibles y mantenerse actualizados.
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t3/img9.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 En Colombia, el ICA mantiene requisitos específicos para el registro de predios porcinos y actualmente exige, según el caso, documentación relacionada con el Registro Único de Vacunación (RUV) y el Registro Único de Identificación (RUI). Para determinados predios porcinos también aplica el Registro Sanitario de Predio Pecuario (RSPP).
          p.mb-3 La identificación oficial de los porcinos también está relacionada con las medidas sanitarias para el control y erradicación de la peste porcina clásica. El sistema utiliza chapetas diferenciales según la zona sanitaria y el RUI para registrar la información de propietarios, predios y animales, conforme a las disposiciones aplicables.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t3/img10.png', alt='', style="width: 100%; height: auto;")
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación individual
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los animales destinados a reproducción deben contar con un sistema que permita diferenciarlos individualmente. Esto facilita el seguimiento de su historia productiva y reproductiva.
      p(data-aos="fade-left") La identificación individual puede apoyarse en estos métodos y controles:
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tarjetas
            .row.justify-content-center(data-aos="fade-right")
              .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
                .tarjeta.bg-white.p-0.rounded-4.h-100.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta06_1.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Arete o chapeta
                    p.mb-0 Permite asignar un código legible al animal. Debe estar correctamente colocado para reducir el riesgo de pérdida o lesión.
              .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
                .tarjeta.bg-white.p-0.rounded-4.h-100.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta06_2.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Identificación electrónica
                    p.mb-0 Permite asociar un dispositivo a la información individual del animal y facilita la gestión de grandes cantidades de datos.
              .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
                .tarjeta.bg-white.p-0.rounded-4.h-100.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta06_3.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Tatuaje
                    p.mb-0 Puede proporcionar una identificación permanente cuando se realiza correctamente y se conserva la legibilidad.
              .col-sm-12.col-md-6.col-lg-3.mb-4.d-flex.flex-column
                .tarjeta.bg-white.p-0.rounded-4.h-100.overflow-hidden.border.shadow
                  figure.mb-0
                    img(src='@/assets/curso/temas/t3/tarjeta06_4.png').w-100
                  .p-4
                    h4.card-title.text-center.mb-4 Código individual
                    p.mb-0 Debe ser único dentro del sistema de registros para evitar confusión entre animales.
            //- Fin Tarjetas
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación por lotes
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") En animales manejados grupalmente puede ser necesario complementar la identificación individual con identificación por lote.
      p(data-aos="fade-left") La identificación del lote debe incluir los siguientes datos:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Número de lote")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta07_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Número de lote
                  p Permite diferenciar grupos que comparten características de edad, origen, etapa productiva o fecha de ingreso.
            .py-3.py-md-4(titulo="Fecha de ingreso")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta07_2.png')
                .col-md-6
                  h4 Fecha de ingreso
                  p Permite establecer desde cuándo el grupo permanece en la explotación.
            .py-3.py-md-4(titulo="Origen")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta07_3.png')
                .col-md-6
                  h4 Origen
                  p Registra la procedencia de los animales y facilita la trazabilidad.
            .py-3.py-md-4(titulo="Etapa productiva")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta07_4.png')
                .col-md-6
                  h4 Etapa productiva
                  p Permite relacionar el grupo con las prácticas de manejo correspondientes.
            .py-3.py-md-4(titulo="Destino")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t3/tarjeta07_5.png')
                .col-md-6
                  h4 Destino
                  p Registra la salida hacia otra área, predio o destino productivo.
      //- Cierres Pestanas horizontales
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Registros de manejo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los registros convierten la identificación en una herramienta de gestión. No basta con identificar al animal; es necesario conservar la información relacionada con los eventos importantes.
      p(data-aos="fade-left") Los principales registros de manejo son los siguientes:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro de ingreso
                p Permite documentar la llegada de animales y su procedencia.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro de movimientos
                p Permite conocer cuándo y hacia dónde se trasladó un animal o lote.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro reproductivo
                p Vincula a las hembras y los machos con los eventos reproductivos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro de peso
                p Permite realizar seguimiento al crecimiento y evolución productiva.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro de tratamientos
                p Permite identificar los animales sometidos a intervenciones veterinarias y facilita su seguimiento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro de mortalidad
                p Permite analizar causas y detectar problemas recurrentes en la explotación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta08_7.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registro de bajas o descartes
                p Permite documentar la salida definitiva de animales y analizar las causas que llevaron a dicha decisión.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Identificación diferencial de animales que requieren atención
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Los animales enfermos, lesionados o sometidos a determinados tratamientos deben poder reconocerse fácilmente para evitar errores de manejo. La identificación diferencial permite que el personal sepa que un animal requiere una atención particular.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t3/img11.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-5(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 La identificación puede realizarse mediante marcas temporales, registros ubicados en el corral, separación física u otros mecanismos definidos por la explotación. En las BPG porcinas se contempla la identificación diferencial de animales sometidos a tratamientos veterinarios y la existencia de procedimientos documentados para su manejo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Conciliación de inventario y trazabilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La identificación debe conectarse con una ubicación y un inventario verificables. En un ejercicio, un lote inicia con 80 animales, recibe 5, registra 2 muertes y transfiere 60 a otra etapa. El saldo esperado es 80 + 5 − 2 − 60 = 23 animales. Si el conteo físico es de 22, debe investigarse la diferencia antes de cerrar el registro. La corrección conserva la fecha, la causa y el responsable; no se modifica el saldo únicamente para hacerlo coincidir.
      p(data-aos="fade-left") Un registro de tratamiento debe enlazar el animal o lote, el producto y su periodo de retiro. Si la identificación se pierde, el animal no puede manejarse como si careciera de antecedentes sanitarios; debe reconstruirse su historia con las evidencias disponibles y definirse una medida de control. La trazabilidad pierde utilidad cuando los datos se consignan tardíamente o se duplican códigos.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Trazabilidad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La trazabilidad permite reconstruir la historia del animal o lote desde su ingreso hasta su salida. Es especialmente importante para la gestión sanitaria, el control de movimientos y la toma de decisiones.
      .row.justify-content-center.align-items-start.mb-2
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            p(data-aos="fade-left") La Ley 1659 de 2013 constituye un referente para la identificación, la información y la trazabilidad animal en Colombia. La explotación debe utilizar los registros y sistemas oficiales que correspondan a su especie, ubicación y tipo de movilización. La información interna de granja complementa, pero no sustituye, la documentación exigible.
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t3/img12.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 En el caso específico de los porcinos, los requisitos sanitarios de identificación y movilización deben verificarse según la zona sanitaria y las disposiciones vigentes para peste porcina clásica. El ICA establece actualmente requisitos relacionados con RUI, identificación oficial y Guía Sanitaria de Movilización Interna en los casos que corresponda.
          p.mb-3 Las prioridades de manejo, bienestar e identificación de cada grupo productivo se organizan en la tabla que se presenta a continuación.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t3/img13.png', alt='', style="width: 100%; height: auto;")
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 6.
                  span Manejo de los porcinos según etapa, actividad, bienestar y registro
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 16%") Grupo o etapa
                        th(style="width: 21%") Manejo principal
                        th(style="width: 22%") Aspectos de bienestar que deben evaluarse
                        th(style="width: 21%") Riesgos que deben prevenirse
                        th(style="width: 20%") Identificación y registros
                    tbody
                      tr
                        td Machos reproductores
                        td Evaluación, control de condición corporal, manejo seguro y seguimiento reproductivo
                        td Buena locomoción, ausencia de lesiones, respuesta tranquila al cuidador
                        td Golpes, peleas, lesiones locomotoras, estrés
                        td Identificación individual y registro reproductivo
                      tr
                        td Hembras de reemplazo
                        td Adaptación progresiva, evaluación y selección
                        td Adaptación al ambiente, comportamiento normal y condición corporal adecuada
                        td Estrés por mezcla, competencia, lesiones
                        td Identificación individual y registro de ingreso
                      tr
                        td Hembras gestantes
                        td Evaluación, manejo tranquilo y control del grupo
                        td Descanso adecuado, facilidad de movimiento y ausencia de lesiones
                        td Caídas, agresiones, estrés y deterioro corporal
                        td Identificación individual y registros reproductivos
                      tr
                        td Hembras próximas al parto
                        td Mayor frecuencia de seguimiento y preparación para maternidad
                        td Confort, comportamiento normal y ausencia de signos de enfermedad
                        td Lesiones, estrés y problemas durante el parto
                        td Registro de fecha probable de parto y eventos
                      tr
                        td Hembras lactantes
                        td Evaluación de la cerda y camada
                        td Confort, alimentación, agua, comportamiento materno y ausencia de lesiones
                        td Aplastamiento, lesiones, estrés y deterioro corporal
                        td Identificación de la hembra y registro de camada
                      tr
                        td Lechones recién nacidos
                        td Evaluación frecuente y manejo cuidadoso
                        td Vitalidad, acceso a la madre, descanso y ausencia de lesiones
                        td Aplastamiento, debilidad, hipotermia y competencia
                        td Registro de camada e identificación según sistema
                      tr
                        td Lechones en transición
                        td Agrupamiento organizado y adaptación
                        td Comportamiento social, locomoción y acceso adecuado a recursos
                        td Peleas, estrés, lesiones y caudofagia
                        td Identificación por lote o individual
                      tr
                        td Lechones destetados
                        td Manejo cuidadoso durante la separación y agrupamiento
                        td Adaptación, comportamiento y condición corporal
                        td Estrés, mezclas inadecuadas y agresiones
                        td Registro de fecha y lote de destete
                      tr
                        td Animales en crecimiento
                        td Control de grupos y movimientos programados
                        td Locomoción, condición corporal y comportamiento
                        td Sobreocupación, competencia y lesiones
                        td Identificación por lote
                      tr
                        td Animales enfermos o lesionados
                        td Separación, valoración y atención oportuna
                        td Reducción del dolor y del estrés
                        td Agravamiento de lesiones y transmisión de enfermedad
                        td Identificación diferencial y registro de tratamiento
                      tr
                        td Animales destinados a movilización
                        td Verificación de condición y documentación
                        td Aptitud para el movimiento y manejo tranquilo
                        td Caídas, golpes, estrés y movilización de animales no aptos
                        td RUI, registros y GSMI cuando corresponda
                      tr
                        td Animales de descarte
                        td Evaluación y salida conforme al procedimiento
                        td Evitar sufrimiento innecesario
                        td Manejo inadecuado y retraso en la atención
                        td Registro de causa y fecha de salida
            //- Fin Tabla
      Separador
      //- Inicio Tema3.4
      .row
        #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.4 Secuencia de manejo integral según la etapa productiva
      p(data-aos="fade-left") La secuencia de manejo integra ingreso y adaptación, identificación y registro, selección de reproductores, reproducción, gestación, maternidad, lactancia, destete, precebo, levante, ceba y salida. Cada transición exige una decisión documentada de aptitud y disponibilidad de recursos en el destino.
      p(data-aos="fade-left") En cada etapa se mantiene un ciclo transversal de seis pasos, que se describe a continuación:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-8
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 1. Evaluar
                p Se revisan el comportamiento, la condición corporal, la locomoción y el acceso a los recursos.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_2.png').img125
              .col-12.col-lg.text-start
                h4 Paso 2. Identificar
                p Se reconocen los animales o lotes y las situaciones que requieren atención.
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 3. Manejar
                p Se aplican las prácticas propias de la etapa con técnicas tranquilas y seguras.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_4.png').img125
              .col-12.col-lg.text-start
                h4 Paso 4. Registrar
                p Se documentan los eventos, los movimientos y las novedades.
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 5. Analizar
                p Se comparan los resultados con las metas y con los antecedentes del lote.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta09_6.png').img125
              .col-12.col-lg.text-start
                h4 Paso 6. Corregir
                p Se ajusta el manejo y se comprueba el efecto de la corrección.
      //- Linea de tiempo
      p(data-aos="fade-left") Este ciclo permite que el manejo no sea una actividad aislada, sino un proceso permanente de seguimiento y mejora.
      Separador
      //- Inicio Tema3.5
      .row
        #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.5 Protocolo para movilización interna de porcinos
      p(data-aos="fade-left") La movilización interna de porcinos se realiza mediante un protocolo, que se detalla enseguida:
      //- Linea de tiempo
      .row.justify-content-center
        .col-lg-8
          PasosA.color-acento-contenido.mb-4(tipo="n")
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 1. Planificar
                p Se planifica el movimiento y se asignan responsables.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta10_1.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta10_2.png').img125
              .col-12.col-lg.text-start
                h4 Paso 2. Evaluar la aptitud
                p Se evalúa la aptitud de los animales y se separan los casos que requieren atención.
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 3. Preparar
                p Se preparan el origen, la ruta y el destino.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta10_3.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta10_4.png').img125
              .col-12.col-lg.text-start
                h4 Paso 4. Organizar el grupo
                p Se conforma un grupo manejable y se evitan mezclas innecesarias.
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 5. Movilizar
                p Se moviliza con calma, utilizando paneles para orientar a los animales.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta10_5.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta10_6.png').img125
              .col-12.col-lg.text-start
                h4 Paso 6. Comprobar
                p Se revisan lesiones, resbalones, caídas y respuestas de miedo.
            .row.align-items-center
              .col-12.col-lg
                h4 Paso 7. Confirmar recursos
                p Se confirma el acceso a agua y alimento en el destino.
              .col-12.col-lg-auto.mt-3.mt-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta10_7.png').img125
            .row.align-items-center
              .col-12.col-lg-auto.mb-3.mb-lg-0
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta10_8.png').img125
              .col-12.col-lg.text-start
                h4 Paso 8. Registrar
                p Se registran las cantidades, la ubicación y las novedades.
      //- Linea de tiempo
      Separador
      //- Inicio Tema3.6
      .row
        #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.6 Bienestar animal aplicado al manejo de los porcinos
      p(data-aos="fade-left") El manejo por etapas debe adoptar un enfoque basado en resultados evaluables en el animal y no únicamente en la existencia de procedimientos escritos. La normativa colombiana de bienestar animal incorpora este enfoque y el ICA dispone de una metodología específica para porcinos, actualmente identificada como Metodología para evaluar bienestar animal en Porcinos, versión 4.0.
      p(data-aos="fade-left") Entre los aspectos que deben evaluarse se encuentran:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ausencia de hambre prolongada
                p El estado corporal y el comportamiento deben ser compatibles con una alimentación adecuada.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ausencia de sed prolongada
                p Los animales deben disponer de acceso suficiente a agua de calidad apropiada.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Confort durante el descanso
                p Deben existir condiciones que permitan descansar de manera segura y confortable.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Confort térmico
                p Deben evitarse condiciones ambientales que produzcan estrés por frío o calor.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Facilidad de movimiento
                p Los animales deben poder levantarse, acostarse y desplazarse sin obstáculos ni lesiones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ausencia de heridas
                p Las lesiones deben prevenirse mediante instalaciones y manejo adecuados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_7.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ausencia de enfermedad
                p Los animales deben evaluarse periódicamente para detectar alteraciones y recibir atención oportuna.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_8.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ausencia de dolor inducido por el manejo
                p Las prácticas necesarias deben realizarse de manera técnicamente correcta y reduciendo el dolor tanto como sea posible.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_9.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Expresión de comportamientos
                p El sistema debe favorecer oportunidades para desarrollar comportamientos propios de la especie, de acuerdo con las condiciones de producción.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t3/tarjeta11_10.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Relación con las personas
                p Los cuidadores deben aplicar técnicas que permitan una interacción tranquila y predecible.
      //- Fin Slideshow
      p(data-aos="fade-left") Estos principios coinciden con las recomendaciones de la OMSA para sistemas de producción porcina, que incluyen como indicadores la respuesta al manejo, lesiones, comportamiento, cambios de peso y condición corporal, cojera, morbilidad, mortalidad y descarte.
      Separador
      //- Inicio Tema3.7
      .row
        #t_3_7.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 3.7 Buenas Prácticas Ganaderas aplicadas al manejo
      p(data-aos="fade-left") El manejo de los animales debe integrarse con las Buenas Prácticas Ganaderas, cuyo propósito es reducir peligros biológicos, físicos y químicos en la producción primaria y promover simultáneamente la sanidad, el bienestar animal y la protección ambiental. En términos prácticos, una explotación que aplica BPG debe procurar lo siguiente:
      .row.bg-fondo-1(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width.mt-5
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-12.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-4 col-lg-4")
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Personal competente
                            p.text-center Los trabajadores deben conocer el comportamiento de los porcinos, las técnicas de manejo y los signos de enfermedad, dolor o estrés.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Procedimientos documentados
                            p.text-center Las actividades de manejo deben estar definidas para disminuir la variabilidad entre trabajadores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Identificación confiable
                            p.text-center Los animales y lotes deben poder relacionarse con sus registros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Registros actualizados
                            p.text-center La información debe permitir conocer movimientos, tratamientos y eventos productivos relevantes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Manejo diferencial
                            p.text-center Los animales enfermos, lesionados o sometidos a tratamientos deben poder identificarse y manejarse de manera diferenciada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_6.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Movilización responsable
                            p.text-center Los desplazamientos deben realizarse evitando golpes, miedo y lesiones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t3/tarjeta12_7.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Evaluación permanente
                            p.text-center Los resultados deben revisarse para detectar oportunidades de mejora.
            //- Fin Carrusel
      .row.justify-content-center.mb-4(data-aos="fade-left")
            .col-lg-12        
              .d-flex.flex-column.flex-lg-row.align-items-center.bg-color-4.p-4.rounded-4
                .flex-shrink-0.mb-3.mb-lg-0.pe-lg-4
                  img(src='@/assets/curso/temas/bg/icono-pdf.svg', style="width: 80px")
                .flex-grow-1.text-center.text-lg-start
                  h4.mb-2.text-white Reproducción, alimentación y sanidad porcina
                  p.mb-0.text-white Los invitamos a consultar el anexo <b>Reproducción, alimentación y sanidad porcina</b>, en el que podrán profundizar en los aspectos fundamentales del manejo reproductivo, la alimentación y el cuidado sanitario de los porcinos. 
                .mt-3.mt-lg-0.ps-lg-4            
                  a.btn.btn-custom-download.w-buttons.d-flex.align-items-center.justify-content-center.p-3(:href="obtenerLink('/downloads/Anexos/Anexo_01_Reproducción_ Alimentación_ Porcina.pdf')" target="_blank")
                    span.fw-bold.me-2.text-black Descargar
                    i.fas.fa-file-download.text-black






</template>

<script>
import podcast1 from '@/assets/curso/temas/audio/podcast.mp3'
export default {
  name: 'Tema3',
  data: () => ({
    podcast1,
    mostrarIndicadorTarjetaAudio: true,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>