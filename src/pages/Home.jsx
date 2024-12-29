import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="p-6 bg-slate-800">
            <h1 className="text-5xl font-extrabold text-center text-blue-700 mb-6">
                Bem-vindo ao Mundo JDM
            </h1>
            <p className="text-center text-gray-50 text-lg mb-8 max-w-2xl mx-auto">
                Explore os 3 carros mais lendários do mercado japonês, suas histórias e especificações únicas.
            </p>

            <div className="mb-8">
                <img
                    src="https://images.pexels.com/photos/9212878/pexels-photo-9212878.jpeg?cs=srgb&dl=pexels-dbaler-9212878.jpg&fm=jpg"
                    alt="Carros JDM"
                    className="w-full h-auto object-cover rounded-lg shadow-xl"
                />
            </div>

            <div className="text-center mb-10">
                <Link to="/cars">
                    <button className="px-8 py-4 bg-blue-700 text-white text-lg font-semibold rounded-lg hover:bg-blue-800 transition-all shadow-md hover:shadow-lg">
                        Explore os Carros
                    </button>
                </Link>
            </div>

            <div className="bg-slate-600 p-6 rounded-lg shadow-md max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold text-center text-black mb-6">Destaques</h2>
                <div className="space-y-6">
                    <div className="border p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4">
                        <img
                            src="https://am-s3-bucket-assets.s3.eu-west-2.amazonaws.com/silverstone/prod/lot_images/large/REC13467-1/REC13467-1_4.jpg.webp?dummy=1735327890"
                            alt="Nissan Skyline GT-R"
                            className="w-24 h-24 object-cover rounded"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-black">Nissan Skyline GT-R</h3>
                            <p className="text-black">
                                O lendário Nissan Skyline GT-R é um ícone dos anos 90, conhecido por sua incrível performance e design agressivo.
                            </p>
                        </div>
                    </div>
                    <div className="border p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center gap-4">
                        <img
                            src="https://rmcmiami.com/wp-content/uploads/2022/01/DSC_3311-scaled.jpg"
                            alt="Toyota Supra MK4"
                            className="w-24 h-24 object-cover rounded"
                        />
                        <div>
                            <h3 className="text-xl font-bold text-black">Toyota Supra MK4</h3>
                            <p className="text-black">
                                Famoso pelo motor 2JZ e sua participação na franquia Velozes e Furiosos.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
