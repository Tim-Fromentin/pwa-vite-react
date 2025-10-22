import { useEffect, useState } from "react";
import axios from "axios";


/**
 * Composant principal de l'application.
 *
 * Récupère et affiche la liste des sondes depuis l'API.
 *
 * @component
 * @returns {JSX.Element} Retourne le composant App
 */
function App() {
    /**
     * Liste des sondes récupérées depuis l'API.
     * @type {Array<Object>}
     */
    const [sondes, setSondes] = useState([]);

    useEffect(() => {
        /**
         * Récupère les sondes depuis l'API et met à jour l'état local.
         *
         * @async
         * @function
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
                throw error;
            }
        };

        fetchSondes();
    }, []);

        let mode = localStorage.getItem('mode')
    const handleCLick = () => {
            if (mode === 'light'){
                localStorage.setItem('mode', 'dark')
            } else if (mode === 'dark'){
                localStorage.setItem('mode', 'light')
            }
    }
    let styles = `
      --color-bg: #ffff;
  --color-table-thead: #f5f5f5;
  --color-text: #333;
  --color-table--hover: #fafafa;
    `
    if (mode === 'dark'){
        styles = `
      --color-bg: red;
  --color-table-thead: #f5f5f5;
  --color-text: #333;
  --color-table--hover: #fafafa;
    `
    }
    return (
        <>

            <button onClick={handleCLick}>Mode</button>
            <h1>Liste des sondes</h1>
            {sondes.length === 0 ? (
                <p>Aucune sonde trouvée.</p>
            ) : (
                <table className="table">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Hauteur</th>
                        <th>Date de réception</th>
                    </tr>
                    </thead>
                    <tbody>
                    {sondes.map((sonde) => (
                        <tr key={sonde.device_id}>
                            <td>{sonde.device_id}</td>
                            <td>{sonde.haut}</td>
                            <td>{sonde.received_at}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </>
    );
}

export default App;