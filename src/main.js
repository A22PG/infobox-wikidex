import "./style.css";

document.querySelector("#app").innerHTML = `
<div style="min-width: 450px; max-width:450px; border-radius: 25px; background:#FFD700; padding: 1em;">
  <div style="text-align:center; font-size:2em; padding:.5em;">'''Dialga'''</div>
  <div style="display: flex; align-items: center;">
    <div style="flex: 25%; text-align: left; white-space: nowrap;">ディアルガ (Dialga)</div>
    <div style="flex: 75%; text-align: right;">#0483</div>
  </div>
  <div style="min-width:425px; max-width:425px; border-radius:25px; background:#fff; padding:1em; text-align:center">
    <img id="imagenPokemonCuadro" src="public/Dialga_HOME.png" height="200;">
    <hr style="border: 1px solid #dddddd; border-radius: 5px;">
    <div style="display:flex; align-items: center; justify-content: space-around">
      <!-- Masculino -->
      <div id="btnMacho" class="outer-circle">
        <div class="middle-circle blue transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg" alt="Símbolo masculino">
          </div>
        </div>
      </div>
      <!-- Femenino -->
      <div id="btnHembra" class="outer-circle red">
        <div class="middle-circle">
          <div class="inner-circle red">
            <img class="svg-icon white" src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg" alt="Símbolo femenino">
          </div>
        </div>
      </div>
      <div id="separador" style="width: 2px; height: 100px; background: #dddddd;"></div>
      <!-- Variocolor -->
      <div id="btnShiny" class="outer-circle">
        <div class="middle-circle yellow transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/7/72/latest/20220508212633/Variocolor_icon_HOME.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
    </div>
    <hr style="border: 1px solid #dddddd; border-radius: 5px;">
    <div style="display:flex; align-items: center; justify-content: space-around">
    <div id="btnMega" class="outer-circle">
        <div class="middle-circle yellow transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20230619164506/Piedra_activadora_%28ilustraci%C3%B3n%29.png/60px-Piedra_activadora_%28ilustraci%C3%B3n%29.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
      <div id="btnMegaX" class="outer-circle">
        <div class="middle-circle blue transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20230619164506/Piedra_activadora_%28ilustraci%C3%B3n%29.png/60px-Piedra_activadora_%28ilustraci%C3%B3n%29.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
      <div id="btnMegaY" class="outer-circle">
        <div class="middle-circle red transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/9/99/latest/20230619164506/Piedra_activadora_%28ilustraci%C3%B3n%29.png/60px-Piedra_activadora_%28ilustraci%C3%B3n%29.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
      <div id="btnGiga" class="outer-circle">
        <div class="middle-circle yellow transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/1/12/latest/20200615214018/Icono_factor_Gigamax.png/82px-Icono_factor_Gigamax.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
      <div id="btnPrimigenio" class="outer-circle">
        <div class="middle-circle yellow transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/thumb/4/4b/latest/20141121225218/Prisma_rojo_%28Dream_World%29.png/60px-Prisma_rojo_%28Dream_World%29.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
      <div id="btnOrigen" class="outer-circle">
        <div class="middle-circle yellow transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250203180123/Icono_de_movimiento_sincro.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
    </div>

    <!-- Sección 1 -->
    <div id="seccion1" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif; margin-top:.75em">
      <div id="btnSec1Menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <span>&#8592;</span>
      </div>
      <div id="seccion1Texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Común</div>
      <div id="btnSec1Mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <span>&#8594;</span>
      </div>
    </div>

    <!-- Sección 2 -->
    <div id="seccion2" style="display: none; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif; margin-top:.75em">
      <div id="btnSec2Menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <span>&#8592;</span>
      </div>
      <div id="seccion2Texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Común</div>
      <div id="btnSec2Mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
        <span>&#8594;</span>
      </div>
    </div>

  </div>
</div>
`;


