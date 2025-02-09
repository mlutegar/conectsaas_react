import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Loader from "../components/Loader/Loader";
import WordPressApi from "../services/wordpressApi";

const Base = (props) => {
    const { pathname } = useLocation();
    const [loading, setLoading] = useState(WordPressApi.isLoading);

    useEffect(() => {
        const checkLoading = () => setLoading(WordPressApi.isLoading);

        setLoading(true); // Ativa o Loader imediatamente ao trocar de página

        const interval = setInterval(() => {
            checkLoading();
            if (!WordPressApi.isLoading) {
                clearInterval(interval); // Para de monitorar quando os dados são carregados
                setLoading(false); // Desativa o Loader somente quando os dados chegarem
            window.scrollTo(0, 0);
            }
        }, 100); // Verifica a cada 100ms

        return () => clearInterval(interval);
    }, [pathname]);

    return (
        <>
            {loading && <Loader />} {/* Exibe o Loader enquanto estiver carregando */}
            <Header />
            <div className="container">
                {props.children}
            </div>
            <Footer />
        </>
    );
};

export default Base;
