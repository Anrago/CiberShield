# 🛡️ CiberShield

![Status](https://img.shields.io/badge/status-in%20development-brightgreen)
![License](https://img.shields.io/badge/license-MIT-blue)

Una plataforma de capacitación en ciberseguridad enfocada en la prevención de phishing y ataques por SMS.

## 🚀 Tecnologías Utilizadas


Lul123123

### Frontend
- **TailwindCSS** - Framework CSS para diseño responsive
- **DaisyUI** - Componentes UI para Tailwind
- **Recharts** - Biblioteca para visualización de datos
- **Framer Motion** - Animaciones fluidas para React

### Backend
- **NestJS** - Framework para aplicaciones Node.js del lado del servidor
- **bcryptjs** - Sistema de encriptación segura
- **JWT** - Autenticación basada en tokens
- **OpenAI API** - Generación de contenido de prueba

### Despliegue
- **Docker** - Contenedorización para facilitar el despliegue

## 🔧 Instalación y Ejecución

### Frontend
```bash
# Instalación de dependencias
npm install --legacy-peer-deps

# Ejecución en modo desarrollo
npm run dev
```

### Backend
```bash
# Instalación de dependencias
npm install

# Ejecución en modo desarrollo
npm run dev
```

## 📋 Configuración Inicial de la Base de Datos

Es necesario inicializar la base de datos con los siguientes datos mediante peticiones HTTP, se pueden realizar mediante **Postman**, **Insomnia**, o aplicaciones similares:

### Crear niveles de ejercicio
```http
POST http://localhost:3000/exercise-level
Content-Type: application/json

{
    "name": "simple"
}
```

```http
POST http://localhost:3000/exercise-level
Content-Type: application/json

{
    "name": "medium"
}
```

```http
POST http://localhost:3000/exercise-level
Content-Type: application/json

{
    "name": "complex"
}
```

### Crear tipos de ejercicio
```http
POST http://localhost:3000/exercise-type
Content-Type: application/json

{
    "name": "sms"
}
```

```http
POST http://localhost:3000/exercise-type
Content-Type: application/json

{
    "name": "email"
}
```

### Cibershield (root)
```bash
# Dockerizacion y levantamiento del proyecto
docker-compose up -d --build
```
