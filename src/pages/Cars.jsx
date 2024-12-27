const cars = [
    {
        id: 1, name: "Nissan Skyline GT-R",
        year: 1999,
        image: "https://am-s3-bucket-assets.s3.eu-west-2.amazonaws.com/silverstone/prod/lot_images/large/REC13467-1/REC13467-1_4.jpg.webp?dummy=1735327890",
        description: "O lendário Nissan Skyline GT-R é um ícone dos anos 90, conhecido por sua incrível performance e design agressivo."
    },
    {
        id: 2,
        name: "Toyota Supra MK4",
        year: 1994,
        image: "https://rmcmiami.com/wp-content/uploads/2022/01/DSC_3311-scaled.jpg",
        description: "O Toyota Supra MK4 é famoso por seu motor 2JZ e seu papel como estrela nos filmes da franquia Velozes e Furiosos."
    },
    {
        id: 3,
        name: "Mazda RX-7",
        year: 1993,
        image: "https://media.carsandbids.com/cdn-cgi/image/width=2080,quality=70/9933fc815a41cfeb8fd492a22d5008aea4e877d2/photos/6541034614.5xPwqMi6G.jpg?t=160858008006",
        description: "O Mazda RX-7 é um esportivo japonês único, com motor rotativo e um design que impressiona até hoje.",
    },
]

const Cars = () => {
    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold text-center mb-6">Carros JDM</h1>
            <div className="space-y-6">
                {cars.map((car) => (
                    <div
                        key={car.id}
                        className="border rounded shadow hover:shadow-lg p-4 flex flex-col items-center"
                    >
                        <img
                            src={car.image}
                            alt={car.name}
                            className="w-full max-w-md h-auto object-cover rounded mb-4"
                        />
                        <h2 className="text-xl font-bold mb-2">{car.name}</h2>
                        <p className="text-gray-600 mb-2">Ano: {car.year}</p>
                        <p className="text-gray-700 text-center">{car.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cars;