/*const formaPokemon = {
  "normal": "dialga_normal",
  "origen": "dialga_origen"
};

const datosPokemon = {
  "dialga_normal": {
    "tipo": ["Acero", "Dragón"],
    "altura": 5.4,
    "peso": 683,
    "habilidad": [
      { "nombre": "Presión" },
      { "nombre": "Telepatía", "oculta": true }
    ]
  },
  "dialga_origen": {
    "tipo": ["Acero", "Dragón"],
    "altura": 7.0,
    "peso": 850,
    "habilidad": [
      { "nombre": "Presión" }
    ]
  },
  "dialga_giga": {
    "tipo": ["Acero", "Dragón"],
    "altura": 15.4,
    "habilidad": [
      { "nombre": "Presión" }
    ]
  }
};*/


const formaPokemon = {
  "macho": {
    "normal": "pikachu_normal",
    "Con gorra": {
      "Original": "pikachu_gorra",
      "Hoenn": "pikachu_gorra",
      "Sinnoh": "pikachu_gorra",
      "Teselia": "pikachu_gorra",
      "Kalos": "pikachu_gorra",
      "Alola": "pikachu_gorra",
      "Compañero": "pikachu_gorra",
      "Trotamundos": "pikachu_gorra"
    }
  },
  "hembra": "pikachu_normal",
  "giga": "pikachu_giga",
};

const datosPokemon = {
  "pikachu_normal": {
    "tipo": ["Eléctrico"],
    "altura": 0.4,
    "peso": 6,
    "habilidad": [
      { "nombre": "Electricidad Estática" },
      { "nombre": "Pararrayos", "oculta": true }
    ]
  },
  "pikachu_gorra": {
    "tipo": ["Eléctrico"],
    "variocolor": false,
    "altura": 0.4,
    "peso": 6,
    "habilidad": [
      { "nombre": "Electricidad Estática" },
      { "nombre": "Pararrayos", "oculta": true }
    ]
  },
  "pikachu_giga": {
    "tipo": ["Eléctrico"],
    "altura": 21,
    "habilidad": [
      { "nombre": "Electricidad Estática" },
      { "nombre": "Pararrayos", "oculta": true }
    ]
  }
};

// Variables de estado
let selector1 = 0, selector2 = 0;
let secciones1 = [], secciones2 = [];
let isSeccion1 = "", isSeccion2 = "";
let pokemon = "Pikachu", isMacho = false, isHembra = false, isShiny = false;
let formaEspecialActiva = ""; // Nueva variable para formas especiales
let imagenFinal = "";

// Referencias DOM
const imagenPokemonCuadro = document.querySelector("#imagenPokemonCuadro");
const btnMacho = document.querySelector("#btnMacho");
const btnHembra = document.querySelector("#btnHembra");
const btnShiny = document.querySelector("#btnShiny");
const separador = document.querySelector("#separador");
const btnSec1Mas = document.querySelector("#btnSec1Mas");
const btnSec1Menos = document.querySelector("#btnSec1Menos");
const btnSec2Mas = document.querySelector("#btnSec2Mas");
const btnSec2Menos = document.querySelector("#btnSec2Menos");
const seccion1Texto = document.querySelector("#seccion1Texto");
const seccion2Texto = document.querySelector("#seccion2Texto");
const seccion1 = document.querySelector("#seccion1");
const seccion2 = document.querySelector("#seccion2");

// Referencias DOM para botones de formas especiales
const btnMega = document.querySelector("#btnMega");
const btnMegaX = document.querySelector("#btnMegaX");
const btnMegaY = document.querySelector("#btnMegaY");
const btnGiga = document.querySelector("#btnGiga");
const btnPrimigenio = document.querySelector("#btnPrimigenio");
const btnOrigen = document.querySelector("#btnOrigen");

// — Funciones auxiliares —

function tieneGeneros() {
  return formaPokemon.hasOwnProperty("macho") || formaPokemon.hasOwnProperty("hembra");
}

function obtenerGenerosDisponibles() {
  const generos = [];
  if (formaPokemon.hasOwnProperty("macho")) generos.push("macho");
  if (formaPokemon.hasOwnProperty("hembra")) generos.push("hembra");
  return generos;
}

