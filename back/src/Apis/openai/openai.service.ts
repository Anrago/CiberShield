import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

require('dotenv').config();

@Injectable()
export class OpenaiService {
  private readonly openai = new OpenAI({
    apiKey: process.env.MY_OPENAI_API,
  });

  // async createCompletion(prompt: string): Promise<string> {
  //     const response = await this.openai.chat.completions.create({
  //         model : "o3-mini",
  //         messages: [
  //             {role:'system', content:'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo el cual sera un ejemplo de phishing. La estructura de correo es la siguiente: \n\nPara: \nAsunto: \nCuerpo del correo: \n\nEl correo podra ser real o falso eso sera enviado en el prompt. Existen 3 niveles de complegidad: \n\n1. Sencillo: El correo es un phishing sencillo, el cual no tiene muchas tecnicas de engaño. \n2. Medio: El correo es un phishing medio, el cual tiene tecnicas de engaño como la suplantacion de identidad. \n3. Complejo: El correo es un phishing alto, el cual tiene tecnicas de engaño como la suplantacion de identidad y el uso de enlaces maliciosos. \n\nEl correo sera enviado en español. Dame informacion sobre si el correo es real(Osea que no es phishing) o no(Es un ejemplo de Pishing) y proque'},
  //             {role: 'user', content:prompt}
  //         ]
  //     });

  //     return response.choices[0].message.content ?? 'Default fallback content';
  // }

  // async createExcesiSimple(): Promise<string> {
  //   const response = await this.openai.chat.completions.create({
  //     model: 'o3-mini',
  //     messages: [
  //       {
  //         role: 'system',
  //         content:
  //           'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario el cual podria ser un ejemplo de phishing. La estructura de correo es la siguiente: \n\n Remitente: \nAsunto: \nCuerpo del correo: \n\nEl correo podra ser real o falso eso sera enviado en el prompt. En caso de que el correo sea falso debera presentar errores evidentes, como remitentes falso, links muy evidentes, faltas ortograficas, poca estructuracion,etc. El correo podria ser real(Lo que quiere decir que no es un ejemplo de phishing) o falso(Lo que quiere decir que es un ejemplo de phishing). En la parte inferior menciona si el correo es real o falso y porque. DEBE SER DEVUELTO EN FORMATO JSON CON LAS CLAVES: Asunto, Remitente, Cuerpo,Categoria(Solo se coloca 1 si es verdadero o 0 si es falso) y Descripcion. seran 3 JSON',
  //       },
  //       // {role: 'user', content:prompt}
  //     ],
  //   });

  //   try {
  //     const data = JSON.parse(
  //       response.choices[0].message.content ?? 'Default fallback content',
  //     );
  //     return JSON.stringify(data, null, 2); // Pretty print JSON with 2 spaces
  //   } catch (error) {
  //     console.error('Error parsing JSON:', error);
  //     return response.choices[0].message.content ?? 'Default fallback content';
  //   }
  // }
  pefils = {
    generic:
      'https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/GenericUSer.png',
    BanCoppel:
      'https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/GenericUSer.png',
    paypal:
      'https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/PayPal.svg',
    amazon:
      'https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/Amazon.png',
    google:
      'https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/GenericUSer.png',
    facebook:
      'https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/Facebbok.png',
    Spotify:
      'https://mwyxcfbqgyoarrgxrevn.supabase.co/storage/v1/object/public/img-cibershield/users/spotify.png',
  };

