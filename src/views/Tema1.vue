<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Generalidades de la producción porcícola
      p(data-aos="fade-left") La producción porcícola integra las características biológicas del cerdo con los recursos y las condiciones de la explotación. Su planificación exige relacionar la genética, el sistema de alojamiento y las etapas productivas con las necesidades de manejo y bienestar. Esta unidad establece las bases para seleccionar alternativas de producción, organizar el flujo de animales y reconocer los factores que condicionan la salud, el desempeño y el uso eficiente de los recursos.
      Separador
      //- Inicio Tema1.1
      .row
        #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.1 Características de la especie, razas y sistemas de explotación
      p(data-aos="fade-left") Las características de la especie orientan las decisiones de alimentación, alojamiento, reproducción y manejo. La selección de razas y líneas genéticas debe ser coherente con el propósito productivo y con la capacidad de la granja. A su vez, el sistema de explotación determina cómo se organizan los recursos para responder a las necesidades de los animales.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Características generales de la especie porcina
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-start.mb-2
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            p(data-aos="fade-left") El cerdo doméstico pertenece a la especie <i>Sus scrofa domesticus</i>. Sus características anatómicas, fisiológicas y conductuales orientan el manejo dentro de la explotación. Es un animal monogástrico y omnívoro, con elevada capacidad de crecimiento y respuesta productiva a las mejoras en genética, alimentación, sanidad, ambiente y manejo.
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t1/img1.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 La especie porcina puede adaptarse a diferentes sistemas productivos, pero cada sistema debe garantizar condiciones apropiadas para los animales. La temperatura, la humedad, la ventilación, la calidad del piso, la densidad de alojamiento, el acceso al agua y al alimento, la interacción social y la posibilidad de desarrollar conductas propias de la especie influyen en su salud y bienestar.
          p.mb-3 Los cerdos son animales sociales que establecen relaciones de dominancia dentro del grupo. Por esta razón, la mezcla de animales desconocidos, la competencia por alimento o agua, la falta de espacio y determinados factores ambientales pueden incrementar las agresiones y generar lesiones. El diseño del alojamiento y las prácticas de manejo deben disminuir estos factores de riesgo.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t1/img2.png', alt='', style="width: 100%; height: auto;")
      .row.justify-content-center.align-items-stretch.mt-5.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La especie también posee una elevada sensibilidad a las condiciones térmicas. Los animales jóvenes presentan mayor susceptibilidad al frío, mientras que los animales adultos, especialmente las hembras gestantes y lactantes, pueden presentar dificultades para disipar el calor. Por ello, la ventilación, sombra, circulación de aire, disponibilidad de agua y estrategias de reducción del estrés térmico forman parte del manejo integral.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img3.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 En la explotación, los animales se clasifican según su estado fisiológico y productivo en lechones lactantes; animales de precebo, levante y ceba; hembras lactantes, gestantes, vacías o de reemplazo; y machos de reemplazo o reproductores. La metodología del ICA para evaluar el bienestar porcino también utiliza esta clasificación.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Relación entre fisiología y decisiones de manejo
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-center.mb-2
        .col-12.col-lg-7(data-aos="fade-left")
          p La condición de monogástrico obliga a evaluar la digestibilidad y el equilibrio de nutrientes del alimento. Una materia prima abundante puede aportar energía y, al mismo tiempo, resultar insuficiente en aminoácidos o minerales. Por ello, la selección de ingredientes debe relacionar composición, etapa productiva, consumo esperado y seguridad sanitaria; el volumen suministrado por sí solo no determina la calidad de la dieta.
          .d-flex.align-items-start
            img.d-none.d-lg-block.me-3(src="@/assets/curso/temas/bg/lineas.svg", style="width: 100%; max-width: 90px;", alt="")
            p.mb-3 La limitada capacidad de disipar calor mediante sudoración explica la importancia del agua, la sombra y la renovación de aire. En maternidad coexisten necesidades térmicas diferentes, ya que la cerda requiere evitar el exceso de calor y el lechón necesita un área de descanso protegida del frío. La solución consiste en gestionar microambientes y comprobar la respuesta de ambos grupos, en lugar de aplicar una única condición térmica a toda la sala.
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src="@/assets/curso/temas/t1/img4.png", data-aos="zoom-in", style="width: 600px;")
      p(data-aos="fade-left") La tabla que se presenta a continuación relaciona las características de la especie con sus implicaciones y las buenas prácticas recomendadas.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 1.
                  span Características de importancia para el manejo
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Característica
                        th(style="width: 40%") Implicación en la producción porcina
                        th(style="width: 40%") Buena práctica recomendada
                    tbody
                      tr
                        td Animal monogástrico
                        td Requiere dietas formuladas según edad, peso y estado fisiológico
                        td Ajustar la alimentación a cada etapa productiva
                      tr
                        td Elevada capacidad de crecimiento
                        td Permite obtener buenos resultados productivos cuando existe manejo adecuado
                        td Controlar peso, ganancia diaria y conversión alimenticia
                      tr
                        td Especie social
                        td Establece jerarquías y relaciones entre individuos
                        td Formar grupos homogéneos y evitar mezclas innecesarias
                      tr
                        td Sensibilidad al estrés térmico
                        td El calor excesivo afecta consumo, crecimiento, reproducción y bienestar
                        td Garantizar ventilación, agua y mecanismos de reducción del calor
                      tr
                        td Conducta exploratoria
                        td La restricción ambiental puede favorecer comportamientos anormales
                        td Implementar enriquecimiento ambiental apropiado
                      tr
                        td Alta prolificidad de las hembras
                        td Permite producir numerosas camadas
                        td Aplicar manejo reproductivo y sanitario planificado
                      tr
                        td Crecimiento rápido
                        td Las deficiencias de manejo pueden generar problemas locomotores
                        td Controlar piso, espacio, nutrición y condición corporal
                      tr
                        td Necesidad permanente de agua
                        td El agua es esencial para termorregulación y funciones fisiológicas
                        td Garantizar disponibilidad, calidad y flujo adecuado
                      tr
                        td Respuesta al manejo humano
                        td El trato brusco puede generar miedo y estrés
                        td Utilizar manejo tranquilo, progresivo y sin violencia
                      tr
                        td Comportamiento gregario
                        td La densidad y composición del grupo influyen en las interacciones
                        td Mantener grupos compatibles y evitar sobreocupación
            //- Fin Tabla
            //- Título nivel 3 - Imagen
            .titulo-tercer-nivel.mb-2.mt-3(data-aos="fade-right")
              img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
              h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Razas y líneas genéticas
            //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La selección genética porcina moderna busca combinar características maternas, crecimiento, eficiencia alimenticia, calidad de canal, rusticidad y calidad de carne. Por esta razón, en los sistemas comerciales es frecuente trabajar con líneas maternas, líneas paternas o terminales y animales híbridos, en lugar de depender exclusivamente de animales de raza pura.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img5.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 Entre las razas de mayor importancia internacional se encuentran <i>Large White, Landrace, Duroc y Pietrain</i>. Las características productivas de cada una permiten utilizarlas en programas de cruzamiento de acuerdo con los objetivos de la explotación.
      p(data-aos="fade-left") Cada raza o línea tiene características y usos distintos dentro del programa genético, como se presenta a continuación: 
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Large White</i>
                p <b>Características generales:</b> buena capacidad reproductiva, características maternales y buen desempeño productivo.
                p <b>Utilización frecuente:</b> línea materna o cruzamientos.
                p <b>Consideración para el productor:</b> adecuada para programas de reproducción y producción de lechones.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Landrace</i>
                p <b>Características generales:</b> cuerpo alargado y buenas características maternas y reproductivas.
                p <b>Utilización frecuente:</b> línea materna.
                p <b>Consideración para el productor:</b> frecuente en cruzamientos para obtener hembras comerciales.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Duroc</i>
                p <b>Características generales:</b> buena capacidad de crecimiento, rusticidad y características de calidad de carne.
                p <b>Utilización frecuente:</b> línea paterna o cruzamientos.
                p <b>Consideración para el productor:</b> puede contribuir al crecimiento y a la calidad de la carne.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 <i>Pietrain</i>
                p <b>Características generales:</b> alta musculatura y buena conformación de la canal.
                p <b>Utilización frecuente:</b> línea terminal.
                p <b>Consideración para el productor:</b> utilizada para aportar rendimiento cárnico.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Cruces comerciales
                p <b>Características generales:</b> combinan características de diferentes líneas.
                p <b>Utilización frecuente:</b> producción comercial.
                p <b>Consideración para el productor:</b> permiten aprovechar la complementariedad y la heterosis.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta01_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Líneas genéticas especializadas
                p <b>Características generales:</b> seleccionadas para objetivos productivos específicos.
                p <b>Utilización frecuente:</b> granjas tecnificadas.
                p <b>Consideración para el productor:</b> requieren registros y manejo acordes con el potencial genético.
      //- Fin Slideshow
      p(data-aos="fade-left") La elección genética debe considerar, además de la raza, el sistema de producción, las condiciones climáticas, la disponibilidad de alimento, el mercado objetivo, la infraestructura, la capacidad de manejo, la sanidad y las características de los reproductores. Una genética de alto potencial puede no alcanzar el desempeño esperado cuando existen deficiencias de nutrición, ambiente, sanidad o bienestar.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Criterios para seleccionar un programa genético
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La selección debe partir del producto final y de las restricciones de la granja. Si el propósito es producir lechones, adquieren especial importancia la supervivencia predestete, la capacidad materna y la longevidad de las hembras. Si el propósito es finalizar animales, se deben integrar crecimiento, conversión alimenticia y requerimientos del comprador. 
      .row.justify-content-center.align-items-center.mb-5
        .col-12.col-sm-9.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          figure.mb-0.text-center
            img.mx-auto(src="@/assets/curso/temas/t1/img6.png", data-aos="zoom-in", style="width: 600px;")      
        .col-12.col-lg-7(data-aos="fade-left")
          p El desempeño se compara entre animales sometidos a condiciones semejantes y durante periodos suficientes, evitando atribuir a la genética problemas originados en alimentación, instalaciones o sanidad.
          .d-flex.align-items-start
            img.d-none.d-lg-block.me-3(src="@/assets/curso/temas/bg/lineas.svg", style="width: 100%; max-width: 90px;", alt="")
            p.mb-3 En un cruzamiento, la complementariedad permite combinar atributos de líneas distintas y la heterosis puede mejorar determinados resultados respecto al promedio parental. Esto no garantiza uniformidad ni superioridad en cualquier ambiente. Deben identificarse los reproductores, conservar el origen del material genético y evitar apareamientos entre individuos estrechamente emparentados. La reposición requiere un plan propio y no debe depender de seleccionar animales comerciales sin antecedentes.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Sistemas de explotación porcina
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-start.mb-2
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            p(data-aos="fade-left") La OMSA reconoce sistemas de producción cerrados o bajo techo, al aire libre y combinados, dependiendo de la forma en que los animales se alojan y de su grado de dependencia de las personas para satisfacer sus necesidades básicas.
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t1/img7.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 En Colombia pueden encontrarse desde sistemas de traspatio y pequeña escala hasta granjas comerciales altamente tecnificadas. La metodología del ICA para bienestar porcino reconoce específicamente la existencia de predios de traspatio y granjas comerciales, además de diferenciar granjas de reproducción o cría y granjas de levante y ceba.
          p.mb-3 Un ejemplo frecuente de cruzamiento consiste en aparear Yorkshire con Landrace para obtener una hembra F1, es decir, de primera generación filial. Esta hembra se cruza luego con un macho terminal, como Duroc o Berkshire, para producir cerdos destinados al mercado. El esquema ilustra la complementariedad entre líneas y no constituye un programa genético obligatorio.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t1/img8.png', alt='', style="width: 100%; height: auto;")
      p(data-aos="fade-left") Los sistemas de explotación difieren en alojamiento, alimentación, genética, registros, sanidad y riesgos, cuya comparación se presenta en la tabla a continuación.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 2.
                  span Comparación de sistemas de explotación
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 20%") Aspecto
                        th(style="width: 27%") Sistema tecnificado/confinado
                        th(style="width: 27%") Sistema semi tecnificado o combinado
                        th(style="width: 26%") Sistema de traspatio/pequeña escala
                    tbody
                      tr
                        td Alojamiento
                        td Instalaciones especializadas
                        td Combinación de instalaciones y áreas externas
                        td Instalaciones sencillas
                      tr
                        td Alimentación
                        td Dietas formuladas y controladas
                        td Combinación de alimentos comerciales y recursos disponibles
                        td Mayor utilización de recursos locales
                      tr
                        td Genética
                        td Alta especialización
                        td Variable
                        td Generalmente menos especializada
                      tr
                        td Registros
                        td Amplios y sistemáticos
                        td Variables
                        td Pueden ser limitados
                      tr
                        td Sanidad
                        td Programas sanitarios estructurados
                        td Programa adaptado al tamaño
                        td Manejo sanitario básico que debe fortalecerse
                      tr
                        td Bioseguridad
                        td Alta exigencia
                        td Exigente y ajustada al riesgo del sistema
                        td Esencial; adaptada a recursos, ubicación y riesgo sanitario
                      tr
                        td Tecnología
                        td Alta
                        td Media
                        td Baja o intermedia
                      tr
                        td Control ambiental
                        td Mayor posibilidad de regulación
                        td Parcial
                        td Principalmente mediante diseño y manejo
                      tr
                        td Productividad
                        td Alta cuando el sistema está correctamente manejado
                        td Media-alta
                        td Variable
                      tr
                        td Bienestar
                        td Depende de la calidad del manejo, no solamente del nivel tecnológico
                        td Depende del equilibrio entre recursos y manejo
                        td Debe garantizarse alimentación, agua, refugio, sanidad y trato adecuado
                      tr
                        td Registros productivos
                        td Esenciales
                        td Recomendados
                        td Fundamentales para mejorar la toma de decisiones
                      tr
                        td Principal riesgo
                        td Intensificación inadecuada, sobreocupación y fallas de bioseguridad
                        td Variabilidad del manejo
                        td Limitaciones sanitarias, ambientales y de infraestructura
            //- Fin Tabla
      p(data-aos="fade-left") El nivel tecnológico no determina por sí solo el bienestar. La evaluación debe integrar resultados en los animales, condiciones de los recursos y calidad de la gestión, con acciones correctivas comprobables.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elección del sistema según recursos y riesgos
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 La comparación de sistemas exige identificar la disponibilidad estable de agua, alimento, personal y capital de trabajo. Una mayor cantidad de animales incrementa simultáneamente la demanda de alojamiento, la generación de deyecciones y la necesidad de control sanitario. Antes de ampliar el inventario debe comprobarse qué recurso limita la producción y cuánto costaría corregirlo. La capacidad nominal de los corrales no equivale a la capacidad funcional si existen fallas de bebida, ventilación o manejo de residuos.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img9.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 En sistemas al aire libre, la planificación debe incluir refugios, drenaje, protección del suelo y control del contacto con otros animales. En confinamiento, debe priorizarse la confiabilidad del suministro de agua y de los equipos ambientales. Los sistemas combinados requieren controlar los desplazamientos entre zonas para reducir la transferencia de agentes infecciosos. 
      p(data-aos="fade-left") La bioseguridad debe ser exigente en todos los sistemas y adaptarse al riesgo, independientemente del nivel tecnológico.
      Separador
      //- Inicio Tema1.2
      .row
        #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.2 Etapas del proceso productivo
      p(data-aos="fade-left") La producción porcina debe organizarse como un proceso continuo en el que cada etapa tiene objetivos, requerimientos y riesgos específicos. La metodología de bienestar del ICA identifica como estados productivos los lechones lactantes, precebo, levante-ceba, hembras lactantes, hembras gestantes, hembras vacías, hembras de reemplazo, machos de reemplazo y machos reproductores.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Principales etapas
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Cada etapa productiva reúne animales con necesidades y riesgos particulares. Diferenciar estas etapas permite programar el alojamiento, la alimentación, la atención sanitaria y los movimientos internos. El objetivo de cada fase y sus prioridades de manejo se explican a continuación:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Reproducción
                p Incluye el manejo de hembras de reemplazo, hembras vacías, gestantes y lactantes, y machos reproductores. Busca una reproducción eficiente, conservar la salud de los reproductores y producir lechones viables. Comprende la selección de reproductores, la detección del celo, la monta o inseminación, el diagnóstico y seguimiento de la gestación, la preparación para el parto y el manejo de la hembra durante la lactancia.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Gestación
                p La hembra gestante requiere alimentación, agua, ambiente y manejo ajustados a su estado fisiológico. Deben vigilarse la condición corporal, las cojeras, las lesiones, la enfermedad y los signos de estrés. La condición corporal permite identificar animales con reservas insuficientes o excesivas y ajustar el manejo nutricional.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Parto y lactancia
                p Es una etapa crítica por la interacción entre la salud de la madre y la supervivencia de los lechones. Requiere vigilancia, higiene, preparación del área de parto y atención oportuna de los animales con dificultades. La prioridad es reducir la mortalidad neonatal, asegurar el consumo de calostro, mantener condiciones térmicas apropiadas para los lechones y permitir que la cerda descanse, se alimente y beba adecuadamente.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Lechones lactantes
                p Comprende el periodo desde el nacimiento hasta el destete. Se realizan prácticas de identificación y manejo y se controlan el crecimiento, la vitalidad, la salud y la condición de los animales. Las intervenciones que puedan generar dolor solo se realizan cuando están justificadas, con procedimientos técnicamente adecuados y medidas de prevención y control del dolor.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Precebo
                p Corresponde al periodo posterior al destete, con cambios importantes de alimentación, alojamiento y organización social. El manejo debe minimizar el estrés del destete y de la mezcla de animales; el espacio, la calidad del aire, el acceso al agua y al alimento y la estabilidad del grupo son determinantes.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta03_6.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Levante y ceba
                p Busca maximizar el crecimiento y la eficiencia de conversión, manteniendo la sanidad y el bienestar. Se vigilan el peso, la ganancia diaria, el consumo, la conversión, las lesiones, las cojeras, la mortalidad y el comportamiento.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Organización por lotes y continuidad del proceso
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Un lote agrupa animales con condiciones productivas compatibles y una fecha de entrada definida. La programación por lotes facilita estimar el alimento, reservar espacios y ejecutar la limpieza entre ocupaciones. El principio de todo dentro y todo fuera debe aplicarse por sala o unidad funcional cuando la infraestructura lo permita; en este esquema se completa la salida del grupo, se higieniza y se prepara el área antes del siguiente ingreso. Añadir animales rezagados a lotes más jóvenes puede alterar el flujo sanitario y la uniformidad.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img10.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 El traslado a una nueva etapa requiere confirmar simultáneamente la aptitud de los animales y la disponibilidad del área receptora. No debe adelantarse un movimiento únicamente para liberar espacio. El responsable debe documentar cantidad transferida, peso o criterio de clasificación, fecha, origen, destino y novedades. La conciliación entre inventario inicial, entradas, salidas y bajas permite identificar errores de registro y pérdidas no explicadas.
      p(data-aos="fade-left") La tabla que se presenta a continuación relaciona las etapas del proceso con sus objetivos, actividades, indicadores y riesgos.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 3.
                  span Etapas del proceso productivo porcino
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 15%") Etapa
                        th(style="width: 15%") Animales
                        th(style="width: 15%") Objetivo principal
                        th(style="width: 20%") Actividades de manejo
                        th(style="width: 17%") Indicadores de seguimiento
                        th(style="width: 18%") Riesgos principales
                    tbody
                      tr
                        td Reemplazo
                        td Hembras y machos jóvenes
                        td Seleccionar futuros reproductores
                        td Selección, identificación, adaptación
                        td Peso, edad, condición corporal, salud
                        td Selección inadecuada
                      tr
                        td Reproducción
                        td Hembras y machos
                        td Lograr gestaciones eficientes
                        td Detección de celo, monta/inseminación
                        td Tasa de concepción, retorno a celo
                        td Fallas reproductivas
                      tr
                        td Gestación
                        td Hembras gestantes
                        td Mantener gestación y condición corporal
                        td Alimentación, evaluación, control sanitario
                        td Condición corporal, abortos, lesiones
                        td Estrés, problemas locomotores
                      tr
                        td Parto
                        td Hembras próximas al parto
                        td Obtener lechones viables
                        td Preparación, vigilancia y atención
                        td Mortalidad neonatal, nacidos vivos
                        td Distocias, aplastamiento, hipotermia
                      tr
                        td Lactancia
                        td Cerda y lechones
                        td Garantizar crecimiento y supervivencia
                        td Lactancia, vigilancia, manejo de camada
                        td Peso, mortalidad, consumo
                        td Hipotermia, diarrea, inanición
                      tr
                        td Precebo
                        td Lechones destetados
                        td Adaptación posdestete
                        td Alimentación, agrupamiento, evaluación
                        td Ganancia de peso, consumo, mortalidad
                        td Estrés, diarrea, agresiones
                      tr
                        td Levante
                        td Cerdos en crecimiento
                        td Obtener crecimiento eficiente
                        td Alimentación, manejo de grupos
                        td Ganancia diaria, conversión
                        td Cojeras, lesiones, competencia
                      tr
                        td Ceba
                        td Cerdos próximos a mercado
                        td Alcanzar peso y calidad de canal
                        td Alimentación, sanidad, bienestar
                        td Peso, conversión, mortalidad
                        td Estrés térmico, lesiones
                      tr
                        td Descarte
                        td Reproductores o animales no aptos
                        td Retirar animales de forma responsable
                        td Evaluación, movilización y disposición
                        td Causa de descarte
                        td Dolor, transporte inadecuado
            //- Fin Tabla
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Secuencia general del proceso productivo porcino
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La secuencia comprende selección de reproductores, detección del celo y servicio, gestación, preparación de maternidad, parto y lactancia, destete, precebo, levante, ceba y salida a planta de beneficio. El lechón lactante corresponde a la cría durante la lactancia, no a una fase posterior. Sanidad, bioseguridad, alimentación, bienestar, registros y manejo ambiental acompañan todo el proceso.
      Separador
      //- Inicio Tema1.3
      .row
        #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.3 Manejo y bienestar animal
      p(data-aos="fade-left") El manejo debe responder a las necesidades físicas y conductuales de los porcinos durante toda su permanencia en la explotación. El bienestar se evalúa mediante la condición de los animales, los recursos disponibles y las prácticas del personal. Estos criterios permiten identificar problemas, priorizar acciones correctivas y comprobar si las decisiones productivas mantienen condiciones apropiadas de vida y atención.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Concepto actualizado de bienestar animal
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") El bienestar animal comprende el estado físico y mental del animal en relación con las condiciones en las que vive y muere. El ICA incorpora esta perspectiva dentro de la producción primaria y actualmente cuenta con una Metodología para evaluar el bienestar animal en porcinos, versión 4.0, actualizada para alinearse con las directrices más recientes de la OMSA. Esta metodología integra las cinco libertades y los cinco dominios, y organiza los indicadores en medidas basadas en el animal, los recursos y la gestión.
      p(data-aos="fade-left") La legislación colombiana reconoce además a los animales como seres sintientes y establece obligaciones de protección frente al dolor y el sufrimiento. El marco nacional incluye la Ley 1774 de 2016, el Decreto 2113 de 2017 y la Resolución 136 de 2020 para las especies porcinas, ovinas, caprinas y équidas.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Las cinco libertades aplicadas a los porcinos
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") Las cinco libertades orientan la prevención de condiciones que comprometen el bienestar. Su aplicación exige traducir cada principio en recursos disponibles, prácticas de manejo y resultados comprobables en los animales, como se explica enseguida:
      //- Slideshow
      .bg-full-width.bg-fondo-slider.mb-5
        .p-4.p-md-5
          SlyderA(tipo="b").bg-white.p-4.tarjeta(data-aos="fade-left")
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_1.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Libres de hambre, sed y malnutrición
                p El productor debe garantizar acceso suficiente a agua y alimento según la etapa productiva. La disponibilidad no se evalúa solo por la existencia del recurso, sino por la capacidad real del animal para acceder a él. La evaluación del ICA incluye el estado y la limpieza de los comederos, y el acceso al agua y el funcionamiento, la altura, la limpieza y la disponibilidad de los bebederos.                    
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_2.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Libres de molestias físicas y térmicas
                p Las instalaciones deben proporcionar condiciones adecuadas de descanso, ventilación y protección frente a condiciones ambientales adversas. La OMSA señala que deben diseñarse y mantenerse para reducir lesiones, enfermedad y estrés, y que los animales expuestos a condiciones climáticas adversas deben disponer de refugio.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_3.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Libres de dolor, lesiones y enfermedad
                p La prevención sanitaria es prioritaria; implica vacunación cuando corresponda, diagnóstico temprano, atención de animales enfermos, control de lesiones, manejo adecuado de medicamentos y procedimientos dolorosos técnicamente justificados. La metodología del ICA incorpora indicadores como cojeras, heridas graves, descolmillado, descole, castración y uso de medicamentos veterinarios.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_4.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Libres de temor y angustia
                p El personal debe manejar a los animales sin gritos, golpes, persecuciones innecesarias ni uso inadecuado de elementos de conducción. La respuesta de los animales a la interacción con las personas es un indicador de la calidad de esa relación y forma parte de la metodología del ICA.
            .row.align-items-center.p-4.p-md-5
              .col-lg-5.order-2
                figure
                  img(src='@/assets/curso/temas/t1/tarjeta04_5.png')
              .col-lg-7.order-1.mb-3.mb-lg-0
                h4 Libres para expresar comportamientos naturales
                p El ambiente debe permitir conductas propias de la especie dentro del sistema productivo. El enriquecimiento ambiental ofrece oportunidades de exploración, manipulación e interacción social; cuando sea posible, los materiales deben ser destructibles, masticables, inocuos y, de ser apropiado, de valor nutricional, como paja, cuerdas, botellas y cadenas.
      //- Fin Slideshow
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-3(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Cinco dominios del bienestar animal
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La actualización del enfoque de bienestar no debe limitarse a las cinco libertades. La versión 4.0 de la metodología del ICA señala expresamente la integración de las cinco libertades con los cinco dominios, buscando considerar la intensidad y acumulación de experiencias positivas y negativas durante la vida del animal.
      p(data-aos="fade-left") Los cinco dominios integran las condiciones físicas con el estado mental del animal. Lo que se evalúa en cada uno y los ejemplos de manejo se resumen a continuación:
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
                          img(src='@/assets/curso/temas/t1/tarjeta05_1.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Nutrición
                            p Se evalúan la alimentación, el agua y el estado nutricional; se atiende con dieta adecuada, acceso permanente al agua y control de la condición corporal.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta05_2.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Ambiente físico
                            p Se evalúan temperatura, ventilación, espacio, piso y descanso; se atiende con control térmico, pisos seguros y áreas adecuadas.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta05_3.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Salud
                            p Se evalúan enfermedades, lesiones, dolor y cojera; se atiende con prevención, diagnóstico, tratamiento y registros.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta05_4.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Interacciones conductuales
                            p Se evalúan las relaciones con otros animales y con las personas; se atiende con manejo tranquilo y grupos compatibles.
                        .bg-white.tarjeta.h-100.shadow-app.bordes.overflow-hidden
                          img(src='@/assets/curso/temas/t1/tarjeta05_5.png').w-100
                          .p-4
                            h4.card-title.text-center.mb-3 Estado mental
                            p Se evalúan miedo, estrés, confort y experiencias positivas; se atiende con buen trato, enriquecimiento y menos factores estresantes.
            //- Fin Carrusel
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Indicadores actuales de bienestar en la producción porcina
      //- Título nivel 3 - Imagen
      p(data-aos="fade-left") La evaluación del bienestar debe relacionar los recursos disponibles con sus efectos en los animales. La existencia de instalaciones y equipos adecuados debe contrastarse con resultados de salud, comportamiento y desempeño.
      p(data-aos="fade-left") La metodología del ICA para evaluar el bienestar porcino, versión 4.0 de 2025, organiza los indicadores en tres categorías, que se detallan enseguida:
      //- Pestanas horizontales
      .container.tarjeta.tarjeta--blanca.p-4.p-md-5(data-aos="fade-right")
          TabsC.color-acento-contenido.mt-1
            .py-3.py-md-4(titulo="Basados en los recursos")
              .row.align-items-center
                .col-md-6
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta06_1.png')
                .col-md-6.mb-4.mb-md-0
                  h4 Basados en los recursos
                  p Evalúan las condiciones proporcionadas al animal, como el estado y la limpieza de los comederos, el acceso y flujo del agua, la limpieza, altura, número y disponibilidad de los bebederos, la protección ambiental, la ventilación, la superficie de descanso, el espacio disponible, las instalaciones para lechones y las condiciones de movilización.
            .py-3.py-md-4(titulo="Basados en el animal")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta06_2.png')
                .col-md-6
                  h4 Basados en el animal
                  p Evalúan directamente el estado del cerdo, como la condición corporal, las cojeras, el jadeo, el temblor, el amontonamiento, las heridas graves, la interacción con el enriquecimiento, la respuesta ante el contacto humano, la identificación, las consecuencias de prácticas dolorosas y la atención de animales enfermos.
            .py-3.py-md-4(titulo="Basados en la gestión")
              .row.align-items-center
                .col-md-6.mb-4.mb-md-0
                  figure
                    img(src='@/assets/curso/temas/t1/tarjeta06_3.png')
                .col-md-6
                  h4 Basados en la gestión
                  p Evalúan lo que hace el personal y cómo se organiza la explotación, como el plan de contingencia ante falta de agua y alimento, el plan sanitario, el uso de medicamentos veterinarios, el registro de mortalidad, las intervenciones quirúrgicas, el sacrificio humanitario y la capacitación del personal.
      //- Cierres Pestanas horizontales
      p(data-aos="fade-left") La integración de indicadores del animal, de los recursos y de la gestión permite contrastar los registros con las condiciones de la explotación y con los resultados del manejo.
      //- Título nivel 3 - Imagen
      .titulo-tercer-nivel.mb-5.mt-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/bg/titulos.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Del indicador de bienestar a la acción correctiva
      //- Título nivel 3 - Imagen
      .row.justify-content-center.align-items-stretch.mb-5
        .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
          .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
            p.mb-0 Un indicador solo resulta útil si conduce a una decisión. Ante un aumento de cojeras, el responsable debe cuantificar animales afectados, identificar corrales y etapas, comprobar el estado del piso y solicitar valoración de los casos. La acción puede incluir reparación del área, reducción de obstáculos, ajuste del manejo o atención individual. El cierre del hallazgo requiere una nueva evaluación que determine si disminuyeron las lesiones y si los animales recuperaron acceso al agua y al alimento.
        .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
          .h-100.d-flex
            img.rounded-3(src="@/assets/curso/temas/t1/img11.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
        .col-12.col-md-12.col-lg-4(data-aos="fade-left")
          .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
            .mb-3.d-flex.justify-content-start
              img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
            p.mb-0 Los resultados deben analizarse por lote y en comparación con la línea de base de la granja. Un promedio general puede ocultar un corral con problemas. Deben mantenerse las mismas definiciones y denominadores en cada periodo. Por ejemplo, registrar tres animales lesionados carece de contexto si no se especifica cuántos integraban el lote y durante cuánto tiempo estuvieron expuestos al riesgo.
      Separador
      //- Inicio Tema1.4
      .row
        #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
          h2 1.4 Buenas Prácticas Ganaderas aplicadas a las generalidades de la producción porcina
      .row.justify-content-center.align-items-start.mb-2
        .col-12.col-md-8.col-lg-9.order-2.order-lg-1(data-aos="fade-right")
          .row.align-items-stretch.mb-4.g-0
            p(data-aos="fade-left") La Resolución ICA 076509 de 2020 establece los requisitos específicos para obtener la certificación en BPG en producción porcina. El ICA mantiene actualmente esta resolución como referencia para la certificación BPG porcina y la lista de chequeo Forma 3-1674 V.2.
            .col-12.col-lg-6.mb-4.mb-lg-0
              figure.mb-0.h-100
                img(src='@/assets/curso/temas/t1/img12.png', alt='', style="width: 100%; height: 100%; object-fit: cover;")
            .col-12.col-lg-6
              .bg-color-2.p-4.h-100.d-flex.align-items-center
                p.mb-0 Dentro de este enfoque, las generalidades de la explotación deben relacionarse con la sanidad, la bioseguridad, el bienestar, la alimentación, el uso de medicamentos, el saneamiento, la gestión del personal, los registros, la inocuidad y la protección ambiental.
          p.mb-3 Las BPG buscan gestionar los riesgos biológicos, físicos y químicos presentes en la producción primaria y, simultáneamente, promover sanidad, bienestar animal y protección ambiental.
        .col-12.col-md-4.col-lg-3.order-1.order-lg-2.mb-4.mb-lg-0(data-aos="fade-left")
          figure.mb-0
            img.mx-auto(src='@/assets/curso/temas/t1/img13.png', alt='', style="width: 100%; height: auto;")
      p(data-aos="fade-left") La tabla que se presenta a continuación reúne el marco normativo colombiano que orienta la producción porcina.
      .row.bg-fondo-2(data-aos="fade-right")
        .col-12
          .pt-3.pb-5.px-5
            //- Inicio Tabla
            .row.justify-content-center.mb-5(data-aos="fade-right")
              .col-md-auto.col-lg-10
                .titulo-sexto.color-acento-contenido.mb-3
                  h5 Tabla 4.
                  span Marco normativo colombiano para la producción porcina
                .tabla-a
                  table
                    thead
                      tr
                        th(style="width: 35%") Norma/documento
                        th(style="width: 65%") Aplicación en producción porcina
                    tbody
                      tr
                        td Ley 84 de 1989
                        td Estatuto Nacional de Protección de los Animales
                      tr
                        td Ley 1774 de 2016
                        td Reconoce a los animales como seres sintientes y fortalece la protección frente al dolor y sufrimiento
                      tr
                        td Decreto 2113 de 2017
                        td Establece disposiciones generales sobre bienestar animal para especies de producción
                      tr
                        td Resolución MADR 136 de 2020
                        td Adopta el Manual de Condiciones de Bienestar Animal para équidos, porcinos, ovinos y caprinos
                      tr
                        td Resolución ICA 076509 de 2020
                        td Establece requisitos para certificación BPG en producción porcina
                      tr
                        td Resolución ICA 115708 de 2021
                        td Regula la Autorización Sanitaria y de Inocuidad (ASI) para predios de producción primaria, incluidos porcinos
                      tr
                        td Resolución ICA 16409 de 2024
                        td Establece requisitos para certificación en bienestar animal en producción primaria pecuaria
                      tr
                        td Resolución ICA 08452 de 2025
                        td Modifica disposiciones de la Resolución ICA 16409 de 2024
                      tr
                        td Metodología ICA para evaluar bienestar animal en porcinos, versión 4.0
                        td Actualiza la evaluación del bienestar porcino e incorpora el enfoque de cinco libertades y cinco dominios
                      tr
                        td Código Terrestre de la OMSA, capítulo 7.13
                        td Referente internacional para bienestar y sistemas de producción de cerdos
                      tr
                        td Resolución ICA 16023 de 2023
                        td Modifica la Resolución 115708 de 2021 sobre Autorización Sanitaria y de Inocuidad.
            //- Fin Tabla
            p(data-aos="fade-left") A este marco se suman la Ley 1659 de 2013, que crea el Sistema Nacional de Identificación, Información y Trazabilidad Animal; la normativa sanitaria para el control de la peste porcina clásica, que define la identificación oficial y la documentación de ciertos movimientos; y las Resoluciones ICA 1577 y 7892 de 2022 sobre material genético animal.
            .row.justify-content-center.align-items-stretch.mb-5
              .col-12.col-md-6.col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
                .bg-color-3.p-4.rounded-4.h-100.d-flex.align-items-center
                  p.mb-0 El ICA señala actualmente como normativa de bienestar animal, entre otras, las Resoluciones 136 de 2020, 16409 de 2024 y 08452 de 2025. La Resolución 08452 de 2025 modificó determinados artículos de la Resolución 16409 de 2024 y mantuvo vigentes las demás disposiciones de esta última.
              .col-12.col-md-6.col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
                .h-100.d-flex
                  img.rounded-3(src="@/assets/curso/temas/t1/img14.png", alt="", style="width: 100%; height: 100%; object-fit: cover;")
              .col-12.col-md-12.col-lg-4(data-aos="fade-left")
                .h-100.d-flex.flex-column.justify-content-end.ps-lg-4
                  .mb-3.d-flex.justify-content-start
                    img(src="@/assets/curso/temas/bg/titulos.svg", alt="", style="width: 90px; height: 90px; object-fit: contain;")
                  p.mb-0 Además, la ASI es un instrumento diferente de la certificación BPG, ya que el ICA la utiliza para habilitar al predio de producción primaria bajo los requisitos sanitarios, de bioseguridad, alimentación, medicamentos, bienestar y saneamiento establecidos en la normativa correspondiente.
</template>

<script>
export default {
  name: 'Tema1',
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