function obtenerFormasEspecialesDisponibles() {
  const formasEspeciales = [];
  const formasValidas = ["mega", "megaX", "megaY", "giga", "primigenio", "origen"];
  
  formasValidas.forEach(forma => {
    if (formaPokemon.hasOwnProperty(forma)) {
      formasEspeciales.push(forma);
    }
  });
  
  return formasEspeciales;
}

function obtenerSeccionesDisponibles() {
  let dataParaSecciones = null;
  
  // Si hay forma especial activa, usar esa data
  if (formaEspecialActiva && formaPokemon[formaEspecialActiva]) {
    dataParaSecciones = formaPokemon[formaEspecialActiva];
  }
  // Si tiene géneros y no hay forma especial activa
  else if (tieneGeneros()) {
    const generoActual = isMacho ? "macho" : "hembra";
    const generosDisponibles = obtenerGenerosDisponibles();
    
    if (!formaPokemon[generoActual] && generosDisponibles.length > 0) {
      const primerGenero = generosDisponibles[0];
      dataParaSecciones = formaPokemon[primerGenero];
    } else if (formaPokemon[generoActual]) {
      dataParaSecciones = formaPokemon[generoActual];
    }
  }
  // Si no tiene géneros y no hay forma especial activa
  else {
    dataParaSecciones = formaPokemon;
  }
  
  if (!dataParaSecciones) return [];
  
  // Si es string, no hay secciones
  if (typeof dataParaSecciones === "string") return [];
  
  // Filtrar solo las secciones que tienen subsecciones o son normales
  const secciones = [];
  const formasEspecialesValidas = ["mega", "megaX", "megaY", "giga", "primigenio", "origen"];
  
  Object.keys(dataParaSecciones).forEach(clave => {
    // Excluir formas especiales de las secciones normales
    if (!formasEspecialesValidas.includes(clave)) {
      const valor = dataParaSecciones[clave];
      // Incluir si es string (forma directa) o objeto (tiene subsecciones)
      if (typeof valor === "string" || (typeof valor === "object" && valor !== null)) {
        secciones.push(clave);
      }
    }
  });
  
  return secciones;
}

function obtenerSubseccionesDisponibles(seccionPrincipal) {
  let dataParaBuscar = null;
  
  // Si hay forma especial activa
  if (formaEspecialActiva && formaPokemon[formaEspecialActiva]) {
    dataParaBuscar = formaPokemon[formaEspecialActiva];
  }
  // Si tiene géneros y no hay forma especial activa
  else if (tieneGeneros()) {
    const generoActual = isMacho ? "macho" : "hembra";
    if (formaPokemon[generoActual]) {
      dataParaBuscar = formaPokemon[generoActual];
    }
  }
  // Si no tiene géneros y no hay forma especial activa
  else {
    dataParaBuscar = formaPokemon;
  }
  
  if (!dataParaBuscar || typeof dataParaBuscar === "string") return [];
  
  const seccionData = dataParaBuscar[seccionPrincipal];
  if (!seccionData || typeof seccionData === "string") return [];
  
  return Object.keys(seccionData);
}

function obtenerDatosPokemon() {
  let claveData = "";
  
  // Si hay forma especial activa
  if (formaEspecialActiva && formaPokemon[formaEspecialActiva]) {
    const formaData = formaPokemon[formaEspecialActiva];
    
    if (typeof formaData === "string") {
      claveData = formaData;
    } else if (formaData) {
      // Si la forma especial tiene subsecciones
      if (secciones1.length === 0 || !isSeccion1) {
        // Buscar una clave por defecto o usar la primera disponible
        const claves = Object.keys(formaData);
        claveData = formaData[claves[0]] || "";
      } else {
        const seccionData = formaData[isSeccion1];
        if (typeof seccionData === "string") {
          claveData = seccionData;
        } else if (seccionData && isSeccion2) {
          claveData = seccionData[isSeccion2];
        }
      }
    }
  }
  // Lógica original para cuando no hay forma especial activa
  else if (tieneGeneros()) {
    const generoActual = isMacho ? "macho" : "hembra";
    const generoData = formaPokemon[generoActual];
    
    if (typeof generoData === "string") {
      claveData = generoData;
    } else if (generoData) {
      const seccionData = generoData[isSeccion1];
      if (typeof seccionData === "string") {
        claveData = seccionData;
      } else if (seccionData && isSeccion2) {
        claveData = seccionData[isSeccion2];
      }
    }
  } else {
    // Para Pokémon sin géneros
    if (secciones1.length === 0) {
      claveData = formaPokemon["normal"] || "";
    } else {
      const seccionData = formaPokemon[isSeccion1];
      if (typeof seccionData === "string") {
        claveData = seccionData;
      } else if (seccionData && isSeccion2) {
        claveData = seccionData[isSeccion2];
      }
    }
  }
  
  return datosPokemon[claveData] || {};
}

