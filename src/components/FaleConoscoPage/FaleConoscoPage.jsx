import {useState} from "react";
import {
    SobreNosContainer,
    Titulo,
    Texto,
    FormularioContainer,
    Input,
    Label,
    BotaoEnviar,
    InputContainer
} from "./Style";

const FaleConoscoPage = () => {
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        mensagem: ""
    });

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Formulário enviado:", formData);
        alert("Mensagem enviada com sucesso!");
        setFormData({nome: "", sobrenome: "", email: "", mensagem: ""});
    };

    return (
        <SobreNosContainer>
            <Titulo>FALE CONOSCO</Titulo>
            <Texto>
                Tem alguma dúvida, sugestão ou precisa de suporte? Estamos aqui para ajudar! Entre em contato conosco,
                preencha o formulário abaixo e nossa equipe entrará em contato com você. Aguardamos sua mensagem!
            </Texto>

            <FormularioContainer onSubmit={handleSubmit}>
                <InputContainer>
                    <div>
                        <Label htmlFor="nome">Nome</Label>
                        <Input
                            type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div>
                        <Label htmlFor="sobrenome">Sobrenome</Label>
                        <Input
                            type="text"
                            name="sobrenome"
                            value={formData.sobrenome}
                            onChange={handleChange}
                            required
                        />
                    </div>
                </InputContainer>

                <Label htmlFor="email">E-mail</Label>
                <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />

                <Label htmlFor="mensagem">Mensagem</Label>
                <Input
                    as="textarea"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                />

                <BotaoEnviar type="submit">ENVIAR</BotaoEnviar>
            </FormularioContainer>
        </SobreNosContainer>
    );
};

export default FaleConoscoPage;
