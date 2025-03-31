import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

@Injectable()
export class OpenaiService {
    private readonly openai = new OpenAI({
        apiKey : process.env.OPENAI_API_KEY,
    });
    async createCompletion(prompt: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model : "o3-mini",
            messages: [
                {role:'system', content:'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo el cual sera un ejemplo de phishing. La estructura de correo es la siguiente: \n\nPara: \nAsunto: \nCuerpo del correo: \n\nEl correo podra ser real o falso eso sera enviado en el prompt. Existen 3 niveles de complegidad: \n\n1. Sencillo: El correo es un phishing sencillo, el cual no tiene muchas tecnicas de engaño. \n2. Medio: El correo es un phishing medio, el cual tiene tecnicas de engaño como la suplantacion de identidad. \n3. Complejo: El correo es un phishing alto, el cual tiene tecnicas de engaño como la suplantacion de identidad y el uso de enlaces maliciosos. \n\nEl correo sera enviado en español. Dame informacion sobre si el correo es real(Osea que no es phishing) o no(Es un ejemplo de Pishing) y proque'},
                {role: 'user', content:prompt}
            ]
        });
        
        return response.choices[0].message.content ?? 'Default fallback content';
    }
    
    async createExcesiSimple(prompt: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model : "o3-mini",
            messages: [
                {role:'system', content:'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario el cual podria ser un ejemplo de phishing. La estructura de correo es la siguiente: \n\n Remitente: \nAsunto: \nCuerpo del correo: \n\nEl correo podra ser real o falso eso sera enviado en el prompt. En caso de que el correo sea falso debera presentar errores evidentes, como remitentes falso, links muy evidentes, faltas ortograficas, poca estructuracion,etc. El correo podria ser real(Lo que quiere decir que no es un ejemplo de phishing) o falso(Lo que quiere decir que es un ejemplo de phishing). En la parte inferior menciona si el correo es real o falso y porque' },
                {role: 'user', content:prompt}
            ]
        });
        
        return response.choices[0].message.content ?? 'Default fallback content';
    }

    async createExcesiMedium(prompt: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model : "o3-mini",
            messages: [
                {role:'system', content:'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario el cual podria ser un ejemplo de phishing. La estructura de correo es la siguiente: \n\n Remitente: \nAsunto: \nCuerpo del correo: \n\nEl correo podra ser real o falso eso sera enviado en el prompt. En caso de que el correo sea falso debera presentar errores menores, como remitentes modificados, links sospechosos, etc. El correo podria ser real(Lo que quiere decir que no es un ejemplo de phishing) o falso(Lo que quiere decir que es un ejemplo de phishing). En la parte inferior menciona si el correo es real o falso y porque' },
                {role: 'user', content:prompt}
            ]
        });
        
        return response.choices[0].message.content ?? 'Default fallback content';
    }

    async createExcesiComplex(prompt: string): Promise<string> {
        const response = await this.openai.chat.completions.create({
            model : "o3-mini",
            messages: [
                {role:'system', content:'Eres un analista en ciberseguridad de alto nivel. Tu tarea es generar un correo que ha sido enviado al usuario el cual podria ser un ejemplo de phishing. La estructura de correo es la siguiente: \n\n Remitente: \nAsunto: \nCuerpo del correo: \n\nEl correo podra ser real o falso eso sera enviado en el prompt. En caso de que el correo sea falso debera presentar practicamente ningun error y vendra de familiares, amigos, compañeros de trabajo, jefes, cuentas de empresas, etc, Y podra venir acompañado de alguna situacion como "Estas esperando un mensaje de tu jefe ...". El correo podria ser real(Lo que quiere decir que no es un ejemplo de phishing) o falso(Lo que quiere decir que es un ejemplo de phishing). En la parte inferior menciona si el correo es real o falso y porque' },
                {role: 'user', content:prompt}
            ]
        });
        
        return response.choices[0].message.content ?? 'Default fallback content';
    }

}