function configurarBotonesGenero() {
  if (!tieneGeneros()) {
    btnMacho.style.display = "none";
    btnHembra.style.display = "none";
    isMacho = false;
    isHembra = false;
    return;
  }
  
  const generosDisponibles = obtenerGenerosDisponibles();
  
  if (generosDisponibles.includes("macho")) {
    btnMacho.style.display = "flex";
  } else {
    btnMacho.style.display = "none";
  }
  
  if (generosDisponibles.includes("hembra")) {
    btnHembra.style.display = "flex";
  } else {
    btnHembra.style.display = "none";
  }
  
  if (generosDisponibles.length === 1) {
    const unicoGenero = generosDisponibles[0];
    isMacho = unicoGenero === "macho";
    isHembra = unicoGenero === "hembra";
    
    if (isMacho) {
      btnMacho.className = "outer-circle blue";
      btnMacho.querySelector(".middle-circle").className = "middle-circle";
      btnMacho.querySelector(".inner-circle").className = "inner-circle blue";
      btnMacho.querySelector(".svg-icon").className = "svg-icon white";
    } else {
      btnHembra.className = "outer-circle red";
      btnHembra.querySelector(".middle-circle").className = "middle-circle";
      btnHembra.querySelector(".inner-circle").className = "inner-circle red";
      btnHembra.querySelector(".svg-icon").className = "svg-icon white";
    }
    
    return;
  }
  
  actualizarEstadoVisualGenero();
}

function actualizarEstadoVisualGenero() {
  btnMacho.className = "outer-circle";
  btnMacho.querySelector(".middle-circle").className = "middle-circle blue transparent";
  btnMacho.querySelector(".inner-circle").className = "inner-circle";
  btnMacho.querySelector(".svg-icon").className = "svg-icon";
  
  btnHembra.className = "outer-circle";
  btnHembra.querySelector(".middle-circle").className = "middle-circle red transparent";
  btnHembra.querySelector(".inner-circle").className = "inner-circle";
  btnHembra.querySelector(".svg-icon").className = "svg-icon";
  
  if (isMacho) {
    btnMacho.className = "outer-circle blue";
    btnMacho.querySelector(".middle-circle").className = "middle-circle";
    btnMacho.querySelector(".inner-circle").className = "inner-circle blue";
    btnMacho.querySelector(".svg-icon").className = "svg-icon white";
  } else {
    btnHembra.className = "outer-circle red";
    btnHembra.querySelector(".middle-circle").className = "middle-circle";
    btnHembra.querySelector(".inner-circle").className = "inner-circle red";
    btnHembra.querySelector(".svg-icon").className = "svg-icon white";
  }
}

function configurarBotonesFormasEspeciales() {
  const formasDisponibles = obtenerFormasEspecialesDisponibles();
  const mapaBotones = {
    "mega": btnMega,
    "megaX": btnMegaX,
    "megaY": btnMegaY,
    "giga": btnGiga,
    "primigenio": btnPrimigenio,
    "origen": btnOrigen
  };
  
  // Mostrar/ocultar botones según disponibilidad
  Object.keys(mapaBotones).forEach(forma => {
    const boton = mapaBotones[forma];
    if (formasDisponibles.includes(forma)) {
      boton.style.display = "flex";
    } else {
      boton.style.display = "none";
    }
  });
}

