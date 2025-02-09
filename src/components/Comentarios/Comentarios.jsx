import { useState, useEffect } from "react";
import {
    ComentariosContainer,
    Comentario,
    Formulario,
    Input,
    TextArea,
    Label,
    BotaoEnviar,
    NomeTempo,
    Mensagem,
    ComentariosList, Conteudo
} from "./Style";
import { SvgLike, SvgDislike } from "../Svgs/Svgs";

const Comentarios = ({ postId }) => {
    const [comentarios, setComentarios] = useState([]);
    const [nome, setNome] = useState("");
    const [sobrenome, setSobrenome] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [charCount, setCharCount] = useState(0);

    useEffect(() => {
        const fetchComentarios = async () => {
            try {
                const response = await fetch(`https://www.conectasaas.com.br/api/comentarios.php?postId=${postId}`);
                const data = await response.json();
                setComentarios(data);
            } catch (error) {
                console.error("Erro ao carregar comentários:", error);
                }
        };

        fetchComentarios();
    }, [postId]);

    // 🔹 Enviar um novo comentário
    const handleEnviar = async (e) => {
        e.preventDefault();
        if (!nome || !sobrenome || !mensagem) {
            alert("Preencha todos os campos!");
            return;
        }

        const formData = new FormData();
        formData.append("postId", postId);
        formData.append("nome", nome);
        formData.append("sobrenome", sobrenome);
        formData.append("mensagem", mensagem);

        try {
            const response = await fetch("https://www.conectasaas.com.br/api/comentarios.php", {
                method: "POST",
                body: formData,
            });

            const result = await response.json();
            if (result.success) {
                // Adiciona o novo comentário na lista sem precisar recarregar
        const novoComentario = {
            id: comentarios.length + 1,
            nome: `${nome} ${sobrenome}`,
            data: "Agora mesmo",
            mensagem,
        };

        setComentarios([novoComentario, ...comentarios]);
        setNome("");
        setSobrenome("");
        setMensagem("");
        setCharCount(0);
            } else {
                alert(result.error);
            }
        } catch (error) {
            console.error("Erro ao enviar comentário:", error);
        }
    };

    return (
        <ComentariosContainer>
            <Conteudo>
                <h2>COMENTÁRIOS</h2>
                <p className="aviso">
                    Os comentários publicados aqui são de inteira responsabilidade de seus autores e não representam a
                    visão deste site.
                </p>

                <Formulario onSubmit={handleEnviar}>
                    <div className="form-container">
                        <div className="inputs">
                            <div>
                                <Label>Nome</Label>
                                <Input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required />
                            </div>
                            <div>
                                <Label>Sobrenome</Label>
                                <Input type="text" value={sobrenome} onChange={(e) => setSobrenome(e.target.value)} required />
                            </div>
                        </div>

                        <div className="mensagem-container">
                            <Label>Mensagem</Label>
                            <TextArea
                                value={mensagem}
                                onChange={(e) => {
                                    setMensagem(e.target.value);
                                    setCharCount(e.target.value.length);
                                }}
                                maxLength={600}
                                required
                            />
                            <span className="contador">{charCount}/600</span>
                        </div>
                    </div>
                    <BotaoEnviar type="submit">ENVIAR</BotaoEnviar>
                </Formulario>

                {comentarios.length === 0 ? (
                    <p>Sem comentários ainda.</p>
                ) : (
                    <ComentariosList>
                        {comentarios.map((c) => (
                            <Comentario key={c.id}>
                                <NomeTempo>
                                    <span className="nome">{c.nome}</span>
                                    <span className="tempo">{c.data}</span>
                                </NomeTempo>
                                <Mensagem>{c.mensagem}</Mensagem>
                            </Comentario>
                        ))}
                    </ComentariosList>
                )}
            </Conteudo>
        </ComentariosContainer>
    );
};

export default Comentarios;
