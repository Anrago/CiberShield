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

  async createExcesiSimplePost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content:
            'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario, el cual podría ser un ejemplo de phishing. La estructura del correo es la siguiente: Remitente: Asunto: Cuerpo del correo: El correo puede ser real (no es phishing) o falso (es phishing). Si el correo es falso, deberá contener errores evidentes como: - Remitente falso - Enlaces muy sospechosos - Faltas ortográficas claras - Mala estructura o redacción Incluye los enlaces utilizando etiquetas HTML en formato <a href=\'URL\' style="color: blue;">Texto visible</a>, donde el texto visible puede parecer confiable pero el destino debe ser sospechoso si el correo es falso. Al final del correo, especifica si es real o falso y por qué. Devuelve la información en formato JSON con las siguientes claves: Asunto, Remitente, Cuerpo, Categoria (1 si es real, 0 si es falso), y Descripcion. Genera 3 objetos JSON en total. Puedes utilizar datos genéricos proporcionados por el usuario para hacer los mensajes más realistas.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    try {
      const data = JSON.parse(
        response.choices[0].message.content ?? 'Default fallback content',
      );
      return JSON.stringify(data, null, 2); // Pretty print JSON with 2 spaces
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
            'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario, el cual podría ser un ejemplo de phishing. La estructura del correo es la siguiente: Remitente: Asunto: Cuerpo del correo: El correo puede ser real (no es phishing) o falso (es phishing). Si el correo es falso, debe presentar errores más sutiles como:  - Remitente ligeramente modificado - Enlaces que parecen válidos pero llevan a un sitio sospechoso Incluye los enlaces utilizando etiquetas HTML en formato <a href=\'URL\' style="color: blue;">Texto visible</a>, donde el texto visible puede parecer confiable pero el destino debe ser sospechoso si el correo es falso. Al final del correo, especifica si es real o falso y explica por qué. Devuelve la información en formato JSON con las siguientes claves: Asunto, Remitente, Cuerpo, Categoria (1 si es real, 0 si es falso), y Descripcion.Genera 2 objetos JSON en total. Puedes utilizar datos genéricos proporcionados por el usuario para hacer los mensajes más realistas.',
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    try {
      const data = JSON.parse(
        response.choices[0].message.content ?? 'Default fallback content',
      );
      return JSON.stringify(data, null, 2); // Pretty print JSON with 2 spaces
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
            "Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario, el cual podría ser un ejemplo de phishing. La estructura del correo es la siguiente: Remitente: Asunto: Cuerpo del correo: El correo puede ser real (no es phishing) o falso (es phishing). Si el correo es falso, deberá ser extremadamente convincente, provenir de: - Personas de confianza (familiares, amigos, jefes, compañeros, etc.) - Cuentas corporativas o institucionales legítimas - Contextos creíbles (por ejemplo: 'Estás esperando un mensaje de tu jefe...') Incluye los enlaces utilizando etiquetas HTML en formato <a href='URL' style=\"color: blue;\">Texto visible</a>, donde el texto visible puede parecer confiable pero el destino debe ser sospechoso si el correo es falso. Evita errores ortográficos o señales evidentes. El engaño debe ser difícil de detectar. Al final del correo, especifica si es real o falso y proporciona una explicación detallada. Devuelve la información en formato JSON con las siguientes claves:  Asunto, Remitente, Cuerpo, Categoria (1 si es real, 0 si es falso), y Descripcion.Genera 2 objetos JSON en total. Puedes utilizar datos proporcionados por el usuario para que el mensaje sea lo más realista posible.",
        },
        {
          role: 'user',
          content: prompt,
        },
      ],
    });

    try {
      const data = JSON.parse(
        response.choices[0].message.content ?? 'Default fallback content',
      );
      return JSON.stringify(data, null, 2); // Pretty print JSON with 2 spaces
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
          content: `Eres un estafador de alto nivel. Tu tarea es generar dos mensajes SMS que han sido enviados a un usuario.  
Uno de estos mensajes debe ser un ejemplo de phishing (falso) y el otro debe ser un mensaje legítimo (verdadero).  
En el caso del mensaje falso, debe ser lo suficientemente sencillo para que un usuario con poca experiencia se dé cuenta.  
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

      // Intentar parsear como array completo directamente
      try {
        const data = JSON.parse(rawContent);
        if (Array.isArray(data)) {
          return JSON.stringify(data, null, 2);
        }
      } catch {
        // Ignorar y continuar con extracción individual
      }

      // Si no es un array, intentar extraer múltiples objetos JSON
      const jsonObjects = extractJsonObjects(rawContent);

      if (jsonObjects.length === 0) {
        throw new Error('No se pudieron extraer objetos JSON del contenido.');
      }

      return JSON.stringify(jsonObjects, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return response.choices[0].message.content ?? 'Contenido no disponible';
    }
  }
  async createExcesiSMSMediumPost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content: `Eres un estafador de alto nivel. Tu tarea es generar dos mensajes SMS que han sido enviados a un usuario.  
Uno de estos mensajes debe ser un ejemplo de phishing (falso) y el otro debe ser un mensaje legítimo (verdadero).  
En el caso del mensaje falso, debe ser lo suficientemente engañoso para que un usuario con poca experiencia no se dé cuenta.  
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

      // Intentar parsear como array completo directamente
      try {
        const data = JSON.parse(rawContent);
        if (Array.isArray(data)) {
          return JSON.stringify(data, null, 2);
        }
      } catch {
        // Ignorar y continuar con extracción individual
      }

      // Si no es un array, intentar extraer múltiples objetos JSON
      const jsonObjects = extractJsonObjects(rawContent);

      if (jsonObjects.length === 0) {
        throw new Error('No se pudieron extraer objetos JSON del contenido.');
      }

      return JSON.stringify(jsonObjects, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return response.choices[0].message.content ?? 'Contenido no disponible';
    }
  }

  async createExcesiSMSComplexPost(prompt: string): Promise<string> {
    const response = await this.openai.chat.completions.create({
      model: 'o3-mini',
      messages: [
        {
          role: 'system',
          content: `Eres un estafador de alto nivel. Tu tarea es generar dos mensajes SMS que han sido enviados a un usuario.  
Uno de estos mensajes debe ser un ejemplo de phishing (falso) y el otro debe ser un mensaje legítimo (verdadero).  
En el caso del mensaje falso, debe ser lo suficientemente engañoso para que un usuario con poca experiencia no se dé cuenta.  
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

      // Intentar parsear como array completo directamente
      try {
        const data = JSON.parse(rawContent);
        if (Array.isArray(data)) {
          return JSON.stringify(data, null, 2);
        }
      } catch {
        // Ignorar y continuar con extracción individual
      }

      // Si no es un array, intentar extraer múltiples objetos JSON
      const jsonObjects = extractJsonObjects(rawContent);

      if (jsonObjects.length === 0) {
        throw new Error('No se pudieron extraer objetos JSON del contenido.');
      }

      return JSON.stringify(jsonObjects, null, 2);
    } catch (error) {
      console.error('Error parsing JSON:', error);
      return response.choices[0].message.content ?? 'Contenido no disponible';
    }
  }
}

//Publicidad falsa
//Extorsiones de banco Normal o facil
//Bancos
//Coppel
//Compañia de telefonia
