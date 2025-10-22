import { useEffect, useState } from "react";
import axios from "axios";
import {registerSW} from "virtual:pwa-register";


function App() {
    const [sondes, setSondes] = useState([]);

    useEffect(() => {
        /**
         * Récupère les sondes depuis l'API et met à jour l'état local.
         *
         * @async
         * @function fetchSondes
         * @throws {Error} Lance une erreur si la requête échoue.
         */
        const fetchSondes = async () => {
            try {
                const response = await axios.get(
                    `${import.meta.env.VITE_API_URL}/sondes?page=1&limit=50`
                );
                setSondes(response.data.data || []);
            } catch (error) {
                console.error("Erreur lors du chargement :", error);
            }
        };

        fetchSondes();
    }, []);






    return (
        <div className="container">
            <h1>Liste des sondes</h1>

            {sondes.length === 0 ? (
                <p>Aucune sonde trouvée.</p>
            ) : (
                <table className="table">
                    <thead>
                    <tr>
                        <th>Hauteur</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sondes.map((sonde) => (
                        <tr key={sonde.id}>
                            <td>{sonde.haut}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
}

export default App;
