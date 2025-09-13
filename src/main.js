import "./style.css";

document.querySelector("#app").innerHTML = `
<div style="min-width: 450px; max-width:450px; border-radius: 25px; background:#FFD700; padding: 1em; float:right">
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
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg" alt="Símbolo femenino">
          </div>
        </div>
      </div>
      <div id="separador" style="border: 1px solid #dddddd; width: 0; height: 70px; background: #dddddd; border-radius: 5px;"></div>
      <!-- Variocolor -->
      <div id="btnShiny" class="outer-circle">
        <div class="middle-circle yellow transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_%28WikiDex%29.svg" alt="Símbolo variocolor" style="width:80%">
          </div>
        </div>
      </div>
      <div id="btnTrasera" class="outer-circle">
        <div class="middle-circle yellow transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/6/60/latest/20081026205217/Flecha_sur.png" alt="Símbolo variocolor">
          </div>
        </div>
      </div>
    </div>
    <hr style="border: 1px solid #dddddd; border-radius: 5px;">
    <div style="display:flex; align-items: center; justify-content: space-around">
    <div id="btnMega" class="outer-circle">
        <div class="middle-circle megaColor transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevoluci%C3%B3n_icono.svg" alt="Símbolo variocolor" style="height:38px">
          </div>
        </div>
      </div>
      <div id="btnMegaX" class="outer-circle">
        <div class="middle-circle megaXColor transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevoluci%C3%B3n_X_%28Wikidex%29.svg" alt="Símbolo variocolor" style="height:38px">
          </div>
        </div>
      </div>
      <div id="btnMegaY" class="outer-circle">
        <div class="middle-circle megaYColor transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevoluci%C3%B3n_Y_%28Wikidex%29.svg" alt="Símbolo variocolor" style="height:38px">
          </div>
        </div>
      </div>
      <div id="btnGiga" class="outer-circle">
        <div class="middle-circle gigamaxColor transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_%28Wikidex%29.svg" alt="Símbolo variocolor" style="height:28px">
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
  "hembra": {
    "Crema de vainilla" : {
      "Confite fresa": "alcremie_normal",
      "Confite corazón" : "alcremie_normal"
    },
    "Crema rosa": {
      "Confite fresa": "alcremie_normal",
      "Confite corazón" : "alcremie_normal"
    }
  },
  "giga":"alcremie_giga",
  "megaY": "alcremie_normal",
  "megaX": "alcremie_normal"
}

const datosPokemon = {
  "alcremie_normal": {
    "tipo": ["Acero", "Dragón"],
    "altura": 5.4,
    "peso": 683,
    "habilidad": [
      { "nombre": "Presión" },
      { "nombre": "Telepatía", "oculta": true }
    ]
  },
  "alcremie_giga": {
    "tipo": ["Acero", "Dragón"],
    "altura": 7.0,
    "peso": 850,
    "habilidad": [
      { "nombre": "Presión" }
    ]
  }
}*/


/*const formaPokemon = {
  "normal": {
    "Común" : "dialga_normal",
    "Forma origen": "dialga_origen"
  }
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
};
*/

// Datos de configuración
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
  "mega": "",
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

// Configuración de botones
const buttonConfig = {
  gender: [
    { id: "btnMacho", key: "macho", color: "blue", icon: "https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg" },
    { id: "btnHembra", key: "hembra", color: "red", icon: "https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg" }
  ],
  special: [
    { id: "btnMega", key: "mega", color: "megaColor", icon: "https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevolución_icono.svg" },
    { id: "btnMegaX", key: "megaX", color: "megaXColor", icon: "https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevolución_X_(Wikidex).svg" },
    { id: "btnMegaY", key: "megaY", color: "megaYColor", icon: "https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevolución_Y_(Wikidex).svg" },
    { id: "btnGiga", key: "giga", color: "gigamaxColor", icon: "https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_(Wikidex).svg" }
  ],
  toggle: [
    { id: "btnShiny", key: "shiny", color: "yellow", icon: "https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_(WikiDex).svg" },
    { id: "btnTrasera", key: "trasera", color: "yellow", icon: "https://images.wikidexcdn.net/mwuploads/wikidex/6/60/latest/20081026205217/Flecha_sur.png" }
  ]
};

// Estado de la aplicación
class PokemonState {
  constructor() {
    this.pokemon = "Pikachu";
    this.activeGender = "macho";
    this.activeSpecialForm = "";
    this.isShiny = false;
    this.isTrasera = false;
    this.selector1 = 0;
    this.selector2 = 0;
    this.secciones1 = [];
    this.secciones2 = [];
    this.isSeccion1 = "";
    this.isSeccion2 = "";
  }

  getAvailableGenders() {
    return ["macho", "hembra"].filter(gender => formaPokemon.hasOwnProperty(gender));
  }

  getAvailableSpecialForms() {
    return ["mega", "megaX", "megaY", "giga", "primigenio", "origen"]
      .filter(form => formaPokemon.hasOwnProperty(form));
  }

  getCurrentData() {
    let dataSource = null;
    
    if (this.activeSpecialForm && formaPokemon[this.activeSpecialForm]) {
      dataSource = formaPokemon[this.activeSpecialForm];
    } else {
      const availableGenders = this.getAvailableGenders();
      if (availableGenders.length > 0) {
        dataSource = formaPokemon[this.activeGender] || formaPokemon[availableGenders[0]];
      } else {
        dataSource = formaPokemon;
      }
    }
    
    return dataSource;
  }

  getAvailableSections() {
    const dataSource = this.getCurrentData();
    if (!dataSource || typeof dataSource === "string") return [];
    
    const excludeKeys = ["mega", "megaX", "megaY", "giga", "primigenio", "origen"];
    return Object.keys(dataSource).filter(key => 
      !excludeKeys.includes(key) && 
      (typeof dataSource[key] === "string" || typeof dataSource[key] === "object")
    );
  }

  getAvailableSubsections(mainSection) {
    const dataSource = this.getCurrentData();
    if (!dataSource || typeof dataSource === "string") return [];
    
    const sectionData = dataSource[mainSection];
    if (!sectionData || typeof sectionData === "string") return [];
    
    return Object.keys(sectionData);
  }

  getPokemonData() {
    const dataSource = this.getCurrentData();
    let dataKey = "";

    if (typeof dataSource === "string") {
      dataKey = dataSource;
    } else if (dataSource) {
      const sectionData = dataSource[this.isSeccion1];
      if (typeof sectionData === "string") {
        dataKey = sectionData;
      } else if (sectionData && this.isSeccion2) {
        dataKey = sectionData[this.isSeccion2];
      }
    }

    return datosPokemon[dataKey] || {};
  }

  buildImageName() {
    let imageName = this.pokemon;
    
    if (this.activeSpecialForm) {
      imageName += `_${this.activeSpecialForm}`;
    } else {
      const availableGenders = this.getAvailableGenders();
      if (availableGenders.length > 0) {
        imageName += `_${this.activeGender}`;
      }
      
      if (this.isSeccion1 && this.isSeccion1 !== "normal") {
        imageName += `_${this.isSeccion1}`;
      }
    }
    
    if (this.isSeccion2) {
      imageName += `_${this.isSeccion2}`;
    }
    
    const pokemonData = this.getPokemonData();
    if (this.isTrasera && pokemonData.trasera !== false) {
      imageName += "_trasera";
    }
    
    if (this.isShiny && pokemonData.variocolor !== false) {
      imageName += "_variocolor";
    }
    
    return imageName + "_HOME.png";
  }
}

// Clase para manejar la UI
class PokemonUI {
  constructor(state) {
    this.state = state;
    this.elements = this.getElements();
    this.initializeHTML();
    this.setupEventListeners();
    this.updateAll();
  }

  getElements() {
    const elements = {
      imagenPokemonCuadro: document.querySelector("#imagenPokemonCuadro"),
      seccion1: document.querySelector("#seccion1"),
      seccion2: document.querySelector("#seccion2"),
      seccion1Texto: document.querySelector("#seccion1Texto"),
      seccion2Texto: document.querySelector("#seccion2Texto")
    };

    // Agregar botones dinámicamente
    [...buttonConfig.gender, ...buttonConfig.special, ...buttonConfig.toggle].forEach(btn => {
      elements[btn.key] = document.querySelector(`#${btn.id}`);
    });

    // Agregar botones de navegación
    ['btnSec1Mas', 'btnSec1Menos', 'btnSec2Mas', 'btnSec2Menos'].forEach(id => {
      elements[id.replace('btn', '').toLowerCase()] = document.querySelector(`#${id}`);
    });

    return elements;
  }

  initializeHTML() {
    document.querySelector("#app").innerHTML = `
      <div style="min-width: 450px; max-width:450px; border-radius: 25px; background:#FFD700; padding: 1em; float:right">
        <div style="text-align:center; font-size:2em; padding:.5em;">'''Dialga'''</div>
        <div style="display: flex; align-items: center;">
          <div style="flex: 25%; text-align: left; white-space: nowrap;">ディアルガ (Dialga)</div>
          <div style="flex: 75%; text-align: right;">#0483</div>
        </div>
        <div style="min-width:425px; max-width:425px; border-radius:25px; background:#fff; padding:1em; text-align:center">
          <img id="imagenPokemonCuadro" src="public/Dialga_HOME.png" height="200;">
          <hr style="border: 1px solid #dddddd; border-radius: 5px;">
          <div style="display:flex; align-items: center; justify-content: space-around">
            ${this.generateButtons(buttonConfig.gender)}
            <div id="separador" style="border: 1px solid #dddddd; width: 0; height: 70px; background: #dddddd; border-radius: 5px;"></div>
            ${this.generateButtons(buttonConfig.toggle)}
          </div>
          <hr style="border: 1px solid #dddddd; border-radius: 5px;">
          <div style="display:flex; align-items: center; justify-content: space-around">
            ${this.generateButtons(buttonConfig.special)}
          </div>
          ${this.generateSectionControls()}
        </div>
      </div>
    `;
    
    this.elements = this.getElements(); // Re-obtener elementos después de crear HTML
  }

  generateButtons(buttons) {
    return buttons.map(btn => `
      <div id="${btn.id}" class="outer-circle">
        <div class="middle-circle ${btn.color} transparent">
          <div class="inner-circle">
            <img class="svg-icon" src="${btn.icon}" alt="${btn.key}">
          </div>
        </div>
      </div>
    `).join('');
  }

  generateSectionControls() {
    return `
      <div id="seccion1" style="display: flex; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif; margin-top:.75em">
        <div id="btnSec1Menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <span>←</span>
        </div>
        <div id="seccion1Texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Común</div>
        <div id="btnSec1Mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <span>→</span>
        </div>
      </div>
      <div id="seccion2" style="display: none; align-items: center; justify-content: space-between; gap: 20px; font-family: Arial, sans-serif; margin-top:.75em">
        <div id="btnSec2Menos" style="border: 1px solid #dddddd; width: 15%; height: 25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <span>←</span>
        </div>
        <div id="seccion2Texto" style="border: 1px solid #dddddd; width: 65%; min-height: 25px; border-radius: 25px; display: flex; align-items: center; justify-content: center;">Común</div>
        <div id="btnSec2Mas" style="border: 1px solid #dddddd; width: 15%; height:25px; border-radius: 25px; background:#fcfcfc; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <span>→</span>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    // Botones de género
    buttonConfig.gender.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleGenderClick(btn.key);
      });
    });

    // Botones de forma especial
    buttonConfig.special.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleSpecialFormClick(btn.key);
      });
    });

    // Botones de toggle
    buttonConfig.toggle.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleToggleClick(btn.key);
      });
    });

    // Navegación de secciones
    this.elements.sec1mas?.addEventListener("click", () => this.navigateSection(1, 1));
    this.elements.sec1menos?.addEventListener("click", () => this.navigateSection(1, -1));
    this.elements.sec2mas?.addEventListener("click", () => this.navigateSection(2, 1));
    this.elements.sec2menos?.addEventListener("click", () => this.navigateSection(2, -1));
  }

  handleGenderClick(gender) {
    const availableGenders = this.state.getAvailableGenders();
    if (availableGenders.includes(gender)) {
      this.state.activeGender = gender;
      this.state.selector1 = 0;
      this.state.selector2 = 0;
      this.updateAll();
    }
  }

  handleSpecialFormClick(form) {
    this.state.activeSpecialForm = this.state.activeSpecialForm === form ? "" : form;
    this.state.selector1 = 0;
    this.state.selector2 = 0;
    this.updateAll();
  }

  handleToggleClick(toggle) {
    this.state[`is${toggle.charAt(0).toUpperCase() + toggle.slice(1)}`] = 
      !this.state[`is${toggle.charAt(0).toUpperCase() + toggle.slice(1)}`];
    this.updateAll();
  }

  navigateSection(section, direction) {
    const selectorKey = `selector${section}`;
    const sectionsKey = `secciones${section}`;
    
    this.state[selectorKey] = (this.state[selectorKey] + direction + this.state[sectionsKey].length) % this.state[sectionsKey].length;
    
    if (section === 1) {
      this.state.selector2 = 0;
    }
    
    this.updateSections();
    this.updateImage();
  }

  updateButtonState(buttonType, key, isActive, isAvailable = true) {
    const element = this.elements[key];
    if (!element) return;

    const config = buttonConfig[buttonType]?.find(btn => btn.key === key);
    if (!config) return;

    if (!isAvailable) {
      element.className = "outer-circle disabledButton";
      element.querySelector(".middle-circle").className = "middle-circle gray";
      element.querySelector(".inner-circle").className = "inner-circle";
      element.style.pointerEvents = "none";
    } else {
      element.style.pointerEvents = "auto";
      if (isActive) {
        element.className = `outer-circle ${config.color}`;
        element.querySelector(".middle-circle").className = "middle-circle";
        element.querySelector(".inner-circle").className = `inner-circle ${config.color}`;
        element.querySelector(".svg-icon").className = "svg-icon white";
      } else {
        element.className = "outer-circle";
        element.querySelector(".middle-circle").className = `middle-circle ${config.color} transparent`;
        element.querySelector(".inner-circle").className = "inner-circle";
        element.querySelector(".svg-icon").className = "svg-icon";
      }
    }
  }

  updateSections() {
    this.state.secciones1 = this.state.getAvailableSections();
    
    if (this.state.selector1 >= this.state.secciones1.length) {
      this.state.selector1 = 0;
    }
    
    if (this.state.secciones1.length <= 1) {
      this.elements.seccion1.style.display = "none";
      this.state.isSeccion1 = this.state.secciones1[0] || "normal";
    } else {
      this.elements.seccion1.style.display = "flex";
      this.state.isSeccion1 = this.state.secciones1[this.state.selector1];
      this.elements.seccion1Texto.textContent = this.state.isSeccion1 === "normal" ? "Común" : this.state.isSeccion1;
    }
    
    this.state.secciones2 = this.state.getAvailableSubsections(this.state.isSeccion1);
    
    if (this.state.selector2 >= this.state.secciones2.length) {
      this.state.selector2 = 0;
    }
    
    if (this.state.secciones2.length <= 1) {
      this.elements.seccion2.style.display = "none";
      this.state.isSeccion2 = this.state.secciones2[0] || "";
    } else {
      this.elements.seccion2.style.display = "flex";
      this.state.isSeccion2 = this.state.secciones2[this.state.selector2];
      this.elements.seccion2Texto.textContent = this.state.isSeccion2;
    }
  }

  updateImage() {
    const pokemonData = this.state.getPokemonData();
    const imageName = this.state.buildImageName();
    
    // Actualizar disponibilidad de botones toggle
    const isShinyAvailable = pokemonData.variocolor !== false;
    const isTraseraAvailable = pokemonData.trasera !== false;
    
    this.updateButtonState('toggle', 'shiny', this.state.isShiny, isShinyAvailable);
    this.updateButtonState('toggle', 'trasera', this.state.isTrasera, isTraseraAvailable);
    
    // Actualizar imagen
    this.elements.imagenPokemonCuadro.onerror = () => {
      this.elements.imagenPokemonCuadro.src = "public/not_found.png";
    };
    this.elements.imagenPokemonCuadro.src = "public/" + imageName;
    
    this.logPokemonData(pokemonData, imageName);
  }

  updateAll() {
    // Actualizar estados de todos los botones
    const availableGenders = this.state.getAvailableGenders();
    const availableSpecialForms = this.state.getAvailableSpecialForms();
    
    buttonConfig.gender.forEach(btn => {
      const isAvailable = availableGenders.includes(btn.key);
      const isActive = this.state.activeGender === btn.key;
      this.updateButtonState('gender', btn.key, isActive, isAvailable);
    });
    
    buttonConfig.special.forEach(btn => {
      const isAvailable = availableSpecialForms.includes(btn.key);
      const isActive = this.state.activeSpecialForm === btn.key;
      this.updateButtonState('special', btn.key, isActive, isAvailable);
    });
    
    this.updateSections();
    this.updateImage();
  }

  logPokemonData(datos, imageName) {
    console.log("Imagen:", imageName);
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
      console.log("• Variocolor disponible:", datos.variocolor !== false);
      console.log("• Trasera disponible:", datos.trasera !== false);
      console.log("• Formas especiales disponibles:", this.state.getAvailableSpecialForms());
      console.log("• Forma especial activa:", this.state.activeSpecialForm || "Ninguna");
    }
  }
}

// Inicialización
const pokemonState = new PokemonState();
const pokemonUI = new PokemonUI(pokemonState);