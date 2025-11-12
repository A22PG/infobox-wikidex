import "./style.css";

const pokemon = "Charizard";
const japones = "リザードン";
const japonesTraduccion = "Lizardon";
const numeroPokemon = "0006"
const enlaceWikidex = "https://www.wikidex.net/wiki/Alcremie"
const loadingImageDelay = 150;

/* const pokemonJSON = {
  "forma": {
    "macho": {
      "normal": {
        "datos": "pikachu_normal",
        "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/e/e0/latest/20200214192043/Pikachu_HOME.png",
        "variocolor": "https://img.pokemondb.net/sprites/home/shiny/1x/pikachu.png",
      },
      "Con gorra": {
        "Original": {
          "datos": "pikachu_gorra",
          "imagen": "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-original-cap.png",
        },
        "Hoenn": {
          "datos": "pikachu_gorra",
          "imagen": "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-hoenn-cap.png",
        },
        "Sinnoh": {
          "datos": "pikachu_gorra",
          "imagen": "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-sinnoh-cap.png",
        },
        "Teselia": {
          "datos": "pikachu_gorra",
          "imagen": "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-unova-cap.png",
        },
        "Kalos": {
          "datos": "pikachu_gorra",
          "imagen": "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-kalos-cap.png",
        },
        "Alola": {
          "datos": "pikachu_gorra",
          "imagen": "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-alola-cap.png",
        },
        "Compañero": {
          "datos": "pikachu_gorra",
          "imagen": "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-partner-cap.png",
        },
        "Trotamundos": {
          "datos": "pikachu_gorra",
          "imagen": "https://img.pokemondb.net/sprites/home/normal/1x/pikachu-world-cap.png",
        },
      }
    },
    "hembra": {
      "datos": "pikachu_normal",
      "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/4/40/latest/20200214185804/Pikachu_HOME_hembra.png",
      "variocolor": "https://img.pokemondb.net/sprites/home/shiny/pikachu-f.png"
    },
    "giga": {
      "datos": "pikachu_giga",
      "imagen": "https://images.wikidexcdn.net/mwuploads/wikidex/thumb/d/d8/latest/20191016155951/Pikachu_Gigamax.png/270px-Pikachu_Gigamax.png",
      "variocolor": "https://img.pokemondb.net/sprites/home/shiny/1x/pikachu-gigantamax.png"
    },
    "mega": {
      "datos": "pikachu_mega",
      "imagen": "",
    },
    "megaX":{
      "datos":"pikachu_megaX",
      "imagen":"https://images.wikidexcdn.net/mwuploads/wikidex/7/7d/latest/20251016084320/Mega-Raichu_X.png",
      "trasera":"https://images.wikidexcdn.net/mwuploads/wikidex/9/96/latest/20241104015348/Pikachu_%28Halloween%29_morado_Sleep.png"
    },
    "megaY":{
      "datos":"pikachu_megaY",
      "imagen":"https://images.wikidexcdn.net/mwuploads/wikidex/f/f1/latest/20251016084336/Mega-Raichu_Y.png",
      "trasera":"https://images.wikidexcdn.net/mwuploads/wikidex/4/4c/latest/20180418223326/Evento_Pikachu_con_vuelo.png",
      "variocolor":"https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20150615185638/Pikachu_Pok%C3%A9mon_Mundo_Megamisterioso.png",
      "variocolorTrasera":"https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250127090512/Raichu.png",
    }
  },
  "info": {
    "pikachu_normal": {
      "tipo": ["Eléctrico", "Eléctrico"],
      "altura": 0.4,
      "peso": 6,
      "habilidad": [
        { "nombre": "Electricidad Estática" },
        { "nombre": "Otro" },

      ],
      "generacion": "1",
      "categoria": "Ratón",
      "figura": "8",
      "huevo": ["Campo", "Hada"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5a/latest/20200302181628/Grito_de_Pikachu_en_la_s%C3%A9ptima_generaci%C3%B3n.ogg",
      "genero": {
        "macho": "49",
        "hembra": "49"
      },
      "color": "Amarillo",
      "pronunciacion": [
        { "fonetica": "pi.ˈka.chu", "zona": "España" },
        { "fonetica": "ˈpi.ka.chu", "zona": "Hispanoamérica", "nota": ["Nota 1", "Nota 2"] }
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
      ],
      "generacion": "7",
      "categoria": "Ratón",
      "figura": "8",
      "color": "Verde",
      "genero":{
        "macho":"100",
        "hembra":"0",
      },
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/1/1e/latest/20180510202106/Grito_de_Pikachu_con_gorra.ogg"
    },
    "pikachu_giga": {
      "tipo": ["Eléctrico"],
      "altura": 21,
      "habilidad": [
        { "nombre": "Electricidad Estática" },
        { "nombre": "Pararrayos", "oculta": true }
      ],
      "generacion": "8",
      "categoria": "Ratón",
    },
    "pikachu_mega": {
      "tipo": ["Agua","Bicho"],
      "peso":"34",
      "altura": 21,
      "habilidad": [
        { "nombre": "Electricidad Estática" },
        { "nombre": "Pararrayos", "oculta": true }
      ],
      "generacion": "9",
      "figura":"12",
      "color":"Blanco",
      "categoria": "Ratón"
    },
    "pikachu_megaX": {
      "tipo": ["Hielo","Astral"],
      "peso":"34",
      "altura": 21,
      "habilidad": [
        { "nombre": "Electricidad Estática" },
        { "nombre": "Pararrayos", "oculta": true }
      ],
      "genero":{
        "hembra":"100"
      },
      "generacion": "9",
      "figura":"12",
      "categoria": "Ratón"
    },
    "pikachu_megaY": {
      "tipo": ["Fantasma","Dragón"],
      "peso":"34",
      "altura": 21,
      "genero":{
        "macho":"20",
        "hembra":"80"
      },
      "habilidad": [
        { "nombre": "Electricidad Estática" },
        { "nombre": "Pararrayos", "oculta": true }
      ],
      "generacion": "9",
      "color":"Rojo",
      "categoria": "Ratón"
    }
  }
};
*/

