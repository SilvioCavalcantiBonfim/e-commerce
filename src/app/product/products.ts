export interface Product{
    ID: number,
    DESCRIPTION: string,
    PRICE: number,
    PRICE_DESCRIPTION: string,
    IMG: string,
    AVAILABLES: Number
}

export const produtos = [
    { ID: 1,  DESCRIPTION: "Mouse gamer",              PRICE: 439.00,   PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/mouse-3.jpg",          AVAILABLES: 10},
    { ID: 2,  DESCRIPTION: "Monitor muito bom",        PRICE: 1200.50,  PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/monitor-1.jpg",        AVAILABLES: 15},
    { ID: 4,  DESCRIPTION: "Fone para quem joga FPS",  PRICE: 599.99,   PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/fone-de-ouvido-2.jpg", AVAILABLES: 19},
    { ID: 3,  DESCRIPTION: "Teclado excelente",        PRICE: 749.99,   PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/teclado-1.jpg",        AVAILABLES: 17},
    { ID: 5,  DESCRIPTION: "Fone de ouvido",           PRICE: 299.99,   PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/fone-de-ouvido-1.jpg", AVAILABLES: 50},
    { ID: 6,  DESCRIPTION: "Fone de ouvido bom",       PRICE: 399.99,   PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/fone-de-ouvido-3.jpg", AVAILABLES: 34},
    { ID: 7,  DESCRIPTION: "HD 1TB",                   PRICE: 499.99,   PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/hd.jpg",               AVAILABLES: 72},
    { ID: 8,  DESCRIPTION: "Combo de placa de vídeos", PRICE: 18449.99, PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/placa-video.jpg",      AVAILABLES: 21},
    { ID: 9,  DESCRIPTION: "Processador Ryzen",        PRICE: 1000,     PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/processador.jpg",      AVAILABLES: 9 },
    { ID: 10, DESCRIPTION: "Notebook bom",             PRICE: 2500,     PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/laptop-1.jpg",         AVAILABLES: 15},
    { ID: 11, DESCRIPTION: "Notebook excelente",       PRICE: 4500,     PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/laptop-2.jpg",         AVAILABLES: 12},
    { ID: 12, DESCRIPTION: "Mouse barato",             PRICE: 20,       PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/mouse-1.png",          AVAILABLES: 97},
    { ID: 13, DESCRIPTION: "Mouse ótimo",              PRICE: 200,      PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/mouse-2.jpg",          AVAILABLES: 85},
    { ID: 14, DESCRIPTION: "Mouse pequeno",            PRICE: 50,       PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/mouse-4.jpg",          AVAILABLES: 76},
    { ID: 15, DESCRIPTION: "Teclado bom",              PRICE: 159.99,   PRICE_DESCRIPTION: "À vista no PIX", IMG: "/assets/teclado-2.jpg",        AVAILABLES: 98},
]