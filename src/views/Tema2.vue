<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Instalaciones y equipos porcícolas
      .row.justify-content-center.align-items-start.mb-2
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            p(data-aos="fade-left") Las instalaciones y los equipos proporcionan las condiciones físicas necesarias para alojar, manejar, alimentar, movilizar y proteger a los porcinos durante las diferentes etapas productivas. Su diseño debe facilitar el trabajo del personal, favorecer la higiene, reducir los riesgos de accidentes, controlar las condiciones ambientales y contribuir al bienestar animal.
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t2/img1.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 La planificación de las instalaciones debe considerar el sistema de explotación, el tamaño de la unidad productiva, el número de animales, las etapas productivas, las condiciones climáticas de la región, la disponibilidad de agua, el manejo de residuos, las necesidades de bioseguridad y las posibilidades de ampliación. No existe un único diseño aplicable a todas las explotaciones; las instalaciones deben adaptarse a las características productivas y ambientales de cada unidad.
          p.mb-3 Los equipos, por su parte, deben seleccionarse de acuerdo con la función que cumplen, la edad y el tamaño de los animales, la facilidad de limpieza y desinfección, la resistencia de los materiales y la seguridad tanto de los animales como de los trabajadores. Una adecuada selección y mantenimiento de los equipos permite mejorar la eficiencia de las labores y disminuir pérdidas ocasionadas por daños, contaminación o accidentes.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t2/img2.png', alt='', style="width: 100%; height: auto;")
      Separador
      //- Inicio Tema2.1
      .row
        #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.1 Tipos, áreas y distribución de las instalaciones
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Las instalaciones porcícolas comprenden el conjunto de construcciones, espacios, estructuras y servicios destinados al alojamiento y manejo de los animales. Su distribución debe permitir un flujo ordenado de animales, personas, alimentos, equipos, residuos y vehículos, evitando cruces innecesarios que puedan incrementar los riesgos sanitarios.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t2/img3.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 El diseño debe buscar que las actividades rutinarias puedan realizarse de manera segura, eficiente y con el menor nivel posible de estrés para los animales. También debe facilitar las labores de limpieza, mantenimiento, inspección y control de las condiciones ambientales.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principios para el diseño de las instalaciones
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El diseño debe responder a los siguientes principios:
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
                          img(src='@/assets/curso/temas/t2/tarjeta01_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Funcionalidad
                            p Las instalaciones deben permitir realizar las actividades productivas de manera práctica, reduciendo desplazamientos innecesarios y facilitando el manejo cotidiano de los animales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta01_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Seguridad
                            p Los pisos, puertas, divisiones, pasillos y demás estructuras deben reducir el riesgo de lesiones, atrapamientos, caídas o golpes tanto para los animales como para los trabajadores.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta01_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Higiene
                            p Los materiales y superficies deben facilitar la limpieza y desinfección, evitando acumulaciones de materia orgánica, humedad y suciedad que puedan favorecer la contaminación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta01_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Bienestar animal
                            p El diseño debe proporcionar espacio suficiente, condiciones ambientales apropiadas, acceso al agua y alimento y superficies que permitan desplazarse y descansar adecuadamente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta01_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Bioseguridad
                            p La distribución debe facilitar el control del ingreso de personas, animales, vehículos, equipos y materiales, disminuyendo las posibilidades de introducción o propagación de agentes infecciosos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta01_6.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Adaptación climática
                            p Las construcciones deben responder a las condiciones de temperatura, humedad, radiación solar, precipitaciones y circulación del aire propias de la región.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta01_7.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Durabilidad
                            p Los materiales utilizados deben resistir las condiciones de humedad, limpieza, desinfección, manipulación y uso continuo propias de una explotación porcícola.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta01_8.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Facilidad de mantenimiento
                            p Las estructuras y equipos deben permitir inspecciones periódicas y reparaciones oportunas para evitar que pequeñas fallas se conviertan en problemas mayores.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales áreas de una explotación porcícola
      //- Título nivel 3 - Imagen
      p.mb-5(data-aos="fade-left") La distribución de las áreas debe establecerse de acuerdo con el sistema productivo y el flujo de animales. En explotaciones de mayor tamaño pueden existir zonas diferenciadas para cada grupo productivo, mientras que en sistemas pequeños algunas funciones pueden desarrollarse en espacios multifuncionales. Las áreas principales y sus funciones son las siguientes:
      .row.justify-content-center.mb-5(data-aos="fade-right")
        .col-md-auto.col-lg-10
          .titulo-sexto.color-acento-contenido.mb-3
            h5 Figure 1.
            span Distribución de áreas de una finca porcina
          figure.mb-0
            img.mx-auto(src="@/assets/curso/temas/t2/img4.png", alt='Ilustración isométrica de una granja porcina con áreas de cuarentena, hembras de reemplazo, gestación, maternidad, reproducción, precebo, levante y ceba, enfermería y aislamiento. Incluye zonas de almacenamiento de alimentos y medicamentos, manejo de residuos, ingreso y control, cambio de ropa y calzado, limpieza y desinfección, portería y cerramiento perimetral. ', data-aos="zoom-in", style="width: 1000px;")
      .row.bg-fondo-3(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Carrusel
            .bg-full-width
              .px-4.px-md-5.pb-md-3
                .carousel-bg
                  .row.justify-content-center.mb-5.align-items-center
                    .col-lg-8.mb-3.mb-lg-0.order-lg-2
                      SlyderF(columnas="col-xl-6 col-lg-6 col-md-6 col-12")                       
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_1.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de ingreso y control
                            p.text-start Corresponde al punto donde se controla el acceso de personas, vehículos, equipos y materiales. Debe permitir aplicar medidas de bioseguridad, registrar visitantes y establecer procedimientos de ingreso y salida.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_2.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Portería y cerramiento perimetral
                            p.text-start Permiten delimitar la unidad productiva y controlar el ingreso no autorizado de personas y animales. El cerramiento debe mantenerse en buenas condiciones y evitar accesos no controlados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_3.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Zona de cambio de ropa y calzado
                            p.text-start Facilita que el personal utilice prendas y calzado destinados a las actividades dentro de la explotación, disminuyendo el riesgo de introducir contaminantes desde el exterior.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_4.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Zona de limpieza y desinfección
                            p.text-start Permite realizar procesos de higiene de personas, equipos, vehículos o elementos que ingresan a la explotación, de acuerdo con los protocolos establecidos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_5.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de cuarentena o adaptación
                            p.text-start Aloja por separado a los animales de ingreso y permite evaluar su estado sanitario y completar los procedimientos definidos antes de incorporarlos al grupo productivo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_6.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de hembras de reemplazo
                            p.text-start Proporciona alojamiento para las hembras jóvenes seleccionadas para formar parte del grupo reproductivo, procurando condiciones que faciliten su adaptación y manejo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_7.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de hembras reproductoras
                            p.text-start Está destinada a las hembras que participan activamente en el proceso reproductivo. Su diseño debe facilitar el manejo individual o grupal según el sistema de producción.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_8.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de gestación
                            p.text-start Permite alojar las hembras durante la gestación, con condiciones de espacio, ventilación, piso y acceso al agua acordes con el sistema de alojamiento utilizado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_9.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de maternidad
                            p.text-start Está destinada a las hembras próximas al parto y a sus camadas. Debe permitir el manejo de la cerda y los lechones, facilitar la higiene y disminuir los riesgos de accidentes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_10.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de precebo
                            p.text-start Corresponde al espacio donde se alojan los lechones después de la etapa de maternidad. Debe proporcionar condiciones ambientales y de alojamiento adecuadas para animales jóvenes.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_11.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de levante y ceba
                            p.text-start Está destinada a los animales en crecimiento y finalización. Debe permitir una adecuada distribución de los grupos y facilitar la limpieza, alimentación, suministro de agua y movilización.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_12.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de enfermería o aislamiento
                            p.text-start Permite separar animales que requieren evaluación o atención individual, evitando su contacto directo con animales aparentemente sanos.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_13.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de almacenamiento de alimentos
                            p.text-start Debe proteger los alimentos de humedad, contaminación, plagas y acceso de animales. Su ubicación debe facilitar el suministro sin interferir con el flujo de animales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_14.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área de almacenamiento de medicamentos e insumos veterinarios
                            p.text-start Debe mantenerse organizada y protegida, de acuerdo con las condiciones de almacenamiento indicadas para cada producto.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden.p-4.text-center
                          .row.justify-content-center.mb-3.mt-3
                            .col-auto
                              img(src='@/assets/curso/temas/t2/tarjeta02_15.svg' alt='' style="width: 90px; height: 90px; object-fit: contain;").mx-auto
                          .p-2
                            h4.card-title.text-center.mb-3.fw-bold Área para manejo de residuos
                            p.text-start Debe permitir separar, almacenar temporalmente y gestionar adecuadamente los residuos generados por la explotación, evitando contaminación de animales, alimentos, agua y suelo.
                    .col-lg-4.order-lg-1.d-none.d-lg-block
                        figure
                          img(src='@/assets/curso/temas/t2/img5.png', style="width: 500px", data-aos="zoom-in").m-auto
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Dimensionamiento de plazas y ocupación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El número de plazas se calcula a partir del ingreso de animales por lote, la permanencia en el área y el intervalo entre lotes; también debe reservarse tiempo para limpieza, desinfección y preparación. El cálculo se apoya en las siguientes expresiones:
      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-8.bg-color-3.p-2.rounded-4
          p.text-center Ciclo de ocupación (días) = permanencia en el área + tiempo de higienización
          p.text-center Número de salas = ciclo de ocupación ÷ intervalo entre lotes
      .row.justify-content-center.align-items-stretch.mb-5.g-0(data-aos="fade-right")
        .col-lg-7.bg-color-2.d-flex.flex-column.justify-content-center.p-4.order-2.order-lg-2
          p.mb-3.fw-bold Ejemplo resuelto
          p.mb-0 Una sala recibe 20 animales cada 14 días; la permanencia es de 35 días y se asignan 7 días para higienización. El ciclo de ocupación es de 35 + 7 = 42 días y se requieren 42 ÷ 14 = 3 salas, cada una con capacidad funcional para 20 animales. El resultado equivale a 60 plazas, antes de considerar contingencias y restricciones propias del sistema.
        .col-lg-5.d-flex.order-1.order-lg-1
          figure.mb-0.w-100.h-100
            img.h-100.w-100(src='@/assets/curso/temas/t2/img6.png', alt='', style="object-fit: cover;")
      p(data-aos="fade-left") Para estimar superficie útil se multiplica el inventario máximo simultáneo por el espacio adoptado por animal. Si un ejercicio establece 24 cerdos y un supuesto de diseño de 0,8 m² por animal, el área útil sería 19,2 m². Este valor no es una recomendación universal ni un mínimo legal. El espacio debe definirse según peso final, sistema de alojamiento, clima, bienestar y requisitos aplicables. Pasillos, almacenes y zonas de servicio se calculan por separado y no sustituyen superficie de uso animal.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Distribución y flujo dentro de la explotación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La distribución debe organizarse considerando los movimientos de animales, trabajadores, alimentos, equipos, residuos y vehículos. El objetivo es evitar cruces innecesarios entre flujos limpios y potencialmente contaminados.
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src="@/assets/curso/temas/t2/img7.png", data-aos="zoom-in", style="width: 600px;")      
        .col-12.col-lg-7(data-aos="fade-left")
          p La circulación del personal y de los animales debe organizarse con rutas diferenciadas y controles de ingreso.
          .d-flex.align-items-start
            img.d-none.d-lg-block.me-3(src="@/assets/curso/temas/bg/lineas.svg", style="width: 100%; max-width: 90px;", alt="")
            p.mb-3 La circulación del personal comprende ingreso controlado, cambio de ropa y calzado, acceso autorizado a las áreas productivas y salida. Los animales de ingreso permanecen en cuarentena y adaptación antes de su incorporación, según autorización sanitaria del responsable. La cuarentena no debe convertirse en una ruta de paso del personal hacia las áreas productivas.
          p(data-aos="fade-left") De manera paralela, los alimentos e insumos deben ingresar por rutas que reduzcan el contacto con residuos, animales enfermos y materiales contaminados.
      p(data-aos="fade-left") El flujo de alimentos e insumos sigue la secuencia de ingreso, almacenamiento, distribución y suministro, mientras que el de residuos comprende generación, recolección, almacenamiento temporal y tratamiento o disposición final.
      p(data-aos="fade-left") La separación de estos flujos contribuye a mejorar la bioseguridad y facilita la organización de las actividades diarias.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Pisos, paredes y divisiones
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los elementos constructivos deben cumplir los siguientes criterios:
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
                          img(src='@/assets/curso/temas/t2/tarjeta03_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Pisos
                            p Deben proporcionar estabilidad, reducir el riesgo de resbalones y facilitar el drenaje y la limpieza, sin causar lesiones en las extremidades.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Pendientes
                            p Deben permitir la evacuación adecuada de líquidos hacia los sistemas de drenaje, evitando acumulaciones de agua y humedad excesiva.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Paredes
                            p Deben ser resistentes, lavables y de fácil mantenimiento. Las superficies deterioradas pueden acumular suciedad y dificultar los procesos de higiene.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Divisiones
                            p Deben permitir separar grupos de animales de acuerdo con la etapa productiva, tamaño, condición o manejo requerido, evitando elementos que puedan producir lesiones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Puertas y accesos
                            p Deben ser resistentes y funcionar correctamente. Su diseño debe evitar atrapamientos y permitir el paso seguro de personas y animales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta03_6.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Pasillos
                            p Deben tener dimensiones y condiciones que permitan movilizar animales de forma segura, evitando obstáculos, esquinas innecesarias y superficies que favorezcan caídas.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Ventilación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La ventilación renueva el aire y contribuye al control de la temperatura, la humedad, los gases y las partículas. Su diseño debe ajustarse al clima, a la densidad de alojamiento y a las características de la construcción.
      p(data-aos="fade-left") El control de la ventilación debe considerar estos factores:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-3.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img8.png", alt="").img400.m-auto
          .col-lg-9
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Amoníaco")
                p.mb-4 Se genera principalmente por la descomposición de la orina y las heces. Su acumulación puede afectar las vías respiratorias y disminuir el confort de los animales.
              .row(titulo="Sulfuro de hidrógeno")
                p.mb-4 Puede producirse durante la descomposición anaerobia de materia orgánica. Su presencia representa un riesgo cuando se acumula en concentraciones elevadas.
              .row(titulo="Polvo")
                p.mb-4 Puede proceder del alimento, material de cama, materia fecal y ambiente. Una ventilación apropiada contribuye a disminuir su concentración.
              .row(titulo="Humedad")
                p.mb-4 Una humedad excesiva favorece la aparición de superficies húmedas, deterioro de materiales y condiciones ambientales desfavorables.
              .row(titulo="Calor")
                p.mb-4 La ventilación facilita la eliminación del calor producido por los animales y por las condiciones ambientales, especialmente durante períodos de temperaturas elevadas.
      //- Fin Accordion 1
      p(data-aos="fade-left") La ventilación puede ser natural, mecánica o combinada. En sistemas naturales se aprovechan aberturas y corrientes de aire, mientras que los sistemas mecánicos utilizan ventiladores o extractores para controlar el movimiento del aire.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Control ambiental y respuesta ante fallas
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La gestión ambiental debe relacionar las mediciones de temperatura y humedad con la distribución de los animales, el consumo y los signos de incomodidad. Es necesario registrar la hora y el punto de medición, porque un dato aislado no describe la variación diaria ni las diferencias entre corrales. La renovación del aire debe retirar humedad y contaminantes sin generar corrientes perjudiciales en el descanso de los lechones. Las entradas de aire y los extractores deben mantenerse funcionales.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t2/img9.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 Cuando el sistema depende de equipos eléctricos, la granja debe disponer de una respuesta ante interrupciones, con un responsable de la alarma, alternativa de ventilación, reserva de agua y priorización de áreas vulnerables. Los sistemas de respaldo deben comprobarse mediante pruebas programadas. 
      p(data-aos="fade-left") En depósitos y fosas de purines puede existir una atmósfera peligrosa; el manejo de estos espacios requiere un procedimiento específico de seguridad y no debe basarse en la capacidad humana de detectar gases.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Iluminación
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La iluminación debe permitir realizar las actividades de manejo, inspección y limpieza de forma segura y facilitar la evaluación de los animales.
      p(data-aos="fade-left") Para gestionar la iluminación deben considerarse los siguientes criterios:
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
                          img(src='@/assets/curso/temas/t2/tarjeta04_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Intensidad suficiente
                            p Debe permitir identificar correctamente animales, instalaciones, equipos y posibles alteraciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta04_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Distribución uniforme
                            p Evita zonas excesivamente oscuras o con contrastes que puedan dificultar el desplazamiento y manejo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta04_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ciclo de luz y oscuridad
                            p Debe organizarse considerando las necesidades de los animales y las condiciones de manejo de la explotación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta04_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Iluminación durante las labores
                            p Las áreas de trabajo deben contar con suficiente iluminación para que los trabajadores puedan realizar sus actividades con seguridad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta04_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Mantenimiento
                            p Las lámparas, las conexiones y los demás componentes deben revisarse periódicamente para asegurar su funcionamiento y evitar riesgos eléctricos.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Enriquecimiento y elementos ambientales
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los espacios destinados a los cerdos pueden incorporar elementos manipulables que favorezcan la exploración y reduzcan el aburrimiento, siempre que sean seguros, resistentes y fáciles de mantener.
      p(data-aos="fade-left") Los elementos de enriquecimiento deben seleccionarse según su seguridad y función:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido
            .py-3.py-md-4(titulo="Cuerdas")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta05_1.png', alt='')
                .col-md-6
                  h4 Cuerdas
                  p Pueden proporcionar un objeto manipulable cuando se instalan correctamente y se revisan periódicamente para evitar desprendimientos o deterioro.
            .py-3.py-md-4(titulo="Cadenas")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta05_2.png', alt='')
                .col-md-6
                  h4 Cadenas
                  p Permiten actividades de exploración y manipulación, siempre que el material, tamaño y sistema de fijación sean seguros.
            .py-3.py-md-4(titulo="Material vegetal apropiado")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta05_3.png', alt='')
                .col-md-6
                  h4 Material vegetal apropiado
                  p Determinados materiales vegetales pueden proporcionar oportunidades de exploración, siempre que sean inocuos y no representen riesgo de intoxicación o lesiones.
            .py-3.py-md-4(titulo="Objetos manipulables")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta05_4.png', alt='')
                .col-md-6
                  h4 Objetos manipulables
                  p Deben ser suficientemente resistentes para soportar la interacción de los animales y no contener partes cortantes o pequeñas piezas que puedan ser ingeridas.
            .py-3.py-md-4(titulo="Materiales masticables o destructibles")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t2/tarjeta05_5.png', alt='')
                .col-md-6
                  h4 Materiales masticables o destructibles
                  p Pueden favorecer comportamientos exploratorios, pero deben seleccionarse considerando su seguridad, higiene y facilidad de reposición.
      //- Cierres Pestanas horizontales
      Separador
      //- Inicio Tema2.2
      .row
        #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.2 Equipos y elementos para el manejo
      p(data-aos="fade-left") Los equipos permiten realizar las actividades de alimentación, suministro de agua, movilización, identificación, limpieza y manejo general de los animales. Su selección debe considerar el tamaño y la etapa productiva, el número de animales y las condiciones de la explotación.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Equipos para suministro de alimento
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los equipos de alimentación se seleccionan de acuerdo con su función:
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
                          img(src='@/assets/curso/temas/t2/tarjeta06_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Comederos individuales
                            p Permiten controlar el acceso al alimento de animales alojados individualmente y facilitan la evaluación del consumo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta06_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Comederos grupales
                            p Están diseñados para grupos de animales y deben proporcionar suficiente espacio para disminuir la competencia excesiva durante la alimentación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta06_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Comederos automáticos
                            p Permiten suministrar cantidades programadas de alimento y pueden contribuir a mejorar la regularidad del suministro.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta06_4.png', alt='Tolvas').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Tolvas
                            p Almacenan alimento y permiten su suministro progresivo, reduciendo la necesidad de realizar múltiples cargas manuales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta06_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Sistemas de alimentación seca
                            p Suministran alimento en presentación seca y deben mantenerse limpios y protegidos de humedad.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta06_6.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Sistemas de alimentación líquida
                            p Suministran mezclas de alimento y agua mediante equipos específicos que requieren control riguroso de la higiene.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta06_7.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Carretillas y recipientes
                            p Facilitan el transporte manual de alimentos dentro de la explotación y deben mantenerse limpios para evitar contaminación.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Equipos para suministro de agua
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El agua debe estar disponible de forma suficiente y accesible. Los sistemas de suministro deben mantenerse limpios, funcionando correctamente y protegidos frente a contaminación.
      p(data-aos="fade-left") La red de suministro puede integrar los siguientes equipos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bebederos tipo chupón
                p Permiten que el animal acceda al agua mediante la activación de una válvula y son ampliamente utilizados en sistemas porcinos.                  
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bebederos de taza
                p Proporcionan agua en un recipiente accesible para el animal y requieren control frecuente de la limpieza.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Sistemas automáticos
                p Mantienen el suministro de agua mediante redes conectadas a depósitos o sistemas de distribución.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Tanques de almacenamiento
                p Permiten disponer de una reserva de agua para la explotación y deben protegerse frente a contaminación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Filtros
                p Contribuyen a retirar determinadas partículas presentes en el agua y protegen los componentes del sistema de suministro.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta07_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reguladores de presión
                p Permiten controlar la presión del agua en la red para favorecer el funcionamiento adecuado de los bebederos.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Equipos para movilización y manejo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La movilización debe realizarse evitando golpes, gritos, movimientos bruscos y elementos que puedan generar lesiones.
      p(data-aos="fade-left") La movilización requiere elementos apropiados para cada tarea:
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
                          img(src='@/assets/curso/temas/t2/tarjeta08_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Paneles de manejo
                            p Permiten orientar los animales y controlar su desplazamiento durante las movilizaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta08_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Tablas de manejo
                            p Pueden utilizarse como barrera física para conducir grupos de animales sin necesidad de ejercer fuerza excesiva.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta08_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Puertas y compuertas
                            p Permiten controlar el acceso entre corrales y organizar el desplazamiento de los animales.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta08_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Corrales de manejo
                            p Concentran los animales en un espacio controlado para facilitar determinadas actividades.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta08_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Pasillos
                            p Conectan diferentes áreas y permiten desplazar los animales de forma ordenada.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta08_6.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Rampas
                            p Facilitan el desplazamiento hacia vehículos o zonas con diferente nivel y deben proporcionar estabilidad y evitar resbalones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta08_7.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Básculas
                            p Permiten determinar el peso de los animales y obtener información útil para el seguimiento productivo y determinadas decisiones de manejo.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Equipos para identificación y registro
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La identificación permite diferenciar animales y relacionarlos con sus registros productivos, reproductivos o sanitarios.
      p(data-aos="fade-left") La identificación y el registro pueden apoyarse en los siguientes elementos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Aretes
                p Permiten identificar individualmente a los animales mediante códigos legibles.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Tatuajes
                p Proporcionan una identificación permanente cuando se aplican correctamente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Identificación electrónica
                p Utiliza dispositivos electrónicos que permiten registrar y recuperar información individual de los animales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Marcadores
                p Pueden emplearse para identificaciones temporales durante determinados procedimientos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Lectores electrónicos
                p Permiten recuperar la información almacenada en dispositivos electrónicos de identificación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Básculas
                p Permiten registrar pesos individuales o grupales para el seguimiento del crecimiento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta09_7.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registros físicos o digitales
                p Permiten conservar información relacionada con identificación, movimientos, tratamientos, pesos y otros datos relevantes de la explotación.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Equipos para limpieza y desinfección
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Los equipos utilizados para higiene deben mantenerse limpios, en buen estado y, cuando corresponda, destinados a áreas específicas para evitar contaminación cruzada.
      p(data-aos="fade-left") La higiene de las instalaciones requiere los siguientes equipos y utensilios:
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
                          img(src='@/assets/curso/temas/t2/tarjeta10_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Hidro lavadoras
                            p Permiten aplicar agua a presión para remover suciedad y materia orgánica adherida a determinadas superficies.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta10_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Mangueras
                            p Facilitan el lavado de pisos, paredes y equipos cuando se utilizan correctamente.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta10_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Cepillos
                            p Permiten remover suciedad adherida en superficies y equipos que requieren limpieza mecánica.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta10_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Escobas
                            p Facilitan la remoción de residuos secos y materiales sólidos antes del lavado.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta10_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Palas
                            p Permiten retirar estiércol, material orgánico y residuos acumulados.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta10_6.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Raspadores
                            p Facilitan la eliminación de materia adherida a pisos y superficies.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta10_7.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Recipientes
                            p Permiten preparar, transportar o almacenar materiales utilizados durante las labores de limpieza.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta10_8.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Equipos de aplicación de desinfectantes
                            p Permiten distribuir los productos de manera uniforme cuando se utilizan de acuerdo con las instrucciones del fabricante.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta10_9.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Sistemas de drenaje
                            p Permiten evacuar el agua utilizada durante la limpieza y disminuir acumulaciones de humedad.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos de bioseguridad
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las barreras de bioseguridad de la explotación incluyen los siguientes elementos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta11_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Lavamanos
                p Deben estar ubicados estratégicamente para facilitar la higiene de las manos antes y después de determinadas actividades.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta11_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Vestidores
                p Permiten separar la ropa de calle de la ropa utilizada dentro de la explotación.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta11_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Botas exclusivas
                p Reducen el ingreso de contaminantes externos cuando se utilizan y mantienen adecuadamente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta11_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ropa de trabajo
                p Debe estar limpia y destinada a las actividades de la unidad productiva.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta11_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Elementos de protección personal
                p Protegen al trabajador frente a riesgos físicos, químicos y biológicos asociados con las labores.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta11_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Equipos de limpieza y desinfección
                p Permiten mantener las áreas y elementos de uso frecuente bajo condiciones adecuadas de higiene.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta11_7.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Control de acceso
                p Permite limitar el ingreso de personas, animales y vehículos a las áreas productivas.
      //- Fin Slideshow      
      Separador
      //- Inicio Tema2.3
      .row
        #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 2.3 Preparación, adecuación e higiene de las instalaciones
      p(data-aos="fade-left") La preparación y la adecuación de las instalaciones deben realizarse antes del ingreso de los animales. Su funcionalidad y sus condiciones higiénicas deben mantenerse durante todo el ciclo productivo para reducir riesgos para los animales, los trabajadores y el ambiente.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Inspección de las instalaciones
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Antes de utilizar un área se debe realizar una revisión sistemática para detectar condiciones que puedan afectar el funcionamiento de la explotación.
      p(data-aos="fade-left") La revisión previa al ingreso debe abarcar los siguientes puntos:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Pisos
                p Deben revisarse para identificar grietas, desniveles, superficies excesivamente lisas o zonas que puedan producir lesiones.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Paredes
                p Deben inspeccionarse para detectar deterioro, humedad, desprendimientos o superficies difíciles de limpiar.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Divisiones
                p Deben comprobarse para verificar su estabilidad y ausencia de elementos cortantes o peligrosos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Puertas
                p Deben abrir y cerrar correctamente y evitar puntos de atrapamiento.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Comederos
                p Deben revisarse para verificar que estén firmes, limpios y sin bordes que puedan causar lesiones.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bebederos
                p Deben comprobarse para asegurar que proporcionen agua adecuadamente y no presenten fugas.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_7.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Tuberías
                p Deben inspeccionarse para identificar fugas, obstrucciones o daños.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_8.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Drenajes
                p Deben mantenerse libres de residuos para permitir la evacuación adecuada de líquidos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_9.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Instalaciones eléctricas
                p Deben revisarse para identificar cables expuestos, conexiones deterioradas u otras condiciones inseguras.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_10.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ventilación
                p Debe comprobarse que las entradas, salidas, ventiladores o extractores funcionen correctamente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_11.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Iluminación
                p Deben revisarse lámparas, conexiones y puntos de iluminación para garantizar condiciones adecuadas de trabajo.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_12.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cerramientos
                p Deben mantenerse completos para impedir escapes y accesos no autorizados.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta12_13.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Elementos peligrosos
                p Cualquier objeto cortante, puntiagudo, roto o inestable debe retirarse o repararse antes del ingreso de los animales.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Limpieza de las instalaciones
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") A continuación, se presenta un video que explica la secuencia de limpieza de las instalaciones porcinas entre lotes, la importancia de retirar la materia orgánica antes de desinfectar y los cuidados que permiten dejar el área en condiciones adecuadas para el ingreso del siguiente grupo de animales.
      .row.justify-content-center.align-items-center.mb-5
        .col-lg-12
          figure
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Desinfección
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La desinfección debe realizarse después de una limpieza completa, porque la materia orgánica puede reducir la eficacia de los productos utilizados.
      p(data-aos="fade-left") La eficacia y la seguridad de la desinfección dependen de estos criterios:
      //- Inicio Accordion 1
      .bg--img_03.mt-5
        .row.justify-content-center
          .col-lg-8
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Agente desinfectante")
                p.mb-4 Debe seleccionarse según el objetivo sanitario, el tipo de superficie y las recomendaciones técnicas.
              .row(titulo="Tipo de superficie")
                p.mb-4 El material sobre el cual se aplica el producto puede influir en su eficacia y compatibilidad.
              .row(titulo="Materia orgánica")
                p.mb-4 Debe reducirse previamente mediante limpieza, porque puede interferir con la acción de determinados desinfectantes.
              .row(titulo="Concentración")
                p.mb-4 Debe prepararse siguiendo estrictamente las indicaciones del fabricante; aumentar la concentración no significa necesariamente aumentar la eficacia.
          .col-lg-4.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img10.png", alt="").img400.m-auto
      //- Fin Accordion 1      
      //- Inicio Accordion 2
      .bg--img_03.mt-5
        .row.justify-content-center          
          .col-lg-8.order-2.order-lg-2
            AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta acordeonA")
              .row(titulo="Tiempo de contacto")
                p.mb-4 El producto debe permanecer sobre la superficie durante el tiempo requerido para alcanzar el efecto esperado.
              .row(titulo="Compatibilidad")
                p.mb-4 Debe verificarse que el producto no deteriore las superficies, equipos o materiales sobre los cuales se utiliza.
              .row(titulo="Seguridad")
                p.mb-4 El personal debe utilizar los elementos de protección indicados para manipular y aplicar los productos.
              .row(titulo="Calidad del agua")
                p.mb-4 Sus características pueden influir en la preparación y la eficacia de algunos productos.
          .col-lg-4.order-1.order-lg-1.mb-5.mb-lg-0
            figure(data-aos="zoom-in")
              img(src="@/assets/curso/temas/t2/img11.png", alt="").img400.m-auto
      //- Fin Accordion 2
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Drenaje y manejo del agua
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El sistema de drenaje debe evitar acumulaciones de agua y facilitar la limpieza de las instalaciones.
      p(data-aos="fade-left") El drenaje debe cumplir las siguientes condiciones:
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
                          img(src='@/assets/curso/temas/t2/tarjeta13_1.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Pendiente
                            p Los pisos deben permitir que el agua se desplace hacia los puntos de evacuación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta13_2.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Canales despejados
                            p Deben mantenerse libres de estiércol, alimento, residuos y otros materiales que puedan obstruir el flujo.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta13_3.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ausencia de obstrucciones
                            p Las rejillas, tuberías y canales deben revisarse periódicamente para detectar acumulaciones.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta13_4.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Evacuación segura
                            p El agua residual debe conducirse de manera que no genere contaminación ni afecte otras áreas de la explotación.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t2/tarjeta13_5.png', alt='').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Mantenimiento periódico
                            p Los sistemas de drenaje deben revisarse y limpiarse con una frecuencia definida según las condiciones de la explotación.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Mantenimiento preventivo
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El mantenimiento preventivo permite detectar y corregir problemas antes de que afecten la seguridad, higiene o funcionamiento de las instalaciones.
      p(data-aos="fade-left") El mantenimiento preventivo comprende las siguientes actividades:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_1.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Revisión de infraestructura
                p Permite identificar deterioros en pisos, paredes, techos, divisiones y otras estructuras.                     
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_2.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reparación de pisos y paredes
                p Evita que grietas, huecos o superficies deterioradas se conviertan en sitios de acumulación de suciedad o riesgos para los animales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_3.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Puertas y corrales
                p Deben revisarse para garantizar estabilidad, funcionamiento y seguridad.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_4.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Bebederos y comederos
                p Deben mantenerse en condiciones adecuadas para garantizar su funcionamiento y facilitar la higiene.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_5.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Ventiladores y extractores
                p Deben inspeccionarse y mantenerse para garantizar una adecuada renovación del aire cuando se utilizan sistemas mecánicos.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_6.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Instalaciones eléctricas
                p Requieren revisión periódica para disminuir riesgos de cortocircuitos, incendios o accidentes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_7.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Drenajes
                p Deben limpiarse y mantenerse funcionales para evitar acumulación de agua.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t2/tarjeta14_8.png', alt='')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Registros de mantenimiento
                p Permiten documentar las reparaciones realizadas, identificar fallas recurrentes y programar futuras intervenciones.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios de liberación de un área higienizada
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La secuencia de higiene debe terminar con una decisión documentada de aptitud para el ingreso. Antes de liberar una sala se comprueba ausencia de residuos orgánicos, cumplimiento de la dilución y del tiempo de contacto del desinfectante, drenaje funcional y condiciones de secado compatibles con el protocolo. También deben estar operativos bebederos, comederos, cerramientos y equipos térmicos. Si un criterio falla, la sala permanece pendiente y se registra la corrección necesaria.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t2/img12.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 El registro de higiene debe incluir identificación del área, fechas, productos utilizados, cantidad preparada, concentración según etiqueta, tiempo de contacto, responsable y resultado de la comprobación. La renovación de una solución desinfectante se define por el protocolo y su carga de suciedad, no solo por el aspecto externo del recipiente. 
      p(data-aos="fade-left") No deben mezclarse productos de limpieza o desinfección sin compatibilidad expresamente establecida por el fabricante.
      p(data-aos="fade-left") La tabla que se presenta a continuación detalla la relación entre las áreas, sus funciones y los criterios técnicos de manejo.      
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 5.
                  span Relación entre instalaciones, función y criterios técnicos
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Área o elemento
                        th(style="width: 40%") Función principal
                        th(style="width: 40%") Criterios técnicos de manejo
                    tbody
                      tr
                        td Cerramiento perimetral
                        td Controlar el acceso a la explotación
                        td Resistente, continuo y en buen estado
                      tr
                        td Ingreso y control
                        td Regular entrada de personas y vehículos
                        td Acceso controlado y registro
                      tr
                        td Cuarentena
                        td Separar animales de ingreso
                        td Ubicación diferenciada y facilidad de limpieza
                      tr
                        td Reproducción
                        td Alojar animales reproductores
                        td Espacio, seguridad y facilidad de manejo
                      tr
                        td Maternidad
                        td Alojar hembras y camadas
                        td Higiene, seguridad y condiciones ambientales apropiadas
                      tr
                        td Precebo
                        td Alojar lechones después de maternidad
                        td Superficies seguras y manejo eficiente
                      tr
                        td Levante y ceba
                        td Alojar animales en crecimiento
                        td Espacio, ventilación y facilidad de limpieza
                      tr
                        td Enfermería
                        td Separar animales que requieren atención
                        td Aislamiento y facilidad para el seguimiento sanitario
                      tr
                        td Almacén de alimentos
                        td Proteger y conservar alimentos
                        td Seco, limpio y protegido de plagas
                      tr
                        td Comederos
                        td Suministrar alimento
                        td Accesibles, seguros y fáciles de limpiar
                      tr
                        td Bebederos
                        td Suministrar agua
                        td Funcionamiento continuo y limpieza
                      tr
                        td Pasillos
                        td Facilitar movilización
                        td Seguros, despejados y antideslizantes
                      tr
                        td Corrales de manejo
                        td Facilitar procedimientos
                        td Resistentes y sin elementos peligrosos
                      tr
                        td Drenajes
                        td Evacuar líquidos
                        td Despejados y con mantenimiento
                      tr
                        td Área de residuos
                        td Controlar residuos generados
                        td Separación y manejo adecuado
                      tr
                        td Equipos de limpieza
                        td Facilitar higiene
                        td Limpios, funcionales y organizados
            //- Fin Tabla


</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
<style lang="sass"></style>
