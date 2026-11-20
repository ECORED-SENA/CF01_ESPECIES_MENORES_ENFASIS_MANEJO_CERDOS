<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                       
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Planificación y manejo integral de la explotación porcícola',
      titulo:
        'Cuestionario de planificación y manejo integral de la explotación porcícola',
      introduccion:
        '<b>Objetivo:</b> verificar la apropiación de conceptos sobre generalidades de la producción porcícola, instalaciones, manejo por etapas, reproducción, alimentación y sanidad.',
      barajarPreguntas: false,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué característica fisiológica obliga a ajustar la dieta del cerdo según su edad, peso y estado fisiológico?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Es un animal monogástrico.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Es un rumiante.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Suda en abundancia.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'No requiere agua permanente.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué principio consiste en ocupar y desocupar por completo un área con un mismo lote antes de higienizarla?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mezcla continua de lotes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Todo dentro y todo fuera.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Rotación de potreros.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ocupación mixta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de las siguientes es una de las cinco libertades del bienestar animal?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Libre de vacunación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Libre de registros.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Libre de temor y angustia.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Libre de instalaciones.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una sala recibe 20 animales cada 14 días, con 35 días de permanencia y 7 de higienización. ¿Cuántas salas se requieren?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '2 salas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '5 salas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '4 salas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '3 salas.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Por qué la desinfección se realiza después de una limpieza completa?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La materia orgánica reduce la eficacia del desinfectante.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El agua inactiva cualquier producto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Así se ahorra detergente.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La limpieza reemplaza la desinfección.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Qué área aloja por separado a los animales de ingreso para evaluar su estado sanitario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maternidad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cuarentena o adaptación.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Levante y ceba.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Bodega de alimentos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto: '¿Qué práctica es adecuada al movilizar porcinos?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Arrastrarlos por las orejas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la presión si se amontonan.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Orientarlos con paneles y darles tiempo.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Gritar para acelerar el paso.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Un lote inicia con 80 animales, recibe 5, registra 2 muertes y transfiere 60. ¿Cuál es el saldo esperado?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '25 animales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '23 animales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '22 animales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '27 animales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué signo indica con mayor precisión que la cerda está receptiva?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminución del consumo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reflejo de inmovilidad ante la presión dorsal.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumento de peso.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Tos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Una hembra fue servida el 10 de agosto de 2026. ¿Cuál es su fecha probable de parto?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '2 de diciembre de 2026.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '10 de noviembre de 2026.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '20 de diciembre de 2026.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '2 de enero de 2027.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto: '¿Qué indica el retorno al celo después del servicio?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una gestación confirmada.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Un parto próximo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Posible falla de concepción o pérdida temprana.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exceso de condición corporal.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'En una cohorte de 40 hembras servidas se registran 34 partos. ¿Cuál es la tasa de parto?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '90 %.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '34 %.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '80 %.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '85 %.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto: '¿Cuándo debe intervenirse a la cerda durante el parto?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'En todos los partos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Solo cuando existe una razón técnica.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Únicamente en la noche.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nunca, aunque haya distocia.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            '¿Qué aminoácido es un referente principal para valorar la calidad proteica de dietas de crecimiento?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Calcio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Fibra.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Lisina.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Vitamina A.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            'Un lote de 25 cerdos recibe 2,2 kg por animal al día. ¿Cuánto alimento requiere al día?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '55 kg.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: '22 kg.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '27,2 kg.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '50 kg.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'Un cerdo consume 70 kg de alimento y gana 28 kg. ¿Cuál es su conversión alimenticia?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: '0,4.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '2,5.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: '42.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: '98.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto: '¿Cuál debe ser la primera respuesta ante la caudofagia?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Descolar a todos los lechones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Aumentar la densidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Identificar y corregir las causas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Retirar el enriquecimiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            '¿Desde cuándo se calcula el periodo de retiro de un producto veterinario?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Desde la primera dosis.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Desde la emisión de la fórmula.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Desde la compra del producto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Desde la última dosis aplicada.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto: '¿Qué limita la biocontención en una explotación porcina?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La salida de agentes desde la unidad afectada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El ingreso de alimento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'La ventilación natural.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'El consumo de agua.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            '¿Qué norma establece los requisitos para la certificación BPG en producción porcina?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Resolución ICA 076509 de 2020.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Ley 1659 de 2013.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Resolución MADR 136 de 2020.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Decreto 1076 de 2015.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad[cite: 1].',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica[cite: 1].',
    },
  }),
}
</script>
