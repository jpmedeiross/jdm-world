import cars from "../data/carsData";

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