const pokemonJSON = {
  "forma": {
    "normal": {
      "datos": "charizard_normal",
          "imagen": [
            "https://images.wikidexcdn.net/mwuploads/wikidex/f/fc/latest/20210524165035/Charizard_HOME.png",
            "https://images.wikidexcdn.net/mwuploads/wikidex/9/95/latest/20160817212623/Charizard.png",
          ],
          "variocolor": "https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20210524164951/Charizard_HOME_variocolor.png"
    },
    "megaX": {
      "datos":"charizard_megaX",
      "imagen":"https://images.wikidexcdn.net/mwuploads/wikidex/6/63/latest/20210524164940/Mega-Charizard_X_HOME.png",
      "variocolor":"https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20210524164741/Mega-Charizard_X_HOME_variocolor.png"
    },
    "megaY": {
      "datos":"charizard_megaY",
      "imagen":"https://images.wikidexcdn.net/mwuploads/wikidex/b/b1/latest/20210524164716/Mega-Charizard_Y_HOME.png",
      "variocolor":"https://images.wikidexcdn.net/mwuploads/wikidex/b/bb/latest/20210524164852/Mega-Charizard_Y_HOME_variocolor.png"
    },
    "giga": {
      "datos":"charizard_giga",
      "imagen":"https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20200214184340/Charizard_Gigamax_HOME.png",
      "variocolor":"https://images.wikidexcdn.net/mwuploads/wikidex/7/77/latest/20200214193200/Charizard_Gigamax_HOME_variocolor.png"
    }
  },
  "info": {
    "charizard_normal": {
      "tipo": ["Fuego", "Volador"],
      "altura": "1'7",
      "peso": "90'5",
      "habilidad": [
        { "nombre": "Mar llamas" },
        { "nombre": "Poder solar", "oculta": true }
      ],
      "genero": {
        "macho": "87.5",
        "hembra": "12.5"
      },
      "generacion": "1",
      "categoria": ["Llama"],
      "figura": "6",
      "huevo": ["Monstruo", "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5e/latest/20240213073305/Grito_de_Charizard.ogg",
      "color": ["Rojo", "Negro"],
      "pronunciacion": [
        { "fonetica": "'cha.ri.zard" }
      ]
    },
    "charizard_megaX": {
      "tipo": ["Fuego", "Dragón"],
      "altura": "1'7",
      "peso": "110'5",
      "habilidad": [
        { "nombre": "Garra dura" },
      ],
      "genero": {
        "macho": "87.5",
        "hembra": "12.5"
      },
      "generacion": "6",
      "categoria": ["Llama"],
      "figura": "6",
      "huevo": ["Monstruo", "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/2/2e/latest/20140217185652/Grito_de_Mega-Charizard_X.ogg",
      "color": ["Rojo", "Negro"],
      "pronunciacion": [
        { "fonetica": "'cha.ri.zard" }
      ]
    },
    "charizard_megaY": {
      "tipo": ["Fuego", "Volador"],
      "altura": "1'7",
      "peso": "100'5",
      "habilidad": [
        { "nombre": "Sequía" },
      ],
      "genero": {
        "macho": "87.5",
        "hembra": "12.5"
      },
      "generacion": "6",
      "categoria": ["Llama"],
      "figura": "6",
      "huevo": ["Monstruo", "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20140217185728/Grito_de_Mega-Charizard_Y.ogg",
      "color": ["Rojo", "Negro"],
      "pronunciacion": [
        { "fonetica": "'cha.ri.zard" }
      ]
    },
    "charizard_giga": {
      "tipo": ["Fuego", "Volador"],
      "altura": "1'7",
      "habilidad": [
        { "nombre": "Sequía" },
      ],
      "genero": {
        "macho": "87.5",
        "hembra": "12.5"
      },
      "generacion": "8",
      "categoria": ["Llama"],
      "figura": "6",
      "huevo": ["Monstruo", "Dragón"],
      "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20140217185728/Grito_de_Mega-Charizard_Y.ogg",
      "color": ["Rojo", "Negro"],
      "pronunciacion": [
        { "fonetica": "'cha.ri.zard" }
      ]
    },
  }
}

const datosWikidex = {
  "tipo": {
    "Acero": "https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20221208180543/Tipo_acero_EP.png",
    "Agua": "https://images.wikidexcdn.net/mwuploads/wikidex/5/59/latest/20221208180426/Tipo_agua_EP.png",
    "Bicho": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5d/latest/20221208180434/Tipo_bicho_EP.png",
    "Dragón": "https://images.wikidexcdn.net/mwuploads/wikidex/b/b8/latest/20221208180443/Tipo_drag%C3%B3n_EP.png",
    "Eléctrico": "https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20221208180452/Tipo_el%C3%A9ctrico_EP.png",
    "Fantasma": "https://images.wikidexcdn.net/mwuploads/wikidex/0/03/latest/20221208180503/Tipo_fantasma_EP.png",
    "Fuego": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20221208180625/Tipo_fuego_EP.png",
    "Hada": "https://images.wikidexcdn.net/mwuploads/wikidex/9/97/latest/20221208180633/Tipo_hada_EP.png",
    "Hielo": "https://images.wikidexcdn.net/mwuploads/wikidex/1/17/latest/20221208180641/Tipo_hielo_EP.png",
    "Lucha": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5f/latest/20221208180651/Tipo_lucha_EP.png",
    "Normal": "https://images.wikidexcdn.net/mwuploads/wikidex/9/99/latest/20221208180705/Tipo_normal_EP.png",
    "Planta": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a7/latest/20221208180710/Tipo_planta_EP.png",
    "Psíquico": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9b/latest/20221208180717/Tipo_ps%C3%ADquico_EP.png",
    "Roca": "https://images.wikidexcdn.net/mwuploads/wikidex/8/88/latest/20221208180726/Tipo_roca_EP.png",
    "Siniestro": "https://images.wikidexcdn.net/mwuploads/wikidex/d/de/latest/20221208180734/Tipo_siniestro_EP.png",
    "Tierra": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c9/latest/20221208180742/Tipo_tierra_EP.png",
    "Veneno": "https://images.wikidexcdn.net/mwuploads/wikidex/1/11/latest/20221208180751/Tipo_veneno_EP.png",
    "Volador": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9a/latest/20221208180800/Tipo_volador_EP.png",
    "Astral": "https://images.wikidexcdn.net/mwuploads/wikidex/8/82/latest/20231216092909/Tipo_astral_EP.png",
  },
  "color": {
    "Acero": "#cccccc",
    "Agua": "#b0e2ff",
    "Bicho": "#99cc33",
    "Dragón": "#ab82ff",
    "Eléctrico": "#ffd700",
    "Fantasma": "#778899",
    "Fuego": "#ff7f00",
    "Hada": "#ffb0ff",
    "Hielo": "#add8e6",
    "Lucha": "#ff6a6a",
    "Normal": "#ddccaa",
    "Planta": "#99ff66",
    "Psíquico": "#ffb5c5",
    "Roca": "#cd853f",
    "Siniestro": "#a9a9a9",
    "Tierra": "#deb887",
    "Veneno": "#cc88bb",
    "Volador": "#baaaff",
    "Astral": "#f1f7fb",
  },
  "figura": {
    "1": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a0/latest/20200214140440/Figura_1.png",
    "2": "https://images.wikidexcdn.net/mwuploads/wikidex/1/18/latest/20200214140740/Figura_2.png",
    "3": "https://images.wikidexcdn.net/mwuploads/wikidex/0/01/latest/20200214140905/Figura_3.png",
    "4": "https://images.wikidexcdn.net/mwuploads/wikidex/1/15/latest/20200214141009/Figura_4.png",
    "5": "https://images.wikidexcdn.net/mwuploads/wikidex/2/21/latest/20200214141122/Figura_5.png",
    "6": "https://images.wikidexcdn.net/mwuploads/wikidex/f/ff/latest/20200214141238/Figura_6.png",
    "7": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c7/latest/20200214141337/Figura_7.png",
    "8": "https://images.wikidexcdn.net/mwuploads/wikidex/6/67/latest/20200214141425/Figura_8.png",
    "9": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9c/latest/20200214141545/Figura_9.png",
    "10": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c5/latest/20200214141655/Figura_10.png",
    "11": "https://images.wikidexcdn.net/mwuploads/wikidex/9/93/latest/20200214141809/Figura_11.png",
    "12": "https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20200214141912/Figura_12.png",
    "13": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5b/latest/20200214142011/Figura_13.png",
    "14": "https://images.wikidexcdn.net/mwuploads/wikidex/c/cb/latest/20200214142056/Figura_14.png",
  },
  "generación": {
    "1": "https://images.wikidexcdn.net/mwuploads/wikidex/b/b0/latest/20241019145047/Primera_generaci%C3%B3n.svg",
    "2": "https://images.wikidexcdn.net/mwuploads/wikidex/3/38/latest/20241019145155/Segunda_generaci%C3%B3n.svg",
    "3": "https://images.wikidexcdn.net/mwuploads/wikidex/4/4a/latest/20241019145242/Tercera_generaci%C3%B3n.svg",
    "4": "https://images.wikidexcdn.net/mwuploads/wikidex/5/5a/latest/20241019145319/Cuarta_generaci%C3%B3n.svg",
    "5": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20241019145355/Quinta_generaci%C3%B3n.svg",
    "6": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9e/latest/20241019145423/Sexta_generaci%C3%B3n.svg",
    "7": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a6/latest/20241019145454/S%C3%A9ptima_generaci%C3%B3n.svg",
    "8": "https://images.wikidexcdn.net/mwuploads/wikidex/4/4b/latest/20241019145522/Octava_generaci%C3%B3n.svg",
    "9": "https://images.wikidexcdn.net/mwuploads/wikidex/8/8c/latest/20241019145549/Novena_generaci%C3%B3n.svg",
  },
  "icono": {
    "macho": "https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg",
    "hembra": "https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg",
    "variocolor": "https://images.wikidexcdn.net/mwuploads/wikidex/a/a5/latest/20250111221940/Variocolor_(WikiDex).svg",
    "trasera": "https://images.wikidexcdn.net/mwuploads/wikidex/9/9f/latest/20250914123215/Rotación_%28Wikidex%29.svg",
    "mega": "https://images.wikidexcdn.net/mwuploads/wikidex/b/b5/latest/20250819100853/Megaevolución_icono.svg",
    "megaX": "https://images.wikidexcdn.net/mwuploads/wikidex/5/52/latest/20250913220359/Megaevolución_X_(Wikidex).svg",
    "megaY": "https://images.wikidexcdn.net/mwuploads/wikidex/4/45/latest/20250913220424/Megaevolución_Y_(Wikidex).svg",
    "giga": "https://images.wikidexcdn.net/mwuploads/wikidex/c/c0/latest/20250913220520/Gigamax_(Wikidex).svg",
    "grito": "https://images.wikidexcdn.net/mwuploads/wikidex/2/2f/latest/20251112155152/Grito_Pok%C3%A9mon_%28Wikidex%29.svg",
    "artwork": "./palette.svg",
    "galeria": "./photo.svg"
  },
  "default": "https://images.wikidexcdn.net/mwuploads/wikidex/d/da/latest/20081011120239/Imagen_no_disponible.svg"
}

const buttonConfig = {
  gender: [
    { id: "btnMacho", key: "macho", color: "azulColor", icon: datosWikidex.icono.macho, size: "50px" },
    { id: "btnHembra", key: "hembra", color: "rojoColor", icon: datosWikidex.icono.hembra, size: "50px" }
  ],
  special: [
    { id: "btnMega", key: "mega", color: "megaColor", icon: datosWikidex.icono.mega, size: "40px" },
    { id: "btnMegaX", key: "megaX", color: "megaXColor", icon: datosWikidex.icono.megaX, size: "40px" },
    { id: "btnMegaY", key: "megaY", color: "megaYColor", icon: datosWikidex.icono.megaY, size: "40px" },
    { id: "btnGiga", key: "giga", color: "gigamaxColor", icon: datosWikidex.icono.giga, size: "28px" }
  ],
  toggle: [
    { id: "btnShiny", key: "shiny", color: "amarilloColor", icon: datosWikidex.icono.variocolor, size: "40px" },
    { id: "btnTrasera", key: "trasera", color: "verdeColor", icon: datosWikidex.icono.trasera, size: "25px" }
  ],
};

class PokemonState {
  constructor() {
    this.forma = pokemonJSON.forma;
    this.info = pokemonJSON.info;

    this.pokemon = "Pikachu";
    this.activeGender = "";
    this.activeSpecialForm = "";
    this.isShiny = false;
    this.isTrasera = false;
    this.isArtwork = localStorage.getItem('preferArtwork') === 'true';
    this.selector1 = 0;
    this.selector2 = 0;
    this.secciones1 = [];
    this.secciones2 = [];
    this.isSeccion1 = "";
    this.isSeccion2 = "";
    this.lastSeccion2Name = "";
    this.currentAudio = null;
    this.isLoadingAudio = false;

    const availableGenders = this.getAvailableGenders();
    if (availableGenders.length > 0) {
      this.activeGender = availableGenders[0];
    }

    this.initializeSections();
  }

  initializeSections() {
    this.secciones1 = this.getAvailableSections();
    if (this.secciones1.length > 0) {
      this.isSeccion1 = this.secciones1[0];
      this.secciones2 = this.getAvailableSubsections(this.isSeccion1);
      if (this.secciones2.length > 0) {
        this.isSeccion2 = this.secciones2[0];
        this.lastSeccion2Name = this.isSeccion2;
      }
    }
  }

  getAvailableGenders() {
    if (!this._cachedGenders) {
      const keys = Object.keys(this.forma);
      if (keys.includes("nogen")) {
        this._cachedGenders = [];
        return this._cachedGenders;
      }
      if (keys.includes("normal")) {
        this._cachedGenders = ["macho", "hembra"];
        if (!this.forma._duplicatedNormal) {
          const normalData = this.forma.normal;
          if (!this.forma.macho) this.forma.macho = normalData;
          if (!this.forma.hembra) this.forma.hembra = normalData;
          this.forma._duplicatedNormal = true;
        }
        return this._cachedGenders;
      }
      this._cachedGenders = keys.filter(
        k => k === "macho" || k === "hembra"
      ).filter(g => this.forma[g] && this.forma[g] !== "");
    }
    return this._cachedGenders;
  }


  getAvailableSpecialForms() {
    const possible = ["mega", "megaX", "megaY", "giga"];
    return possible.filter(form => this.forma.hasOwnProperty(form) && this.forma[form] !== "");
  }

  shouldHideSections() {
    return ["mega", "megaX", "megaY", "giga"].includes(this.activeSpecialForm);
  }

  getCurrentFormaNode() {
    if (this.activeSpecialForm && this.forma[this.activeSpecialForm]) {
      return this.forma[this.activeSpecialForm];
    } else {
      const availableGenders = this.getAvailableGenders();
      if (availableGenders.length > 0 && this.activeGender) {
        return this.forma[this.activeGender];
      } else if (availableGenders.length > 0) {
        this.activeGender = availableGenders[0];
        return this.forma[this.activeGender];
      } else {
        return this.forma;
      }
    }
  }

  getAvailableSections() {
    const node = this.getCurrentFormaNode();
    if (!node || typeof node === "string") return [];
    const excludeKeys = ["mega", "megaX", "megaY", "giga", "primigenio", "origen"];
    if (node.datos !== undefined) return [];
    return Object.keys(node).filter(key => !excludeKeys.includes(key));
  }

  getAvailableSubsections(mainSection) {
    const node = this.getCurrentFormaNode();
    if (!node || typeof node === "string") return [];
    const sectionData = node[mainSection];
    if (!sectionData || typeof sectionData === "string") return [];
    if (sectionData.datos !== undefined) return [];
    return Object.keys(sectionData);
  }

  getPokemonData() {
    if (this.activeSpecialForm && this.forma[this.activeSpecialForm]) {
      const specialNode = this.forma[this.activeSpecialForm];
      const datosKey = (typeof specialNode === "string") ? specialNode : specialNode.datos;
      return this.info[datosKey] || {};
    }

    const node = this.getCurrentFormaNode();
    if (!node) return {};

    if (node.datos !== undefined && typeof node.datos === "string") {
      return this.info[node.datos] || {};
    }

    const sectionData = node[this.isSeccion1];
    if (!sectionData) return {};
    if (typeof sectionData === "string") {
      return this.info[sectionData] || {};
    }
    if (sectionData.datos !== undefined) {
      return this.info[sectionData.datos] || {};
    }
    const sub = sectionData[this.isSeccion2];
    if (sub) {
      if (typeof sub === "string") return this.info[sub] || {};
      if (sub.datos !== undefined) return this.info[sub.datos] || {};
    }

    return {};
  }

  getCurrentImageUrls() {
    if (this.activeSpecialForm && this.forma[this.activeSpecialForm]) {
      const node = this.forma[this.activeSpecialForm];
      return (typeof node === "string") ? {} : node;
    }

    const node = this.getCurrentFormaNode();
    if (!node) return {};

    if (node.datos !== undefined) {
      return node;
    }

    const sectionData = node[this.isSeccion1];
    if (!sectionData) return {};

    if (typeof sectionData === "string") {
      return {};
    }

    if (sectionData.datos !== undefined) {
      return sectionData;
    }

    const sub = sectionData[this.isSeccion2];
    if (!sub) return {};
    if (typeof sub === "string") return {};
    return sub;
  }

  buildImageSrc() {
    const urls = this.getCurrentImageUrls();

    const getImageFromField = (field) => {
      if (!field) return null;
      if (typeof field === 'string') return field;
      if (Array.isArray(field)) {
        if (field.length === 0) return null;
        if (field.length === 1) return field[0];
        return this.isArtwork ? field[1] : field[0];
      }
      return null;
    };

    if (this.isTrasera && this.isShiny) {
      const img = getImageFromField(urls.variocolorTrasera);
      if (img) return img;
    }

    if (this.isTrasera) {
      const img = getImageFromField(urls.trasera);
      if (img) return img;
    }

    if (this.isShiny) {
      const img = getImageFromField(urls.variocolor);
      if (img) return img;
    }

    const img = getImageFromField(urls.imagen);
    if (img) return img;

    return "";
  }

  playAudio(audioFile) {
    try {
      const audio = new Audio(`public/audio/${audioFile}`);
      audio.play().catch(error => {
      });
      this.currentAudio = audio;
    } catch (error) {
    }
  }
}

class PokemonUI {
  constructor(state) {
    this.state = state;
    this.initializeHTML();
    this.elements = this.getElements();
    this.setupEventListeners();
    this.updateAll();
    this.imageLoading = false;

    window.addEventListener('resize', () => this.handleResize());
  }

  getElements() {
    const elements = {
      imagenPokemonCuadro: document.querySelector("#imagenPokemonCuadro"),
      contenedorPokemon: document.querySelector(".contenedorPokemon"),
      seccion1: document.querySelector("#seccion1"),
      seccion2: document.querySelector("#seccion2"),
      seccion1Texto: document.querySelector("#seccion1Texto"),
      seccion2Texto: document.querySelector("#seccion2Texto"),
      contenedorInfo: document.querySelector("#contenedorInfo"),
      botonVolumen: document.querySelector("#botonVolumen"),
      botonArtwork: document.querySelector("#botonArtwork"),
      botonEnlace: document.querySelector("#botonEnlace"),
      loadingIndicator: document.querySelector("#loadingIndicator")
    };

    [...buttonConfig.gender, ...buttonConfig.special, ...buttonConfig.toggle].forEach(btn => {
      elements[btn.key] = document.querySelector(`#${btn.id}`);
    });

    const navButtons = {
      'btnSec1Mas': 'sec1mas',
      'btnSec1Menos': 'sec1menos',
      'btnSec2Mas': 'sec2mas',
      'btnSec2Menos': 'sec2menos'
    };

    Object.entries(navButtons).forEach(([id, key]) => {
      elements[key] = document.querySelector(`#${id}`);
    });

    return elements;
  }

  initializeHTML() {
    const colorBg = this.getBackgroundColor();
    document.querySelector("#app").innerHTML = `
      <div class="contenedorPokemon" style="background:${colorBg}">
        <div class="tituloPokemon">${pokemon}</div>
        <div class="subtituloPokemon">
          <div class="nombrePokemon">${japones} (${japonesTraduccion})</div>
          <div class="numeroPokemon">#${numeroPokemon}</div>
        </div>
        <div>
        <div class="contenidoPokemon">
        <div class="contenedorImagen">
  <div class="imagenWrapper">
    <img id="imagenPokemonCuadro" class="imagenPokemon" src="${datosWikidex.default}" height="200;">
    
    <div id="loadingIndicator" class="loadingIndicator" style="display:none;">
      <div class="spinner"></div>
    </div>
  </div>

  <div id="botonArtwork" class="circuloExterno botonEsquinaSupIzq">
    <div class="circuloMedio artworkColor transparenteBoton">
      <div class="circuloInterno">
        <img class="iconoSVG" src="${datosWikidex.icono.artwork}" alt="Artwork" style="height:28px">
      </div>
    </div>
  </div>

  <div id="botonEnlace" class="circuloExterno botonEsquinaInfIzq">
    <div class="circuloMedio enlaceColor transparenteBoton">
      <div class="circuloInterno">
        <img class="iconoSVG" src="${datosWikidex.icono.galeria}" alt="Enlace" style="height:28px">
      </div>
    </div>
  </div>
  
  <div id="botonVolumen" class="circuloExterno botonEsquinaSupDer" style="display:none;">
  <div class="circuloMedio gritoColor transparente">
    <div class="circuloInterno">
      <img class="iconoSVG" src="${datosWikidex.icono.grito}" alt="Volumen" style="height:28px">
    </div>
  </div>
</div>

  <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(buttonConfig.gender)}
              <div class="separadorBoton"></div>
              ${this.generateButtons(buttonConfig.toggle)}
            </div>
          </div>
          
          <hr class="lineaSeparadora">
          
          <div class="contenedorBotones">
            <div class="filaBoton">
              ${this.generateButtons(buttonConfig.special)}
            </div>
          </div>
          
          ${this.generateSectionControls()}
        </div>
        <div id="contenedorInfo" class="contenedorInfo"></div>
        </div>
      </div>
    `;
  }

  generateButtons(buttons) {
    return buttons.map(btn => `
      <div id="${btn.id}" class="circuloExterno">
        <div class="circuloMedio ${btn.color} transparenteBoton">
          <div class="circuloInterno">
            <img class="iconoSVG" src="${btn.icon}" alt="${btn.key}" style="height:${btn.size}">
          </div>
        </div>
      </div>
    `).join('');
  }

  generateSectionControls() {
    return `
      <div id="seccion1" class="seccionControles">
        <div id="btnSec1Menos" class="seccionSelector">
          <span>←</span>
        </div>
        <div id="seccion1Texto" class="textoSeccion">Común</div>
        <div id="btnSec1Mas" class="seccionSelector">
          <span>→</span>
        </div>
      </div>
      <div id="seccion2" class="seccionControles" style="display: none;">
        <div id="btnSec2Menos" class="seccionSelector">
          <span>←</span>
        </div>
        <div id="seccion2Texto" class="textoSeccion">Común</div>
        <div id="btnSec2Mas" class="seccionSelector">
          <span>→</span>
        </div>
      </div>
    `;
  }

  setupEventListeners() {
    buttonConfig.gender.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleGenderClick(btn.key);
      });
    });

    buttonConfig.special.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleSpecialFormClick(btn.key);
      });
    });

    buttonConfig.toggle.forEach(btn => {
      this.elements[btn.key]?.addEventListener("click", () => {
        this.handleToggleClick(btn.key);
      });
    });

    this.elements.sec1mas?.addEventListener("click", () => this.navigateSection(1, 1));
    this.elements.sec1menos?.addEventListener("click", () => this.navigateSection(1, -1));
    this.elements.sec2mas?.addEventListener("click", () => this.navigateSection(2, 1));
    this.elements.sec2menos?.addEventListener("click", () => this.navigateSection(2, -1));

    this.elements.botonVolumen?.addEventListener("click", () => {
      const pokemonData = this.state.getPokemonData();

      if (this.state.currentAudio && !this.state.currentAudio.paused) {
        this.state.currentAudio.pause();
        this.state.currentAudio.currentTime = 0;
        this.state.currentAudio = null;
        this.state.isLoadingAudio = false;
        this.updateVolumeButton();
        return;
      }

      if (this.state.isLoadingAudio) {
        return;
      }

      if (pokemonData.grito && pokemonData.grito.startsWith("https://")) {
        this.state.isLoadingAudio = true;
        this.updateVolumeButton();

        const audio = new Audio();

        audio.addEventListener('canplaythrough', () => {
          this.state.isLoadingAudio = false;
          audio.play().then(() => {
            this.updateVolumeButton();
          }).catch(() => {
            this.state.isLoadingAudio = false;
            this.state.currentAudio = null;
            this.updateVolumeButton();
          });
        }, { once: true });

        audio.addEventListener('error', () => {
          this.state.isLoadingAudio = false;
          this.state.currentAudio = null;
          this.updateVolumeButton();
        });

        audio.addEventListener('play', () => {
          this.updateVolumeButton();
        });

        audio.addEventListener('pause', () => {
          this.updateVolumeButton();
        });

        audio.addEventListener('ended', () => {
          this.state.currentAudio = null;
          this.updateVolumeButton();
        });

        audio.src = pokemonData.grito;
        this.state.currentAudio = audio;
      }
    });

    this.elements.botonArtwork?.addEventListener("click", () => {
      this.state.isArtwork = !this.state.isArtwork;
      localStorage.setItem('preferArtwork', this.state.isArtwork);
      this.updateAll();
    });

    this.elements.botonEnlace?.addEventListener("click", () => {
      window.location.href = enlaceWikidex;
    });

    this.elements.botonEnlace?.addEventListener("click", () => {
      window.open(enlaceWikidex, '_blank');
    });
  }

  handleVolumeClick() {
    const pokemonData = this.state.getPokemonData();
    if (pokemonData.grito) {
      this.state.playAudio(pokemonData.grito);
    }
  }

  handleResize() {
    this.updateTipos();
  }

  getBackgroundColor() {
  const pokemonData = this.state.getPokemonData();
  
  if (!pokemonData.tipo || pokemonData.tipo.length === 0) {
    return "#f4f4f4ff";
  }
  
  if (pokemonData.tipo.length === 1) {
    const tipoColor = datosWikidex.color[pokemonData.tipo[0]];
    return tipoColor || "#FFFFFF";
  }
  
  const colores = pokemonData.tipo.map(tipo => datosWikidex.color[tipo] || "#FFFFFF");
  return `linear-gradient(to right, ${colores.join(", ")})`;
}