function actualizarEstadoVisualFormasEspeciales() {
  const mapaBotones = {
    "mega": { btn: btnMega, color: "yellow" },
    "megaX": { btn: btnMegaX, color: "blue" },
    "megaY": { btn: btnMegaY, color: "red" },
    "giga": { btn: btnGiga, color: "yellow" },
    "primigenio": { btn: btnPrimigenio, color: "yellow" },
    "origen": { btn: btnOrigen, color: "yellow" }
  };
  
  Object.keys(mapaBotones).forEach(forma => {
    const { btn, color } = mapaBotones[forma];
    if (btn.style.display !== "none") {
      if (formaEspecialActiva === forma) {
        // Estado activo
        btn.className = `outer-circle ${color}`;
        btn.querySelector(".middle-circle").className = "middle-circle";
        btn.querySelector(".inner-circle").className = `inner-circle ${color}`;
        btn.querySelector(".svg-icon").className = "svg-icon white";
      } else {
        // Estado inactivo
        btn.className = "outer-circle";
        btn.querySelector(".middle-circle").className = `middle-circle ${color} transparent`;
        btn.querySelector(".inner-circle").className = "inner-circle";
        btn.querySelector(".svg-icon").className = "svg-icon";
      }
    }
  });
}

function activarFormaEspecial(forma) {
  if (formaEspecialActiva === forma) {
    // Si ya está activa, desactivar
    formaEspecialActiva = "";
  } else {
    // Activar nueva forma
    formaEspecialActiva = forma;
  }
  
  // Resetear selectores
  selector1 = 0;
  selector2 = 0;
  
  actualizarEstadoVisualFormasEspeciales();
  actualizarSecciones();
}

function cambiarGenero() {
  const generosDisponibles = obtenerGenerosDisponibles();
  
  if (generosDisponibles.length <= 1) {
    return;
  }
  
  isMacho = !isMacho;
  isHembra = !isHembra;
  
  actualizarEstadoVisualGenero();
  
  // Solo resetear selectores si no hay forma especial activa
  if (!formaEspecialActiva) {
    selector1 = 0;
    selector2 = 0;
  }
  
  actualizarSecciones();
}

// — Eventos —
btnMacho.addEventListener("click", cambiarGenero);
btnHembra.addEventListener("click", cambiarGenero);

btnShiny.addEventListener("click", () => {
  isShiny = !isShiny;
  if (isShiny) {
    btnShiny.className = "outer-circle yellow";
    btnShiny.querySelector(".middle-circle").className = "middle-circle";
    btnShiny.querySelector(".inner-circle").className = "inner-circle yellow";
    btnShiny.querySelector(".svg-icon").className = "svg-icon white";
  } else {
    btnShiny.className = "outer-circle";
    btnShiny.querySelector(".middle-circle").className = "middle-circle yellow transparent";
    btnShiny.querySelector(".inner-circle").className = "inner-circle";
    btnShiny.querySelector(".svg-icon").className = "svg-icon";
  }
  construirImagenYDatos();
});

// Eventos para formas especiales
btnMega.addEventListener("click", () => activarFormaEspecial("mega"));
btnMegaX.addEventListener("click", () => activarFormaEspecial("megaX"));
btnMegaY.addEventListener("click", () => activarFormaEspecial("megaY"));
btnGiga.addEventListener("click", () => activarFormaEspecial("giga"));
btnPrimigenio.addEventListener("click", () => activarFormaEspecial("primigenio"));
btnOrigen.addEventListener("click", () => activarFormaEspecial("origen"));

btnSec1Mas.addEventListener("click", () => {
  selector1 = (selector1 + 1) % secciones1.length;
  selector2 = 0;
  actualizarSecciones();
});
btnSec1Menos.addEventListener("click", () => {
  selector1 = (selector1 - 1 + secciones1.length) % secciones1.length;
  selector2 = 0;
  actualizarSecciones();
});
btnSec2Mas.addEventListener("click", () => {
  selector2 = (selector2 + 1) % secciones2.length;
  actualizarSecciones();
});
btnSec2Menos.addEventListener("click", () => {
  selector2 = (selector2 - 1 + secciones2.length) % secciones2.length;
  actualizarSecciones();
});

