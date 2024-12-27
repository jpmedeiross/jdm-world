import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="text-center p-4">
            <h1>Bem-vindo ao JDM World!</h1>
            <p>Explore carros lendários da cultura japonesa.</p>
            <Link to={'/cars'}>
                <button className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Ver carros
                </button>
            </Link>
        </div>
    )
}

export default Home;