  async createExcesiSimplePost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content:
            'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario, el cual podría ser un ejemplo de phishing. La estructura del correo es la siguiente: Remitente: Asunto: Cuerpo del correo: El correo puede ser real (no es phishing) o falso (es phishing). Si el correo es falso, deberá contener errores evidentes como: - Remitente falso - Enlaces muy sospechosos - Faltas ortográficas claras - Mala estructura o redacción Incluye los enlaces utilizando etiquetas HTML en formato <a href=\'URL\' style="color: blue;">Texto visible</a>, donde el texto visible puede parecer confiable pero el destino debe ser sospechoso si el correo es falso. Al final del correo, especifica si es real o falso y por qué. Devuelve la información en formato JSON con las siguientes claves: Asunto, Remitente, Cuerpo, Categoria (1 si es real, 0 si es falso),perfil, y Descripcion. Genera 3 a 5 objetos JSON en total. Puedes utilizar datos genéricos proporcionados por el usuario para hacer los mensajes más realistas e intentar convencer al usuario. El perfil se refiere a la empresa que manda el correo, podras utilizar los perfiles enviados en el prompt y en base a ello elegir la imagen de la empresa que de igual manera se encuentra en el prompt. Si es pishing elige el generic, si es alguna empresa real elige la imagen que se encuentra en el prompt',
        },
        {
          role: 'user',
          content: `${prompt}\n\nPerfiles disponibles: ${JSON.stringify(this.pefils, null, 2)}`,
        },
      ],
    });

    try {
      const data = JSON.parse(
        response.choices[0].message.content ?? 'Default fallback content',
      );
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return response.choices[0].message.content ?? 'Default fallback content';
    }
  }

  async createExcesiMediumPost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content:
            'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario, el cual podría ser un ejemplo de phishing. La estructura del correo es la siguiente: Remitente: Asunto: Cuerpo del correo: El correo puede ser real (no es phishing) o falso (es phishing). Si el correo es falso, debe presentar errores más sutiles como:  - Remitente ligeramente modificado - Enlaces que parecen válidos pero llevan a un sitio sospechoso Incluye los enlaces utilizando etiquetas HTML en formato <a href=\'URL\' style="color: blue;">Texto visible</a>, donde el texto visible puede parecer confiable pero el destino debe ser sospechoso si el correo es falso. Al final del correo, especifica si es real o falso y explica por qué. Devuelve la información en formato JSON con las siguientes claves: Asunto, Remitente, Cuerpo, Categoria (1 si es real, 0 si es falso),perfil , y Descripcion.Genera 2 a 4 objetos JSON en total. Puedes utilizar datos genéricos proporcionados por el usuario para hacer los mensajes más realistas. El perfil se refiere a la empresa que manda el correo, podras utilizar los perfiles enviados en el prompt y en base a ello elegir la imagen de la empresa que de igual manera se encuentra en el prompt. podras elegir el perfil quequieras independientemente de si es phishing o no',
        },
        {
          role: 'user',
          content: `${prompt}\n\nPerfiles disponibles: ${JSON.stringify(this.pefils, null, 2)}`,
        },
      ],
    });

    try {
      const data = JSON.parse(
        response.choices[0].message.content ?? 'Default fallback content',
      );
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return response.choices[0].message.content ?? 'Default fallback content';
    }
  }

  async createExcesiComplexPost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content:
            'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario, el cual podría ser un ejemplo de phishing. La estructura del correo es la siguiente: Remitente: Asunto: Cuerpo del correo: El correo puede ser real (no es phishing) o falso (es phishing). Si el correo es falso, deberá ser extremadamente convincente, provenir de: - Personas de confianza (familiares, amigos, jefes, compañeros, etc.) - Cuentas corporativas o institucionales legítimas - Contextos creíbles (por ejemplo: \'Estás esperando un mensaje de tu jefe...\') \n\nDiseño y estilo: \n- Si el correo es de una empresa conocida (PayPal, Amazon, Spotify, Facebook, etc.), utiliza sus colores corporativos, fuentes y estilos oficiales: \n  * PayPal: Azul (#003087, #009cde), blanco y diseño minimalista \n  * Amazon: Negro (#000000), naranja (#FF9900), azul (#146EB4) con botones naranjas \n  * Spotify: Verde (#1DB954), negro (#191414), fuentes sans-serif y diseño moderno \n  * Facebook: Azul (#1877F2), blanco (#FFFFFF), fuentes Helvetica/Arial \n  * Google: Rojo (#EA4335), Azul (#4285F4), Verde (#34A853), Amarillo (#FBBC05) con diseño minimalista \n\n- Incluye elementos propios de emails profesionales: \n  * Encabezado con logo de la empresa \n  * Saludo personalizado \n  * Cuerpo del mensaje con párrafos espaciados \n  * Botones de llamada a la acción (CTA) con estilos propios de la marca \n  * Pie de página con información legal, vínculos a políticas y opciones para cancelar suscripción \n\n- Usa HTML y CSS profesional con este tipo de estructura: \n```html \n<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0;"> \n  <div style="background-color: [COLOR PRINCIPAL]; padding: 20px; text-align: center;"> \n    <!-- Logo o nombre de la empresa --> \n  </div> \n  <div style="padding: 20px;"> \n    <!-- Contenido principal --> \n    <p>Estimado/a [Nombre],</p> \n    <!-- Mensaje --> \n    <div style="text-align: center; margin: 30px 0;"> \n      <a href=\'URL_SOSPECHOSA\' style="background-color: [COLOR CTA]; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Texto del botón</a> \n    </div> \n  </div> \n  <div style="background-color: #f5f5f5; padding: 15px; font-size: 12px; color: #666; text-align: center;"> \n    <!-- Pie de página --> \n  </div> \n</div> \n``` \n\nIncluye los enlaces utilizando etiquetas HTML con estilo apropiado para la marca. Evita errores ortográficos o señales evidentes. El engaño debe ser difícil de detectar. Al final del correo, especifica si es real o falso y proporciona una explicación detallada. \n\nDevuelve la información en formato JSON con las siguientes claves: Asunto, Remitente, Cuerpo, Categoria (1 si es real, 0 si es falso), perfil, y Descripcion. Genera 2 a 3 objetos JSON en total. \n\nUtiliza los perfiles disponibles en el prompt para seleccionar la imagen de la empresa. Puedes elegir el perfil que quieras independientemente de si es phishing o no. El correo debe verse profesional y convincente, como si realmente fuera enviado por la empresa o persona que dice ser.',
        },
        {
          role: 'user',
          content: `${prompt}\n\nPerfiles disponibles: ${JSON.stringify(this.pefils, null, 2)}`,
        },
      ],
    });

    try {
      const data = JSON.parse(
        response.choices[0].message.content ?? 'Default fallback content',
      );
      return JSON.stringify(data, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return response.choices[0].message.content ?? 'Default fallback content';
    }
  }

  async createExcesiSMSSimplePost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content: `Eres un estafador de bajo nivel. Tu tarea es generar dos mensajes SMS: uno phishing muy obvio, con errores ortográficos, amenazas exageradas y enlaces sospechosos, fácil de detectar por cualquier usuario; y otro legítimo. Ambos en español, pueden incluir <a href='URL' style="color: blue;">Texto visible</a>. Devuelve un arreglo JSON con objetos: [{ "Numero": "string", "Message": { "MS1": "mensaje", "MS2": "mensaje opcional" }, "Descripcion": "por qué es verdadero o falso", "Categoria": 1 si es real o 0 si es falso }]. No incluyas texto fuera del JSON.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    function extractJsonObjects(text: string): any[] {
      const regex = /{[^{}]*?(?:(?:{[^{}]*?})*[^{}]*?)*}/gs;
      const matches = text.match(regex);
      if (!matches) return [];

      const result: any[] = [];
      for (const match of matches) {
        try {
          const parsed = JSON.parse(match);
          result.push(parsed);
        } catch (e) {
          console.warn('No se pudo parsear este bloque como JSON:', match);
        }
      }
      return result;
    }

    try {
      const rawContent = response.choices[0].message.content ?? '';

      
      try {
        const data = JSON.parse(rawContent);
        if (Array.isArray(data)) {
          return JSON.stringify(data, null, 2);
        }
      } catch {
        
      }

      
      const jsonObjects = extractJsonObjects(rawContent);

      if (jsonObjects.length === 0) {
        
        const errorResponse = [
          {
            Numero: 'Sistema',
            Message: {
              MS1: 'No se pudieron generar mensajes SMS en este momento. Por favor, intente nuevamente más tarde.',
            },
            Descripcion:
              'Error de procesamiento: No se pudo obtener un formato JSON válido de la respuesta.',
            Categoria: 0,
          },
        ];
        return JSON.stringify(errorResponse, null, 2);
      }

      return JSON.stringify(jsonObjects, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      
      const errorResponse = [
        {
          Numero: 'Error',
          Message: {
            MS1: 'Ocurrió un error al procesar su solicitud. Por favor intente nuevamente más tarde.',
          },
          Descripcion: `Error técnico: ${error.message}`,
          Categoria: 0,
        },
      ];
      return JSON.stringify(errorResponse, null, 2);
    }
  }
  async createExcesiSMSMediumPost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content: `Eres un estafador profesional. Tu tarea es generar dos mensajes SMS: uno phishing moderadamente difícil de detectar, con lenguaje creíble y sin errores, simulando una empresa real (banco, gobierno, etc.); y otro legítimo. Ambos en español, pueden incluir <a href='URL' style="color: blue;">Texto visible</a>. Devuelve un arreglo JSON con objetos: [{ "Numero": "string", "Message": { "MS1": "mensaje", "MS2": "mensaje opcional" }, "Descripcion": "por qué es verdadero o falso", "Categoria": 1 si es veridico o 0 si es falso }]. No incluyas texto fuera del JSON.`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    function extractJsonObjects(text: string): any[] {
      const regex = /{[^{}]*?(?:(?:{[^{}]*?})*[^{}]*?)*}/gs;
      const matches = text.match(regex);
      if (!matches) return [];

      const result: any[] = [];
      for (const match of matches) {
        try {
          const parsed = JSON.parse(match);
          result.push(parsed);
        } catch (e) {
          console.warn('No se pudo parsear este bloque como JSON:', match);
        }
      }
      return result;
    }

    try {
      const rawContent = response.choices[0].message.content ?? '';

      
      try {
        const data = JSON.parse(rawContent);
        if (Array.isArray(data)) {
          return JSON.stringify(data, null, 2);
        }
      } catch {
       
      }

      
      const jsonObjects = extractJsonObjects(rawContent);

      if (jsonObjects.length === 0) {
        
        const errorResponse = [
          {
            Numero: 'Sistema',
            Message: {
              MS1: 'No se pudieron generar mensajes SMS en este momento. Por favor, intente nuevamente más tarde.',
            },
            Descripcion:
              'Error de procesamiento: No se pudo obtener un formato JSON válido de la respuesta.',
            Categoria: 0,
          },
        ];
        return JSON.stringify(errorResponse, null, 2);
      }

      return JSON.stringify(jsonObjects, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      
      const errorResponse = [
        {
          Numero: 'Error',
          Message: {
            MS1: 'Ocurrió un error al procesar su solicitud. Por favor intente nuevamente más tarde.',
          },
          Descripcion: `Error técnico: ${error.message}`,
          Categoria: 0,
        },
      ];
      return JSON.stringify(errorResponse, null, 2);
    }
  }

  async createExcesiSMSComplexPost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content: `Eres un estafador de alto nivel. Tu tarea es generar 3 mensajes SMS que han sido enviados a un usuario.  
