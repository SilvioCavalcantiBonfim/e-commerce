export interface Product{
    ID: String,
    NAME: String,
    IMG: String,
    PRICE: number,
    DISCOUNT?: number
}


export const products = [
    { ID: '1',  NAME: "Mouse gamer",              PRICE: 439.00,   IMG: "/assets/mouse-3.png", DISCOUNT: 0.2 },
    { ID: '2',  NAME: "Monitor muito bom",        PRICE: 1200.50,  IMG: "/assets/monitor-1.png" },
    { ID: '3',  NAME: "Teclado excelente",        PRICE: 749.99,   IMG: "/assets/teclado-1.png", DISCOUNT: 0.22},
    { ID: '4',  NAME: "Fone para quem joga FPS",  PRICE: 599.99,   IMG: "/assets/fone-de-ouvido-2.png", DISCOUNT: 0.15},
    { ID: '5',  NAME: "Fone de ouvido",           PRICE: 299.99,   IMG: "/assets/fone-de-ouvido-1.png" },
    { ID: '6',  NAME: "Fone de ouvido bom",       PRICE: 399.99,   IMG: "/assets/fone-de-ouvido-3.png" },
    { ID: '7',  NAME: "HD 1TB",                   PRICE: 499.99,   IMG: "/assets/hd.png", DISCOUNT: 0.1  },
    { ID: '8',  NAME: "Combo de placa de vídeos", PRICE: 18449.99, IMG: "/assets/placa-video.png" },
    { ID: '9',  NAME: "Processador Ryzen",        PRICE: 1000,     IMG: "/assets/processador.png" },
    { ID: '10', NAME: "Notebook bom",             PRICE: 2500,     IMG: "/assets/laptop-1.png" },
    { ID: '11', NAME: "Notebook excelente",       PRICE: 4500,     IMG: "/assets/laptop-2.png" },
    { ID: '12', NAME: "Mouse barato",             PRICE: 20,       IMG: "/assets/mouse-4.png" },
    { ID: '13', NAME: "Mouse ótimo",              PRICE: 200,      IMG: "/assets/mouse-2.png" },
    { ID: '14', NAME: "Mouse bom",            PRICE: 50,       IMG: "/assets/mouse-1.png" },
    { ID: '15', NAME: "Teclado bom",              PRICE: 159.99,   IMG: "/assets/teclado-2.png" }
]