// — Funciones principales —

function actualizarSecciones() {
  secciones1 = obtenerSeccionesDisponibles();
  
  if (selector1 >= secciones1.length) {
    selector1 = 0;
  }
  
  if (secciones1.length <= 1) {
    seccion1.style.display = "none";
    isSeccion1 = secciones1.length > 0 ? secciones1[0] : "normal";
  } else {
    seccion1.style.display = "flex";
    isSeccion1 = secciones1[selector1];
    seccion1Texto.textContent = isSeccion1 === "normal" ? "Común" : isSeccion1;
  }
  
  secciones2 = obtenerSubseccionesDisponibles(isSeccion1);
  
  if (selector2 >= secciones2.length) {
    selector2 = 0;
  }
  
  if (secciones2.length <= 1) {
    seccion2.style.display = "none";
    isSeccion2 = secciones2.length > 0 ? secciones2[0] : "";
  } else {
    seccion2.style.display = "flex";
    isSeccion2 = secciones2[selector2];
    seccion2Texto.textContent = isSeccion2;
  }
  
  construirImagenYDatos();
}

function construirImagenYDatos() {
  const datos = obtenerDatosPokemon();
  
  const variocolorDisponible = datos.variocolor !== false;
  
  if (variocolorDisponible) {
    btnShiny.style.display = "flex";
    separador.style.display = "block";
  } else {
    btnShiny.style.display = "none";
    separador.style.display = "none";
    if (isShiny) {
      isShiny = false;
      btnShiny.className = "outer-circle";
      btnShiny.querySelector(".middle-circle").className = "middle-circle yellow transparent";
      btnShiny.querySelector(".inner-circle").className = "inner-circle";
      btnShiny.querySelector(".svg-icon").className = "svg-icon";
    }
  }
  
  // Construir nombre de imagen
  imagenFinal = pokemon;
  
  // Si hay forma especial activa, NO agregar género
  if (formaEspecialActiva) {
    imagenFinal += `_${formaEspecialActiva}`;
  } else {
    // Solo agregar género si tiene géneros y no hay forma especial
    if (tieneGeneros()) {
      imagenFinal += isMacho ? "_macho" : "_hembra";
    }
    
    // Agregar sección si no es "normal" y si hay secciones activas
    if (isSeccion1 && isSeccion1 !== "normal" && secciones1.length > 0) {
      imagenFinal += `_${isSeccion1}`;
    }
  }
  
  // Agregar subsección si existe (tanto para forma especial como normal)
  if (isSeccion2) {
    imagenFinal += `_${isSeccion2}`;
  }
  
  // Agregar variocolor si está activo y disponible
  if (isShiny && variocolorDisponible) {
    imagenFinal += "_variocolor";
  }
  
  imagenFinal += "_HOME.png";
  
  // Actualizar imagen
  imagenPokemonCuadro.onerror = () => {
    imagenPokemonCuadro.src = "public/not_found.png";
  };
  imagenPokemonCuadro.src = "public/" + imagenFinal;
  console.log("Imagen:", imagenFinal);
  
  // Mostrar datos en consola
  if (Object.keys(datos).length > 0) {
    console.log("🧾 Datos del Pokémon:");
    console.log("• Tipo:", datos.tipo ? datos.tipo.join(", ") : "No definido");
    console.log(`• Altura: ${datos.altura || "No definida"} m`);
    console.log(`• Peso: ${datos.peso || "No definido"} kg`);
    console.log("• Habilidades:");
    if (datos.habilidad) {
      datos.habilidad.forEach(h => {
        console.log(`  - ${h.nombre}${h.oculta ? " (Oculta)" : ""}`);
      });
    }
    console.log("• Variocolor disponible:", variocolorDisponible);
    console.log("• Formas especiales disponibles:", obtenerFormasEspecialesDisponibles());
    console.log("• Forma especial activa:", formaEspecialActiva || "Ninguna");
  }
}

// Inicialización
configurarBotonesGenero();
configurarBotonesFormasEspeciales();
actualizarEstadoVisualFormasEspeciales();
actualizarSecciones();