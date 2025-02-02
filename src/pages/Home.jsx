import Base from "./Base"
import Banner from "../components/Banner/Banner";
import CategoriaSecao from "../components/Categoria/CategoriaSecao";
import Newsletter from "../components/Newsletter/Newsletter";
import MostrarNoticiasColunasPreste from "../components/MostrarNoticiasColunasPreste/MostrarNoticiasColunasPreste";

const Home = () => {
  return (
    <Base>
        <Banner />
        <CategoriaSecao categoriaNome="Brasil" fundoCinza={true} />
        <CategoriaSecao categoriaNome="Mundo" fundoCinza={false} />
        <Newsletter/>
        <CategoriaSecao categoriaNome="Finanças" fundoCinza={false} />
        <CategoriaSecao categoriaNome="Pessoas" fundoCinza={true} />
        <MostrarNoticiasColunasPreste categoria1="Mundo" categoria2="Finanças" categoria3="Brasil" />
    </Base>
  )
}

export default Home