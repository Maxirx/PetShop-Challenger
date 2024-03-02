

class Productos {
    constructor(nombre, descripcion, precio, stock, imagen, tipo) {
        this._id = Productos.obtenerSiguienteId()
        this.nombre = nombre
        this.descripcion = descripcion
        this.precio = precio
        this.stock = stock
        this.imagen = imagen
        this.tipo = tipo

    }

    static obtenerSiguienteId() {
        if (!this.contador) {
            this.contador = 1
        }
        return this.contador++;
    }
}



const arrayOfProductos = [
    new Productos("Pelota de goma para perros", "Pelota resistente y segura para jugar con tu perro.", 5.99, 50, "", "juguete"),
    new Productos("Juguete masticable en forma de hueso", "Juguete duradero que ayuda a mantener los dientes limpios y saludables.", 8.49, 30, "", "juguete"),
    new Productos("Juguete interactivo para gatos", "Juguete con plumas y sonido para entretener a tu gato durante horas.", 7.99, 40, "", "juguete"),
    new Productos("Peluche con forma de ratón para gatos", "Peluche suave y divertido que estimula el instinto de caza de tu gato.", 6.49, 20, "", "juguete"),
    new Productos("Cuerda trenzada para masticar", "Cuerda resistente para perros que les ayuda a limpiar sus dientes y fortalecer su mandíbula.", 9.99, 25, "", "juguete"),
    new Productos("Peluche con chirriador para cachorros", "Peluche diseñado especialmente para cachorros con chirriador para estimular su curiosidad.", 4.99, 35, "", "juguete"),
    new Productos("Juguete dispensador de comida para perros", "Juguete interactivo que dispensa golosinas mientras tu perro juega.", 12.99, 15, "", "juguete"),
    new Productos("Túnel de juego para gatos", "Túnel plegable y resistente con aberturas para que tu gato pueda esconderse y jugar.", 14.99, 10, "", "juguete"),
    new Productos("Pelota de tenis con cuerda para tirar", "Pelota de tenis con asa para tirar, ideal para juegos de buscar y traer.", 3.49, 45, "", "juguete"),
    new Productos("Juguete de cuerda para gatitos", "Juguete de cuerda con plumas y campana para gatitos que estimula su instinto de caza.", 5.49, 2, "", "juguete"),
    new Productos(
        "Antipulgas y garrapatas para perros",
        "Solución tópica para proteger a tu perro de pulgas y garrapatas.",
        15.99,
        20,
        "", "farmacia"
    ),
    new Productos(
        "Shampoo para piel sensible de gatos",
        "Shampoo suave y sin perfume para gatos con piel sensible.",
        10.49,
        15,
        "", "farmacia"
    ),
    new Productos(
        "Suplemento vitamínico para perros mayores",
        "Suplemento nutricional formulado para perros mayores que promueve la salud articular y la vitalidad.",
        20.99,
        10,
        "", "farmacia"
    ),
    new Productos(
        "Alimento para gatos esterilizados",
        "Alimento balanceado especialmente formulado para gatos esterilizados que ayuda a mantener un peso saludable.",
        25.49,
        25,
        "", "farmacia"
    ),
    new Productos(
        "Juguete dental para perros",
        "Juguete diseñado para promover la salud dental de tu perro al tiempo que proporciona horas de diversión.",
        8.99,
        30,
        "", "farmacia"
    ),
    new Productos(
        "Suplemento de ácidos grasos para gatos",
        "Suplemento dietético con ácidos grasos Omega-3 y Omega-6 para mantener la piel y el pelaje saludables en gatos.",
        12.99,
        20,
        "", "farmacia"
    ),
    new Productos(
        "Champú anticaspa para perros",
        "Champú suave y efectivo que ayuda a eliminar la caspa y a calmar la piel irritada de tu perro.",
        11.99,
        15,
        "", "farmacia"
    ),
    new Productos(
        "Cepillo de dientes para gatos",
        "Cepillo de dientes diseñado específicamente para gatos para ayudar a prevenir la acumulación de placa y sarro.",
        6.49,
        40,
        "", "farmacia"
    ),
    new Productos(
        "Limpiador de oídos para perros y gatos",
        "Solución suave y no irritante para limpiar los oídos de perros y gatos y prevenir infecciones.",
        9.99,
        20,
        "", "farmacia"
    ),
    new Productos(
        "Juguete rellenable con premios para perros",
        "Juguete interactivo que puedes rellenar con golosinas para mantener a tu perro entretenido y estimulado mentalmente.",
        14.99,
        25,
        "", "farmacia"
    )
];

const pushProductosParaImprimir = (productos) => {
    localStorage.setItem("prod", JSON.stringify(productos));
}

pushProductosParaImprimir(arrayOfProductos)

const obtenerProductosParaImprimir = () => {
    return JSON.parse(localStorage.getItem("prod")) || []
}