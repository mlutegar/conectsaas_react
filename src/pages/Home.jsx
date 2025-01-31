import Base from "./Base"
import Banner from "../components/Banner/Banner";
import CategoriaSecao from "../components/Categoria/CategoriaSecao";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
  return (
    <Base>
        <Banner />
        <CategoriaSecao categoriaNome="Brasil" fundoCinza={true} />
        <CategoriaSecao categoriaNome="Mundo" fundoCinza={false} />
        <Newsletter/>
        <CategoriaSecao categoriaNome="Finanças" fundoCinza={true} />
        <CategoriaSecao categoriaNome="Pessoas" fundoCinza={false} />
    </Base>
  )
}

export default Home