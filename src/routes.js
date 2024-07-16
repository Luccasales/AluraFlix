import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio";
import NovoVideo from "pages/NovoVideo";
import Player from "components/Player"; // Certifique-se de ajustar o caminho conforme necessário
import Cabecalho from "components/Cabecalho";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Cabecalho />
            <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="/novovideo" element={<NovoVideo />} />
                <Route path="/player" element={<Player />} />
            </Routes>
        </BrowserRouter>
    );
}

export default AppRoutes;
    