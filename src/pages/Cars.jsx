import cars from "../data/carsData";

const Cars = () => {
    return (
        <div className="p-6 bg-slate-800">

            <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8">
                Carros JDM
            </h1>


            <div className="flex flex-col items-center gap-6">
                {cars.map((car) => (
                    <div
                        key={car.id}
                        className="bg-slate-600 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 max-w-md w-full"
                    >

                        <img
                            src={car.image}
                            alt={car.name}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-xl font-bold text-black mb-2">{car.name}</h2>
                            <p className="text-black text-sm">{car.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Cars;
