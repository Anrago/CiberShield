let archivos = [];
const gridSize = 100;
const margin = 10;
const cols = 6; 


export function initSO(canvas) {
  const ctx = canvas.getContext("2d");
  drawWindow(ctx, canvas);
  renderAll(ctx, canvas); // <- dibujar todo inicialmente

  // 👉 Evento clic izquierdo (abrir/cerrar archivos)
  canvas.addEventListener("click", (event) => {
    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    for (let txt of archivos) {
      if (
        x >= txt.x && x <= txt.x + txt.width &&
        y >= txt.y && y <= txt.y + txt.height
      ) {
        if (!txt.isOpen) {
          txt.open();
          const contenido = prompt("Editar contenido:", txt.content);
          if (contenido !== null) txt.writeContent(contenido);
        } else {
          // Verificar si clic en botón cerrar
          if (x >= txt.x + txt.width - 20 && y <= txt.y + 20) {
            txt.close();
          }
        }
        renderAll(ctx, canvas); // Redibujar todo después del cambio
        return;
      }
    }
  });

  // 👉 Evento clic derecho ya debería estar aquí también
  canvas.addEventListener("contextmenu", (event) => {
    event.preventDefault();

    const rect = canvas.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (y < canvas.height - 48) {
      const nombre = prompt("Nombre del archivo:");
      if (nombre) {
        const index = archivos.length;
        const pos = getGridPosition(index);
        archivos.push(new TXT(pos.x, pos.y, "", gridSize, gridSize));
        archivos[archivos.length - 1].Title = nombre;
        renderAll(ctx, canvas);
      }
    }
  });
}



function getGridPosition(index){
    const col = index % cols;
    const row = Math.floor(index / cols);
    return {
        x: col * (gridSize + margin),
        y: row * (gridSize + margin)
    }
}


function drawWindow(ctx, canvas){
  ctx.fillStyle = "#08A3F4";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#243547";
  ctx.fillRect(0, canvas.height - 48, canvas.width, 48);

  
}


function renderAll(ctx, canvas){
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawWindow(ctx, canvas);
  for (let i = 0; i < archivos.length; i++){
    archivos[i].draw(ctx);
  }
}

class TXT{
    constructor(x, y, text, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.isOpen = false;
        this.content = text;
        this.Title = "";
    }

    draw(ctx){
    ctx.fillStyle = "#F1F2F4";
    ctx.fillRect(this.x, this.y, this.width, this.height);

    ctx.fillStyle = "#000000";
    ctx.font = "10px Arial";
    
    if (!this.isOpen){
        ctx.fillText(this.Title, this.x + 10, this.y + 30);
    } else {
        // Título
        ctx.fillText(this.Title, this.x + 10, this.y + 15);

        // Contenido
        ctx.fillText(this.content, this.x + 10, this.y + 40);

        // Botón de cerrar (esquina superior derecha)
        ctx.fillStyle = "red";
        ctx.fillRect(this.x + this.width - 20, this.y, 20, 20);
        ctx.fillStyle = "white";
        ctx.fillText("X", this.x + this.width - 15, this.y + 15);
    }
}


    writeContent(text){
        this.content = text;
    }

    open(){
        this.isOpen = true;
    }
    close(){
        this.isOpen = false;
    }



}
