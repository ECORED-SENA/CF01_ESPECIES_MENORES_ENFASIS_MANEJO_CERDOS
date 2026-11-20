export default {
  global: {
    Name: 'Planificación y manejo integral de la explotación porcícola',
    Description:
      'Este componente formativo desarrolla criterios técnicos para planificar y adecuar explotaciones porcícolas según las etapas productivas y reproductivas. Integra instalaciones, equipos, alimentación, sanidad, bioseguridad y bienestar animal, mediante procedimientos, registros y cálculos aplicados. Orienta la organización de recursos, el manejo responsable de reproductores y lechones, la prevención de riesgos y la toma de decisiones para mejorar la productividad, la inocuidad y la sostenibilidad.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Generalidades de la producción porcícola',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo:
              'Características de la especie, razas y sistemas de explotación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Etapas del proceso productivo',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Manejo y bienestar animal',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Buenas Prácticas Ganaderas aplicadas a las generalidades de la producción porcina',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Instalaciones y equipos porcícolas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipos, áreas y distribución de las instalaciones',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Equipos y elementos para el manejo',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Preparación, adecuación e higiene de las instalaciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Manejo según la etapa productiva',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Manejo de reproductores, hembras y lechones',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Movimientos de los animales dentro de las instalaciones',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Manejo e identificación de los animales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Secuencia de manejo integral según la etapa productiva',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Protocolo para movilización interna de porcinos',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Bienestar animal aplicado al manejo de los porcinos',
            hash: 't_3_6',
          },
          {
            numero: '3.6',
            titulo: 'Buenas Prácticas Ganaderas aplicadas al manejo',
            hash: 't_3_6',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Bienestar animal',
      significado:
        'Estado físico y mental del animal en relación con las condiciones en las que vive y muere.',
    },
    {
      termino: 'Bioseguridad',
      significado:
        'Conjunto de medidas preventivas que reducen la entrada, circulación y salida de agentes infecciosos en la explotación.',
    },
    {
      termino: 'Caudofagia',
      significado:
        'Conducta anormal en la que los cerdos muerden la cola de sus compañeros de grupo.',
    },
    {
      termino: 'Cinco dominios',
      significado:
        'Enfoque de bienestar animal que evalúa la nutrición, el ambiente físico, la salud, las interacciones conductuales y el estado mental del animal.',
    },
    {
      termino: 'Cuarentena',
      significado:
        'Periodo de separación de los animales recién ingresados para evaluar su estado sanitario antes de incorporarlos al grupo.',
    },
    {
      termino: 'Enriquecimiento ambiental',
      significado:
        'Conjunto de elementos seguros que ofrecen a los cerdos oportunidades de exploración, manipulación e interacción social.',
    },
    {
      termino: 'Etapa productiva',
      significado:
        'Fase fisiológica del cerdo que presenta requerimientos específicos de manejo y nutrición.',
    },
    {
      termino: 'Lote',
      significado:
        'Grupo de animales con condiciones productivas compatibles y una fecha de ingreso definida.',
    },
    {
      termino: 'Plaza',
      significado:
        'Espacio funcional disponible para alojar a un animal dentro de un área de la explotación.',
    },
    {
      termino: 'Todo dentro y todo fuera',
      significado:
        'Principio de manejo mediante el cual un área se ocupa y desocupa completamente con un mismo lote antes de realizar su limpieza y desinfección.',
    },
    {
      termino: 'Trazabilidad',
      significado:
        'Capacidad de reconstruir el origen, los movimientos y los eventos productivos, reproductivos y sanitarios de un animal o lote.',
    },
  ],
  referencias: [
    {
      referencia:
        'Congreso de Colombia. (2013). Ley 1659 de 2013, por medio de la cual se crea el Sistema Nacional de Identificación, Información y Trazabilidad Animal.',
      link: '',
    },
    {
      referencia:
        'Congreso de Colombia. (2016). Ley 1774 de 2016, por medio de la cual se modifican el Código Civil, la Ley 84 de 1989, el Código Penal, el Código de Procedimiento Penal y se dictan otras disposiciones.',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (s. f.). Inocuidad en la producción pecuaria primaria y bienestar animal.',
      link: 'https://www.ica.gov.co/areas/pecuaria/servicios/inocuidad-en-las-cadenas-agroalimentarias.aspx',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2020). Resolución 076509 de 2020, por medio de la cual se establecen los requisitos para obtener la certificación en Buenas Prácticas Ganaderas en la producción porcina.',
      link: 'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/2020/2020r76509',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2023). Resolución 16023 de 2023, por la cual se modifica la Resolución 115708 de 2021 sobre la Autorización Sanitaria y de Inocuidad.',
      link: 'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/2023/2023r00016023',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2024). Resolución 16409 de 2024, por la cual se establecen los requisitos para la certificación en bienestar animal en la producción primaria pecuaria.',
      link: 'https://www.ica.gov.co/normatividad/normas-ica/resoluciones-oficinas-nacionales/2024/2024r00016409',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2025a). Metodología para evaluar bienestar animal en porcinos (versión 4.0).',
      link: '',
    },
    {
      referencia:
        'Instituto Colombiano Agropecuario. (2025b). Resolución 00008452 de 2025, por medio de la cual se modifica la Resolución ICA 00016409 de 2024.',
      link: '',
    },
    {
      referencia:
        'Ministerio de Agricultura y Desarrollo Rural. (2020). Resolución 136 de 2020, por la cual se adopta el Manual de Condiciones de Bienestar Animal propias de cada una de las especies de producción en el sector agropecuario.',
      link: '',
    },
    {
      referencia:
        'Organización Mundial de Sanidad Animal. (s. f.). Código Sanitario para los Animales Terrestres. Capítulo 7.13. Bienestar animal y sistemas de producción de cerdos.',
      link: 'https://www.woah.org/fileadmin/Home/eng/Health_standards/tahc/current/chapitre_aw_pigs.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06  <br> Responsable Ecosistema Virtual de Recursos Educativos Digitales  ',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Eliana Audrey Manchola Pérez ',
          cargo: 'Experto temático ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
        {
          nombre: 'Paola Alexandra Moya ',
          cargo: 'Evaluadora instruccional ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan José Calderon Gutierrez',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Henry Alvarez Astudillo',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta ',
          cargo: 'Intérprete lenguaje de señas  ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura ',
          cargo: 'Intérprete lenguaje de señas ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y productor audiovisual ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Maria Carolina Tamayo Lopez ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos ',
          cargo: 'Locución ',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa ',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
