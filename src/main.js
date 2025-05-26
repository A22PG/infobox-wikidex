import "./style.css";

document.querySelector("#app").innerHTML = `
<div style="min-width: 450px; max-width:450px; border-radius: 25px; background:#FFD700; padding: 1em;">
  <div style="text-align:center; font-size:2em; padding:.5em;">'''Pikachu'''</div>
  <div style="display: flex; align-items: center;">
    <div style="flex: 25%; text-align: left; white-space: nowrap;">ピカチュウ (Pikachu)</div>
    <div style="flex: 75%; text-align: right;">#0025</div>
  </div>
  <div style="min-width:425px; max-width:425px; border-radius:25px; background:#fff; padding:1em; text-align:center">
    <img id="imagenPokemonCuadro" src="public/Pikachu_hembra_HOME.png" height="200;">
    <hr style="border: 2px solid #dddddd; border-radius: 5px;">
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

const infoPokemon = {
		"normal": {
			"normal": {
				"tipo": [
					"Eléctrico"
				],
				"altura": 0.4,
				"peso": 6,
				"habilidad": [
					{
						"nombre": "Electricidad Estática"
					},
					{
						"nombre": "Pararrayos",
						"oculta": true
					}
				]
			},
			"Con gorra": {
				"Original": {
					"tipo": [
						"Eléctrico"
					],
					"genero": "m",
          "variocolor": false,
					"altura": 0.4,
					"peso": 6,
					"habilidad": [
						{
							"nombre": "Electricidad Estática"
						},
						{
							"nombre": "Pararrayos",
							"oculta": true
						}
					]
				},
        "Hoenn": {
					"tipo": [
						"Eléctrico"
					],
					"genero": "m",
          "variocolor": false,
					"altura": 0.4,
					"peso": 6,
					"habilidad": [
						{
							"nombre": "Electricidad Estática"
						},
						{
							"nombre": "Pararrayos",
							"oculta": true
						}
					]
				},
        "Sinnoh": {
					"tipo": [
						"Eléctrico"
					],
					"genero": "m",
          "variocolor": false,
					"altura": 0.4,
					"peso": 6,
					"habilidad": [
						{
							"nombre": "Electricidad Estática"
						},
						{
							"nombre": "Pararrayos",
							"oculta": true
						}
					]
				},
        "Teselia": {
					"tipo": [
						"Eléctrico"
					],
					"genero": "m",
          "variocolor": false,
					"altura": 0.4,
					"peso": 6,
					"habilidad": [
						{
							"nombre": "Electricidad Estática"
						},
						{
							"nombre": "Pararrayos",
							"oculta": true
						}
					]
				},
        "Kalos": {
					"tipo": [
						"Eléctrico"
					],
					"genero": "m",
          "variocolor": false,
					"altura": 0.4,
					"peso": 6,
					"habilidad": [
						{
							"nombre": "Electricidad Estática"
						},
						{
							"nombre": "Pararrayos",
							"oculta": true
						}
					]
				},
        "Alola": {
					"tipo": [
						"Eléctrico"
					],
					"genero": "m",
          "variocolor": false,
					"altura": 0.4,
					"peso": 6,
					"habilidad": [
						{
							"nombre": "Electricidad Estática"
						},
						{
							"nombre": "Pararrayos",
							"oculta": true
						}
					]
				},
        "Compañero": {
					"tipo": [
						"Eléctrico"
					],
					"genero": "m",
          "variocolor": false,
					"altura": 0.4,
					"peso": 6,
					"habilidad": [
						{
							"nombre": "Electricidad Estática"
						},
						{
							"nombre": "Pararrayos",
							"oculta": true
						}
					]
				},
        "Trotamundos": {
					"tipo": [
						"Eléctrico"
					],
					"genero": "m",
          "variocolor": false,
					"altura": 0.4,
					"peso": 6,
					"habilidad": [
						{
							"nombre": "Electricidad Estática"
						},
						{
							"nombre": "Pararrayos",
							"oculta": true
						}
					]
				},
			}
		},
		"giga": {
			"tipo": [
				"Eléctrico"
			],
			"altura": 21,
			"habilidad": [
				{
					"nombre": "Electricidad Estática"
				},
				{
					"nombre": "Pararrayos",
					"oculta": true
				}
			]
		}
	};

let selector1 = 0, selector2 = 0;
let secciones1 = [], secciones2 = [];
let isSeccion1 = "", isSeccion2 = "Común";
let pokemon = "Pikachu", isMacho = false, isHembra = true, isShiny = false;
let imagenFinal = "";

const imagenPokemonCuadro = document.querySelector("#imagenPokemonCuadro");
const btnMacho   = document.querySelector("#btnMacho");
const btnHembra  = document.querySelector("#btnHembra");
const btnShiny   = document.querySelector("#btnShiny");
const separador  = document.querySelector("#separador");
const btnSec1Mas   = document.querySelector("#btnSec1Mas");
const btnSec1Menos = document.querySelector("#btnSec1Menos");
const btnSec2Mas   = document.querySelector("#btnSec2Mas");
const btnSec2Menos = document.querySelector("#btnSec2Menos");
const seccion1Texto = document.querySelector("#seccion1Texto");
const seccion2Texto = document.querySelector("#seccion2Texto");
const seccion1      = document.querySelector("#seccion1");
const seccion2      = document.querySelector("#seccion2");

// — Funciones auxiliares —

function filtrarSeccionesPorGenero() {
  const generoActual = isMacho ? "m" : "h";
  const seccionesDisponibles = [];
  
  for (const [clave, valor] of Object.entries(infoPokemon.normal)) {
    // Si es una sección simple (como "normal")
    if (valor.tipo) {
      seccionesDisponibles.push(clave);
    } 
    // Si es una sección con subsecciones (como "Con gorra")
    else {
      let tieneOpcionParaGenero = false;
      
      for (const subseccion of Object.values(valor)) {
        // Si no tiene género definido, está disponible para ambos
        if (!subseccion.genero) {
          tieneOpcionParaGenero = true;
          break;
        }
        // Si tiene género y coincide con el actual
        if (subseccion.genero === generoActual) {
          tieneOpcionParaGenero = true;
          break;
        }
      }
      
      if (tieneOpcionParaGenero) {
        seccionesDisponibles.push(clave);
      }
    }
  }
  
  return seccionesDisponibles;
}

function filtrarSubseccionesPorGenero(seccionPrincipal) {
  const generoActual = isMacho ? "m" : "h";
  const subseccionesDisponibles = [];
  const seccionData = infoPokemon.normal[seccionPrincipal];
  
  if (!seccionData || seccionData.tipo) {
    return [];
  }
  
  for (const [clave, valor] of Object.entries(seccionData)) {
    // Si no tiene género definido, está disponible para ambos
    if (!valor.genero) {
      subseccionesDisponibles.push(clave);
    }
    // Si tiene género y coincide con el actual
    else if (valor.genero === generoActual) {
      subseccionesDisponibles.push(clave);
    }
  }
  
  return subseccionesDisponibles;
}

function cambiarGenero() {
  isMacho = !isMacho;
  isHembra = !isHembra;
  
  // Actualizar UI de los botones
  btnMacho.classList.toggle("blue");
  btnMacho.querySelector(".middle-circle").classList.toggle("blue");
  btnMacho.querySelector(".middle-circle").classList.toggle("transparent");
  btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue");
  btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white");

  btnHembra.classList.toggle("red");
  btnHembra.querySelector(".middle-circle").classList.toggle("red");
  btnHembra.querySelector(".middle-circle").classList.toggle("transparent");
  btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red");
  btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white");

  // Filtrar secciones disponibles para el nuevo género
  const nuevasSecciones1 = filtrarSeccionesPorGenero();
  
  // Si la sección actual ya no está disponible, cambiar a la primera disponible
  if (!nuevasSecciones1.includes(isSeccion1)) {
    selector1 = 0;
  } else {
    // Mantener la sección actual si sigue siendo válida
    selector1 = nuevasSecciones1.indexOf(isSeccion1);
  }
  
  selector2 = 0;
  actualizarSecciones();
}

// — Eventos —
btnMacho.addEventListener("click", cambiarGenero);
btnHembra.addEventListener("click", cambiarGenero);

btnShiny.addEventListener("click", () => {
  isShiny = !isShiny;
  btnShiny.classList.toggle("yellow");
  btnShiny.querySelector(".middle-circle").classList.toggle("yellow");
  btnShiny.querySelector(".middle-circle").classList.toggle("transparent");
  btnShiny.querySelector(".inner-circle").classList.toggle("yellow");
  btnShiny.querySelector(".svg-icon").classList.toggle("white");
  construirImagenYDatos();
});

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
  // Obtener secciones filtradas por género
  secciones1 = filtrarSeccionesPorGenero();
  
  // Ajustar selector1 si está fuera de rango
  if (selector1 >= secciones1.length) {
    selector1 = 0;
  }
  
  // Ocultar sección 1 si solo hay una opción
  if (secciones1.length <= 1) {
    seccion1.style.display = "none";
  } else {
    seccion1.style.display = "flex";
  }
  
  // Actualizar sección 1
  if (secciones1.length > 0) {
    isSeccion1 = secciones1[selector1];
    seccion1Texto.textContent = isSeccion1 === "normal" ? "Común" : isSeccion1;
  }
  
  // Obtener subsecciones filtradas por género
  secciones2 = filtrarSubseccionesPorGenero(isSeccion1);
  
  // Ajustar selector2 si está fuera de rango
  if (selector2 >= secciones2.length) {
    selector2 = 0;
  }
  
  // Manejar sección 2
  if (secciones2.length <= 1) {
    seccion2.style.display = "none";
    isSeccion2 = secciones2.length > 0 ? secciones2[0] : "Común";
  } else {
    seccion2.style.display = "flex";
    isSeccion2 = secciones2[selector2];
    seccion2Texto.textContent = isSeccion2;
  }

  construirImagenYDatos();
}

function construirImagenYDatos() {
  // Obtener datos actuales para verificar la propiedad variocolor
  let datos;
  if (isSeccion1 === "normal" || !infoPokemon.normal[isSeccion1] || infoPokemon.normal[isSeccion1].tipo) {
    datos = infoPokemon.normal.normal;
  } else {
    datos = infoPokemon.normal[isSeccion1][isSeccion2] || infoPokemon.normal[isSeccion1][Object.keys(infoPokemon.normal[isSeccion1])[0]];
  }

  // Verificar si se debe mostrar u ocultar el botón variocolor
  const variocolorDisponible = datos.variocolor !== false;
  
  if (variocolorDisponible) {
    btnShiny.style.display = "flex";
    separador.style.display = "block";
  } else {
    btnShiny.style.display = "none";
    separador.style.display = "none";
    // Si estaba activo el modo shiny, desactivarlo
    if (isShiny) {
      isShiny = false;
      // Resetear completamente el estado visual del botón
      btnShiny.className = "outer-circle";
      const middleCircle = btnShiny.querySelector(".middle-circle");
      middleCircle.className = "middle-circle yellow transparent";
      const innerCircle = middleCircle.querySelector(".inner-circle");
      innerCircle.className = "inner-circle";
      const svgIcon = innerCircle.querySelector(".svg-icon");
      svgIcon.className = "svg-icon";
    }
  }

  // Imagen
  imagenFinal = pokemon;
  imagenFinal += isMacho ? "_macho" : (isHembra ? "_hembra" : "");
  if (isSeccion1 !== "normal")  imagenFinal += `_${isSeccion1}`;
  if (isSeccion2 !== "Común")    imagenFinal += `_${isSeccion2}`;
  if (isShiny && variocolorDisponible) imagenFinal += "_variocolor";
  imagenFinal += "_HOME.png";
  imagenPokemonCuadro.onerror = () => {
  imagenPokemonCuadro.src = "public/not_found.png";
    };
  imagenPokemonCuadro.src = "public/" + imagenFinal;
  console.log(imagenFinal);

  // Consola: datos
  console.log("🧾 Datos del Pokémon:");
  console.log("• Tipo:", datos.tipo.join(", "));
  console.log(`• Altura: ${datos.altura} m`);
  console.log(`• Peso: ${datos.peso} kg`);
  console.log("• Habilidades:");
  datos.habilidad.forEach(h => {
    console.log(`  - ${h.nombre}${h.oculta ? " (Oculta)" : ""}`);
  });
  console.log("• Variocolor disponible:", variocolorDisponible);
}

// Inicializar estado
actualizarSecciones();