Estos mensajes podran ser veridicos o no (ejemplo de phishing).  
En el caso del mensaje falso, debe ser lo suficientemente engañoso para que un usuario con bastante experiencia no se dé cuenta. Por ejemplo un mensaje de algun familiar o amigo, o de una empresa real como un banco, gobierno, etc.  
Ambos mensajes deben estar en español y pueden incluir enlaces o links en formato simple, por ejemplo:  
<a href='URL' style="color: blue;">Texto visible</a>  
Devuelve un arreglo JSON con 2 objetos, en el siguiente formato:

[
  {
    "Numero": "string",
    "Message": { "MS1": "mensaje", "MS2": "mensaje opcional" },
    "Descripcion": "Explicación de por qué el mensaje es verdadero o falso",
    "Categoria": 1 // verdadero o 0 si es falso
  },
  ...
]

No incluyas texto fuera del arreglo JSON.
`,
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    function extractJsonObjects(text: string): any[] {
      const regex = /{[^{}]*?(?:(?:{[^{}]*?})*[^{}]*?)*}/gs;
      const matches = text.match(regex);
      if (!matches) return [];

      const result: any[] = [];
      for (const match of matches) {
        try {
          const parsed = JSON.parse(match);
          result.push(parsed);
        } catch (e) {
          console.warn('No se pudo parsear este bloque como JSON:', match);
        }
      }
      return result;
    }

    try {
      const rawContent = response.choices[0].message.content ?? '';

      
      try {
        const data = JSON.parse(rawContent);
        if (Array.isArray(data)) {
          return JSON.stringify(data, null, 2);
        }
      } catch {
        
      }

      
      const jsonObjects = extractJsonObjects(rawContent);

      if (jsonObjects.length === 0) {
        
        const errorResponse = [
          {
            Numero: 'Sistema',
            Message: {
              MS1: 'No se pudieron generar mensajes SMS en este momento. Por favor, intente nuevamente más tarde.',
            },
            Descripcion:
              'Error de procesamiento: No se pudo obtener un formato JSON válido de la respuesta.',
            Categoria: 0,
          },
        ];
        return JSON.stringify(errorResponse, null, 2);
      }

      return JSON.stringify(jsonObjects, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      
      const errorResponse = [
        {
          Numero: 'Error',
          Message: {
            MS1: 'Ocurrió un error al procesar su solicitud. Por favor intente nuevamente más tarde.',
          },
          Descripcion: `Error técnico: ${error.message}`,
          Categoria: 0,
        },
      ];
      return JSON.stringify(errorResponse, null, 2);
    }
  }
}

//Publicidad falsa
//Extorsiones de banco Normal o facil
//Bancos
//Coppel
//Compañia de telefonia