updateBackgroundColor() {
  const colorBg = this.getBackgroundColor();
  if (this.elements.contenedorPokemon) {
    this.elements.contenedorPokemon.style.background = colorBg;
  }
}

  handleGenderClick(gender) {
    const availableGenders = this.state.getAvailableGenders();
    if (availableGenders.includes(gender)) {
      this.state.activeGender = gender;
      this.state.selector1 = 0;
      this.state.selector2 = 0;
      this.state.initializeSections();
      this.updateAll();
    }
  }

  handleSpecialFormClick(form) {
    this.state.activeSpecialForm = this.state.activeSpecialForm === form ? "" : form;
    this.state.selector1 = 0;
    this.state.selector2 = 0;
    this.state.initializeSections();
    this.updateAll();
  }

  handleToggleClick(toggle) {
    const urls = this.state.getCurrentImageUrls();

    const shinyAvailable = !!urls.variocolor;
    const traseraAvailable = !!urls.trasera || !!urls.variocolorTrasera;

    if (toggle === 'shiny' && !shinyAvailable) return;
    if (toggle === 'trasera' && !traseraAvailable) return;

    this.state[`is${toggle.charAt(0).toUpperCase() + toggle.slice(1)}`] =
      !this.state[`is${toggle.charAt(0).toUpperCase() + toggle.slice(1)}`];
    this.updateAll();
  }

  handleArtworkClick() {
    this.state.isArtwork = !this.state.isArtwork;
    this.updateAll();
  }

  playAudio(audioUrl) {
    try {
      const audio = new Audio(audioUrl);
      audio.play().catch();

      this.currentAudio = audio;
    } catch (error) {
      console.log(error)
    }
  }

  navigateSection(section, direction) {
    const selectorKey = `selector${section}`;
    const sectionsKey = `secciones${section}`;

    this.state[selectorKey] = (this.state[selectorKey] + direction + this.state[sectionsKey].length) % this.state[sectionsKey].length;

    if (section === 1) {
      const previousSeccion2Name = this.state.lastSeccion2Name;
      this.state.secciones2 = this.state.getAvailableSubsections(this.state.secciones1[this.state.selector1]);
      const matchingIndex = this.state.secciones2.findIndex(sec => sec === previousSeccion2Name);

      if (matchingIndex !== -1) {
        this.state.selector2 = matchingIndex;
      } else {
        this.state.selector2 = 0;
      }
      if (this.state.secciones2.length > 0) {
        this.state.lastSeccion2Name = this.state.secciones2[this.state.selector2];
      }
    } else {
      if (this.state.secciones2.length > 0) {
        this.state.lastSeccion2Name = this.state.secciones2[this.state.selector2];
      }
    }

    this.updateSections();
    this.updateImage();
    this.updateTipos();
    this.updateBackgroundColor();
  }

  updateButtonState(buttonType, key, isActive, isAvailable) {
    const element = this.elements[key];
    if (!element) {
      return;
    }

    const config = buttonConfig[buttonType]?.find(btn => btn.key === key);
    if (!config) {
      return;
    }

    if (!isAvailable) {
      element.className = "circuloExterno botonDeshabilitado";
      element.querySelector(".circuloMedio").className = "circuloMedio grisColor";
      element.querySelector(".circuloInterno").className = "circuloInterno";
      element.querySelector(".iconoSVG").className = "iconoSVG deshabilitado";
      element.style.pointerEvents = "none";
    } else {
      element.style.pointerEvents = "auto";
      if (isActive) {
        element.className = `circuloExterno ${config.color}`;
        element.querySelector(".circuloMedio").className = "circuloMedio";
        element.querySelector(".circuloInterno").className = `circuloInterno ${config.color}`;
        element.querySelector(".iconoSVG").className = "iconoSVG blanco";
      } else {
        element.className = "circuloExterno";
        element.querySelector(".circuloMedio").className = `circuloMedio ${config.color} transparenteBoton`;
        element.querySelector(".circuloInterno").className = "circuloInterno";
        element.querySelector(".iconoSVG").className = "iconoSVG";
      }
    }
  }

  updateSections() {
    if (this.state.shouldHideSections()) {
      this.elements.seccion1.style.display = "none";
      this.elements.seccion2.style.display = "none";
      this.state.isSeccion1 = "";
      this.state.isSeccion2 = "";
      return;
    }

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

  updateVolumeButton() {
    const pokemonData = this.state.getPokemonData();
    const botonVolumen = this.elements.botonVolumen;

    if (!pokemonData.grito) {
      botonVolumen.style.display = "none";
      return;
    }

    botonVolumen.style.display = "flex";

    const circuloMedio = botonVolumen.querySelector('.circuloMedio');
    const circuloInterno = botonVolumen.querySelector('.circuloInterno');
    const img = botonVolumen.querySelector('img');

    if (this.state.isLoadingAudio) {
      botonVolumen.className = 'circuloExterno botonEsquinaSupDer';
      circuloMedio.className = 'circuloMedio gritoColor transparenteBoton';
      circuloInterno.className = 'circuloInterno';
      img.style.display = 'none';

      let spinner = botonVolumen.querySelector('.audio-spinner');
      if (!spinner) {
        spinner = document.createElement('div');
        spinner.className = 'audio-spinner';
        circuloInterno.appendChild(spinner);
      }
      spinner.style.display = 'block';
      return;
    }

    const spinner = botonVolumen.querySelector('.audio-spinner');
    if (spinner) spinner.style.display = 'none';
    img.style.display = 'block';

    const isPlaying = this.state.currentAudio && !this.state.currentAudio.paused;

    if (isPlaying) {
      botonVolumen.className = 'circuloExterno botonEsquinaSupDer gritoColor';
      circuloMedio.className = 'circuloMedio';
      circuloInterno.className = 'circuloInterno gritoColor';
      img.className = 'iconoSVG blanco';
    } else {
      botonVolumen.className = 'circuloExterno botonEsquinaSupDer';
      circuloMedio.className = 'circuloMedio gritoColor transparenteBoton';
      circuloInterno.className = 'circuloInterno';
      img.className = 'iconoSVG';
      img.src = datosWikidex.icono.grito;
    }
  }

  updateArtworkButton() {
    const botonArtwork = this.elements.botonArtwork;

    botonArtwork.style.display = "flex";

    const circuloMedio = botonArtwork.querySelector('.circuloMedio');
    const circuloInterno = botonArtwork.querySelector('.circuloInterno');
    const img = botonArtwork.querySelector('img');

    if (this.state.isArtwork) {
      botonArtwork.className = 'circuloExterno botonEsquinaSupIzq artworkColor';
      circuloMedio.className = 'circuloMedio';
      circuloInterno.className = 'circuloInterno artworkColor';
      img.className = 'iconoSVG blanco';
    } else {
      botonArtwork.className = 'circuloExterno botonEsquinaSupIzq';
      circuloMedio.className = 'circuloMedio artworkColor transparenteBoton';
      circuloInterno.className = 'circuloInterno';
      img.className = 'iconoSVG';
    }
  }

  updateTipos() {
    const pokemonData = this.state.getPokemonData();
    const contenedorInfo = this.elements.contenedorInfo;

    contenedorInfo.innerHTML = '';

    if (!pokemonData || Object.keys(pokemonData).length === 0) {
      return;
    }

    if ((pokemonData.tipo && pokemonData.tipo.length > 0) || pokemonData.generacion !== undefined) {
      const tiposHTML = (pokemonData.tipo && pokemonData.tipo.length > 0)
        ? pokemonData.tipo.map(tipo => {
          const imagenTipo = datosWikidex.tipo[tipo] || 'ruta/por_defecto.png';
          return `<img src="${imagenTipo}" height="22" alt="${tipo}">`;
        }).join('')
        : '';


      const imgGeneracion = datosWikidex.generación[pokemonData.generacion] || datosWikidex.default;
      let generacionHTML = '';
      if (pokemonData.generacion !== undefined) {
        const generaciones = ['Primera', 'Segunda', 'Tercera', 'Cuarta', 'Quinta', 'Sexta', 'Séptima', 'Octava', 'Novena', 'Décima', 'Undécima', 'Duodécima'];
        const generacionTexto = generaciones[pokemonData.generacion - 1] || pokemonData.generacion;
        generacionHTML = `
          <div class="tarjeta">
            <div class="tituloTarjeta">Generación</div>
            <div class="contenidoTarjeta">
              <div class="tipoGeneracionContainer">
                <img src="${imgGeneracion}" height="20" alt="${generacionTexto} generación"><div class="generacionSpacing"></div>${generacionTexto}
              </div>
            </div>
          </div>
        `;
      }

      const tipoCard = tiposHTML ? `
        <div class="tarjeta">
          <div class="tituloTarjeta">Tipo</div>
          <div class="contenidoTarjeta">
            <div class="tiposContainer">${tiposHTML}</div>
          </div>
        </div>
      ` : `<div class="tarjeta"><div class="tituloTarjeta">Tipo</div><div class="contenidoTarjeta">–</div></div>`;

      contenedorInfo.innerHTML += `
        <div class="contenedorMedidas">
          ${tipoCard}
          ${generacionHTML || `<div class="tarjeta"><div class="tituloTarjeta">Generación</div><div class="contenidoTarjeta">–</div></div>`}
        </div>
      `;
    }

    if (pokemonData.genero) {
      let barras = '';

      if (pokemonData.genero.macho > 0) {
        const porcentajeMacho = parseFloat(pokemonData.genero.macho);
        const bordeMacho = porcentajeMacho === 100
          ? 'border-radius: 5px;'
          : 'border-top-left-radius: 5px; border-bottom-left-radius: 5px;';

        barras += `
      <div class="generoContainer">
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/c/cc/latest/20250104233921/Macho.svg" alt="Macho">
        <div class="generoBarra">
          <div class="generoBarraMacho" style="flex-basis: ${porcentajeMacho}%; ${bordeMacho}"></div>
          ${porcentajeMacho < 100
            ? `<div class="generoBarraVacia" style="flex-basis: ${100 - porcentajeMacho}%;"></div>`
            : ''}
          <div class="generoPorcentaje"><span>${porcentajeMacho.toString().replace('.', "'")}%</span></div>
        </div>
      </div>
    `;
      }

      if (pokemonData.genero.hembra > 0) {
        const porcentajeHembra = parseFloat(pokemonData.genero.hembra);
        const bordeHembra = porcentajeHembra === 100
          ? 'border-radius: 5px;'
          : 'border-top-left-radius: 5px; border-bottom-left-radius: 5px;';

        barras += `
      <div class="generoContainer">
        <img src="https://images.wikidexcdn.net/mwuploads/wikidex/3/34/latest/20250104234028/Hembra.svg" alt="Hembra">
        <div class="generoBarra">
          <div class="generoBarraHembra" style="flex-basis: ${porcentajeHembra}%; ${bordeHembra}"></div>
          ${porcentajeHembra < 100
            ? `<div class="generoBarraVacia" style="flex-basis: ${100 - porcentajeHembra}%;"></div>`
            : ''}
          <div class="generoPorcentaje"><span>${porcentajeHembra.toString().replace('.', "'")}%</span></div>
        </div>
      </div>
    `;
      }

      contenedorInfo.innerHTML += `
    <div class="tarjetaIndividual">
      <div class="tituloTarjeta">Género</div>
      <div class="contenidoTarjeta">
        <div style="width: 100%;">${barras}</div>
      </div>
    </div>
  `;
    } else {
      contenedorInfo.innerHTML += `
    <div class="tarjetaIndividual">
      <div class="tituloTarjeta">Género</div>
      <div class="contenidoTarjeta">
        Sin género
      </div>
    </div>
  `;
    }


    if (pokemonData.altura !== undefined || pokemonData.peso !== undefined) {
      let medidasHTML = '<div class="contenedorMedidas">';

      if (pokemonData.altura !== undefined) {
        medidasHTML += `
          <div class="tarjeta">
            <div class="tituloTarjeta">Altura</div>
            <div class="contenidoTarjeta">
              <span>${pokemonData.altura} m</span>
            </div>
          </div>
        `;
      }

      if (pokemonData.peso !== undefined) {
        medidasHTML += `
          <div class="tarjeta">
            <div class="tituloTarjeta">Peso</div>
            <div class="contenidoTarjeta">
              <span>${pokemonData.peso} kg</span>
            </div>
          </div>
        `;
      } else {
        medidasHTML += `
          <div class="tarjeta">
            <div class="tituloTarjeta">Peso</div>
            <div class="contenidoTarjeta">
              <span>??? kg</span>
            </div>
          </div>
        `;
      }

      medidasHTML += '</div>';
      contenedorInfo.innerHTML += medidasHTML;
    }

    if (pokemonData.habilidad && pokemonData.habilidad.length > 0) {
      const habilidadesNormales = pokemonData.habilidad.filter(hab => !hab.oculta);
      const habilidadesOcultas = pokemonData.habilidad.filter(hab => hab.oculta);

      let habilidadesHTML = '<div class="contenedorMedidas">';

      if (habilidadesNormales.length > 0) {
        const habilidadesNormalesHTML = habilidadesNormales.map(hab =>
          `<span>${hab.nombre}</span><br>`
        ).join('');

        const tituloNormal = habilidadesNormales.length === 1 ? 'Habilidad' : 'Habilidades';

        habilidadesHTML += `
          <div class="tarjeta">
            <div class="tituloTarjeta">${tituloNormal}</div>
            <div class="contenidoTarjeta">
              <div>${habilidadesNormalesHTML}</div>
            </div>
          </div>
        `;
      }

      if (habilidadesOcultas.length > 0) {
        const habilidadesOcultasHTML = habilidadesOcultas.map(hab =>
          `<span>${hab.nombre}</span><br>`
        ).join('');

        const tituloOculta = habilidadesOcultas.length === 1 ? 'Habilidad oculta' : 'Habilidades ocultas';

        habilidadesHTML += `
          <div class="tarjeta">
            <div class="tituloTarjeta">${tituloOculta}</div>
            <div class="contenidoTarjeta">
              <div>${habilidadesOcultasHTML}</div>
            </div>
          </div>
        `;
      }

      habilidadesHTML += '</div>';
      contenedorInfo.innerHTML += habilidadesHTML;
    }


    if (pokemonData.figura !== undefined || pokemonData.color) {
      const imgFigura = datosWikidex.figura[pokemonData.figura] || datosWikidex.default;
      let figuraHTML = '';
      if (pokemonData.figura !== undefined) {
        figuraHTML = `
          <div class="tarjeta">
            <div class="tituloTarjeta">Figura</div>
            <div class="contenidoTarjeta">
              <img src="${imgFigura}" height="30" alt="Figura ${pokemonData.figura}">
            </div>
          </div>
        `;
      } else {
        figuraHTML = `<div class="tarjeta"><div class="tituloTarjeta">Figura</div><div class="contenidoTarjeta">–</div></div>`;
      }

      const colores = {
        Azul: "#3D8BFF",
        Amarillo: "#FFD700",
        Blanco: "#EEEEEE",
        Gris: "#696969",
        Marrón: "#B8860B",
        Morado: "#6A5ACD",
        Negro: "#000000",
        Rojo: "#FF6347",
        Rosa: "#DB7093",
        Verde: "#228B22"
      };
      const colorHex = colores[pokemonData.color] || "#FFFFFF";

      let colorCard = '';
      if (pokemonData.color) {
        const coloresArray = Array.isArray(pokemonData.color) ? pokemonData.color : [pokemonData.color];
        const coloresHTML = coloresArray.map(colorNombre => {
          const colorHex = colores[colorNombre] || "#FFFFFF";
          return `<span class="colorMuestra" style="background-color:${colorHex};"></span><span>${colorNombre}</span>`;
        }).join('');
        
        const tituloColor = coloresArray.length === 1 ? 'Color' : 'Colores';
        
        colorCard = `
          <div class="tarjeta">
            <div class="tituloTarjeta">${tituloColor}</div>
            <div class="contenidoTarjeta">
              <div class="colorContenedor">${coloresHTML}</div>
            </div>
          </div>
        `;
      } else {
        colorCard = `<div class="tarjeta"><div class="tituloTarjeta">Color</div><div class="contenidoTarjeta">—</div></div>`;
      }

      contenedorInfo.innerHTML += `
        <div class="contenedorMedidas">
          ${figuraHTML}
          ${colorCard}
        </div>
      `;
    }

    if (pokemonData.categoria || (pokemonData.huevo && pokemonData.huevo.length > 0)) {
  let categoriaCard = '';
  if (pokemonData.categoria) {
    const categorias = Array.isArray(pokemonData.categoria) ? pokemonData.categoria : [pokemonData.categoria];
    const categoriasHTML = categorias.map(cat => {
      if (typeof cat === 'string') {
        return `<span>Pokémon ${cat}</span>`;
      } else {
        const notasHTML = cat.nota ? cat.nota.map(nota => `<ref>${nota}</ref>`).join('') : '';
        return `<span>Pokémon ${cat.nombre || cat.valor || cat}${notasHTML}</span>`;
      }
    }).join('<br>');
    
    categoriaCard = `
      <div class="tarjeta">
        <div class="tituloTarjeta">Categoría</div>
        <div class="contenidoTarjeta">
          <div>${categoriasHTML}</div>
        </div>
      </div>
    `;
  } else {
    categoriaCard = `<div class="tarjeta"><div class="tituloTarjeta">Categoría</div><div class="contenidoTarjeta">—</div></div>`;
  }

  let huevoHTML = '';
  if (pokemonData.huevo && pokemonData.huevo.length > 0) {
    huevoHTML = pokemonData.huevo.map(grupo => {
      if (typeof grupo === 'string') {
        return `<span>${grupo}</span>`;
      } else {
        const notasHTML = grupo.nota ? grupo.nota.map(nota => `<ref>${nota}</ref>`).join('') : '';
        return `<span>${grupo.nombre || grupo}${notasHTML}</span>`;
      }
    }).join('<br>');
  } else {
    huevoHTML = '—';
  }

  const huevoCard = `
    <div class="tarjeta">
      <div class="tituloTarjeta">Grupo huevo</div>
      <div class="contenidoTarjeta">
        <div>${huevoHTML}</div>
      </div>
    </div>
  `;

  contenedorInfo.innerHTML += `
    <div class="contenedorMedidas">
      ${categoriaCard}
      ${huevoCard}
    </div>
  `;
}

    if (pokemonData.pronunciacion && pokemonData.pronunciacion.length > 0) {
      let pronunciacionesHTML = '';

      const pronunciaciones = pokemonData.pronunciacion.map(p => {
        let zonaHTML = '';
        if (p.zona === 'España') {
          zonaHTML = ' <abbr title="España">(ES)</abbr>';
        } else if (p.zona === 'Hispanoamérica') {
          zonaHTML = ' <abbr title="Hispanoamérica">(HA)</abbr>';
        }

        let notasHTML = '';
        if (p.nota && p.nota.length > 0) {
          notasHTML = p.nota.map(nota => `<ref>${nota}</ref>`).join('');
        }

        return `/ ${p.fonetica} /${zonaHTML}${notasHTML}`;
      }).join('<br>');

      pronunciacionesHTML += `
      <div class="contenedorMedidas">
      <div class="tarjeta">
        <div class="tituloTarjeta">${pokemonData.pronunciacion.length === 1 ? 'Pronunciación' : 'Pronunciaciones'}</div>
        <div class="contenidoTarjeta">
          <div>${pronunciaciones}</div>
        </div>
        </div>
        </div>
      `;

      contenedorInfo.innerHTML += pronunciacionesHTML;
    }
  }

  updateImage() {
    const pokemonData = this.state.getPokemonData();
    const imageSrc = this.state.buildImageSrc();
    const urls = this.state.getCurrentImageUrls();

    const isShinyAvailable = !!urls.variocolor;
    const isTraseraAvailable = !!urls.trasera || !!urls.variocolorTrasera;

    if (!isShinyAvailable && this.state.isShiny) this.state.isShiny = false;
    if (!isTraseraAvailable && this.state.isTrasera) this.state.isTrasera = false;

    this.updateButtonState('toggle', 'shiny', this.state.isShiny, isShinyAvailable);
    this.updateButtonState('toggle', 'trasera', this.state.isTrasera, isTraseraAvailable);

    this.updateVolumeButton();
    this.updateArtworkButton();


    const testImg = new Image();
    let hasError = false;
    let loadingTimeout;

    loadingTimeout = setTimeout(() => {
      this.showLoadingIndicator();
    }, loadingImageDelay);

    testImg.onload = () => {
      if (!hasError) {
        clearTimeout(loadingTimeout);
        this.elements.imagenPokemonCuadro.src = imageSrc;
        this.hideLoadingIndicator(false);
      }
    };

    testImg.onerror = () => {
      hasError = true;
      clearTimeout(loadingTimeout);

      const defaultTestImg = new Image();

      defaultTestImg.onload = () => {
        this.elements.imagenPokemonCuadro.src = datosWikidex.default;
        this.hideLoadingIndicator(false);
      };

      defaultTestImg.onerror = () => {
        this.hideLoadingIndicator(true);
      };

      defaultTestImg.src = datosWikidex.default;
    };

    testImg.src = imageSrc || datosWikidex.default;
  }

  showLoadingIndicator() {
    const indicator = this.elements.loadingIndicator;
    if (!indicator) return;
    indicator.style.display = 'flex';
    indicator.classList.remove('error');
    this.imageLoading = true;
  }

  hideLoadingIndicator(isError = false) {
    const indicator = this.elements.loadingIndicator;
    if (!indicator) return;

    if (isError) {
      indicator.classList.add('error');
      setTimeout(() => {
        indicator.style.display = 'none';
        indicator.classList.remove('error');
        this.imageLoading = false;
      }, 2000);
    } else {
      indicator.style.display = 'none';
      this.imageLoading = false;
    }
  }

  showLoadingIndicator() {
    const indicator = this.elements.loadingIndicator;
    indicator.style.display = 'flex';
    indicator.classList.remove('error');
    this.imageLoading = true;
  }

  hideLoadingIndicator(isError = false) {
    const indicator = this.elements.loadingIndicator;

    if (isError) {
      indicator.classList.add('error');
      setTimeout(() => {
        indicator.style.display = 'none';
        indicator.classList.remove('error');
        this.imageLoading = false;
      }, 2000);
    } else {
      indicator.style.display = 'none';
      this.imageLoading = false;
    }
  }


  updateAll() {
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
    this.updateTipos();
    this.updateBackgroundColor();
  }
}

const pokemonState = new PokemonState();
const pokemonUI = new PokemonUI(pokemonState);