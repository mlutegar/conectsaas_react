import Base from "./Base"
import Banner from "../components/Banner/Banner";
import CategoriaSecao from "../components/Categoria/CategoriaSecao";
import Newsletter from "../components/Newsletter/Newsletter";
import MostrarNoticiasColunasPreste from "../components/MostrarNoticiasColunasPreste/MostrarNoticiasColunasPreste";
import {HomeDesktop, HomeMobile} from "../style/Home";

const Home = () => {
  return (
    <Base>
        <Banner />
        <HomeDesktop>
            <CategoriaSecao categoriaNome="Brasil" fundoCinza={true} />
            <CategoriaSecao categoriaNome="Mundo" fundoCinza={false} />
            <Newsletter/>
            <CategoriaSecao categoriaNome="Finanças" fundoCinza={false} />
            <CategoriaSecao categoriaNome="Inovação" fundoCinza={true} />
        </HomeDesktop>
        <HomeMobile>
            <CategoriaSecao categoriaNome="Brasil" fundoCinza={true} />
            <CategoriaSecao categoriaNome="Mundo" fundoCinza={false} />
            <CategoriaSecao categoriaNome="Finanças" fundoCinza={true} />
            <CategoriaSecao categoriaNome="Inovação" fundoCinza={false} />
            <Newsletter/>
        </HomeMobile>
        <MostrarNoticiasColunasPreste categoria1="Mundo" categoria2="Finanças" categoria3="Brasil" />
    </Base>
  )
}

export default Home