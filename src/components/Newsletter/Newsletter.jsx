import { useState } from "react";
import { NewsletterStyle, FormContainer, InputField, CheckboxContainer, Button, Container } from "./Style";
import { SvgLogo } from "../Svgs/Svgs";
import WordPressApi from "../../services/wordpressApi";

const Newsletter = ({ darkMode = false }) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [aceitoTermos, setAceitoTermos] = useState(false);
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!aceitoTermos) {
            alert("Você precisa aceitar os termos para continuar.");
            return;
        }

        setLoading(true);
        setMessage("");

        try {
            const response = await WordPressApi.subscribeNewsletter({ nome, email });
            setMessage("Inscrição realizada com sucesso!");
            setNome("");
            setEmail("");
            setAceitoTermos(false);
        } catch (error) {
            setMessage(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <NewsletterStyle darkMode={darkMode}>
            <Container darkMode={darkMode}>
                <SvgLogo modo={"footer"} />
                <h2>Fique atualizado com as principais novidades do mundo SaaS! Não perca nada!</h2>

                <FormContainer onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        placeholder="Nome completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        required
                    />
                    <InputField
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <CheckboxContainer>
                        <input
                            type="checkbox"
                            checked={aceitoTermos}
                            onChange={() => setAceitoTermos(!aceitoTermos)}
                            required
                        />
                        <span>
                            Li e concordo com os <a href="/termos">termos de uso</a> e{" "}
                            <a href="/privacidade">política de privacidade</a>
                        </span>
                    </CheckboxContainer>
                    <Button type="submit" disabled={loading}>
                        {loading ? "Enviando..." : "Cadastrar"}
                    </Button>
                    {message && <p>{message}</p>}
                </FormContainer>
            </Container>
        </NewsletterStyle>
    );
};

export default Newsletter;
