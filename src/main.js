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
      <div style="width: 2px; height: 100px; background: #dddddd;"></div>
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
  normal: {
    normal: {
      tipo: ["Eléctrico"],
      altura: 0.4,
      peso: 6,
      habilidad: [
        { nombre: "Electricidad Estática" },
        { nombre: "Pararrayos", oculta: true }
      ]
    },
    "Con gorra": {
      pikachu_gorras: {
        tipo: ["Eléctrico"],
        genero: "m",
        altura: 0.4,
        peso: 6,
        habilidad: [
          { nombre: "Electricidad Estática" },
          { nombre: "Pararrayos", oculta: true }
        ]
      },
      Prueba: {
        tipo: ["Eléctrico"],
        genero: "m",
        altura: 40,
        peso: 684,
        habilidad: [
          { nombre: "Electricidad Dinámica" },
          { nombre: "Paraguas", oculta: false }
        ]
      }
    }
  }
};

let selector1 = 0, selector2 = 0;
let secciones1 = Object.keys(infoPokemon.normal), secciones2 = [];
let isSeccion1 = secciones1[0], isSeccion2 = "Común";
let pokemon = "Pikachu", isMacho = false, isHembra = true, isShiny = false;
let imagenFinal = "";

const imagenPokemonCuadro = document.querySelector("#imagenPokemonCuadro");
const btnMacho   = document.querySelector("#btnMacho");
const btnHembra  = document.querySelector("#btnHembra");
const btnShiny   = document.querySelector("#btnShiny");
const btnSec1Mas   = document.querySelector("#btnSec1Mas");
const btnSec1Menos = document.querySelector("#btnSec1Menos");
const btnSec2Mas   = document.querySelector("#btnSec2Mas");
const btnSec2Menos = document.querySelector("#btnSec2Menos");
const seccion1Texto = document.querySelector("#seccion1Texto");
const seccion2Texto = document.querySelector("#seccion2Texto");
const seccion2      = document.querySelector("#seccion2");

// — Eventos —
btnMacho.addEventListener("click", () => {
    isMacho = isMacho ? false : true;
    isHembra = isHembra ? false : true;
    btnMacho.classList.toggle("blue")
    btnMacho.querySelector(".middle-circle").classList.toggle("blue")
    btnMacho.querySelector(".middle-circle").classList.toggle("transparent");
    btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue")
    btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

    btnHembra.classList.toggle("red")
    btnHembra.querySelector(".middle-circle").classList.toggle("red")
    btnHembra.querySelector(".middle-circle").classList.toggle("transparent");
    btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red")
    btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

    construirImagenYDatos();
});

btnHembra.addEventListener("click", () => {
    isMacho = isMacho ? false : true;
    isHembra = isHembra ? false : true;
    btnHembra.classList.toggle("red")
    btnHembra.querySelector(".middle-circle").classList.toggle("red")
    btnHembra.querySelector(".middle-circle").classList.toggle("transparent");
    btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("red")
    btnHembra.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

    btnMacho.classList.toggle("blue")
    btnMacho.querySelector(".middle-circle").classList.toggle("blue")
    btnMacho.querySelector(".middle-circle").classList.toggle("transparent");
    btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").classList.toggle("blue")
    btnMacho.querySelector(".middle-circle").querySelector(".inner-circle").querySelector(".svg-icon").classList.toggle("white")

    construirImagenYDatos();

});

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

// — Funciones —

function actualizarSecciones() {
  isSeccion1 = secciones1[selector1];
  seccion1Texto.textContent = isSeccion1 === "normal" ? "Común" : isSeccion1;

  const posible = infoPokemon.normal[isSeccion1];
  if (typeof posible === "object" && !posible.tipo) {
    secciones2 = Object.keys(posible);
    isSeccion2 = secciones2[selector2];
    seccion2Texto.textContent = isSeccion2;
    seccion2.style.display = "flex";
  } else {
    secciones2 = [];
    isSeccion2 = "Común";
    seccion2.style.display = "none";
  }

  construirImagenYDatos();
}

function construirImagenYDatos() {
  // Imagen
  imagenFinal = pokemon;
  imagenFinal += isMacho ? "_macho" : (isHembra ? "_hembra" : "");
  if (isSeccion1 !== "normal")  imagenFinal += `_${isSeccion1}`;
  if (isSeccion2 !== "Común")    imagenFinal += `_${isSeccion2}`;
  if (isShiny)                   imagenFinal += "_variocolor";
  imagenFinal += "_HOME.png";
  imagenPokemonCuadro.src = "public/" + imagenFinal;
  console.log(imagenFinal);

  // Consola: datos
  let datos = isSeccion1 === "normal"
    ? infoPokemon.normal.normal
    : infoPokemon.normal[isSeccion1][isSeccion2];

  console.log("🧾 Datos del Pokémon:");
  console.log("• Tipo:", datos.tipo.join(", "));
  console.log(`• Altura: ${datos.altura} m`);
  console.log(`• Peso: ${datos.peso} kg`);
  console.log("• Habilidades:");
  datos.habilidad.forEach(h => {
    console.log(`  - ${h.nombre}${h.oculta ? " (Oculta)" : ""}`);
  });
}

// Inicializar estado
actualizarSecciones();
