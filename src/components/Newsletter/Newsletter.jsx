import {useState} from "react";
import {NewsletterStyle, FormContainer, InputField, CheckboxContainer, Button, Container} from "./Style";
import {SvgLogo} from "../Svgs/Svgs";

const Newsletter = ({darkMode = false}) => {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [aceitoTermos, setAceitoTermos] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!aceitoTermos) {
            alert("Você precisa aceitar os termos para continuar.");
            return;
        }
        console.log("Nome:", nome, "Email:", email);
        alert("Inscrição realizada com sucesso!");
    };

    return (
        <NewsletterStyle darkMode={darkMode}>
            <Container darkMode={darkMode}>
                <SvgLogo modo={"footer"}/>
                <h2>Fique atualizado com as principais novidades do mundo SaaS! Não perca nada!</h2>

                <FormContainer onSubmit={handleSubmit}>
                    <InputField
                        type="text"
                        placeholder="Nome completo"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                    />
                    <InputField
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <CheckboxContainer>
                        <input
                            type="checkbox"
                            checked={aceitoTermos}
                            onChange={() => setAceitoTermos(!aceitoTermos)}
                        />
                        <span>Li e concordo com os <a href="/termos">termos de uso</a> e <a href="/privacidade">política de privacidade</a></span>
                    </CheckboxContainer>
                    <Button type="submit">Cadastrar</Button>
                </FormContainer>
            </Container>
        </NewsletterStyle>
    );
};

export default Newsletter;