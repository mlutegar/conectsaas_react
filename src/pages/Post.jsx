import Base from "./Base";
import PostPage from "../components/PostPage/PostPage";
import Newsletter from "../components/Newsletter/Newsletter";

const Post = () => {
    return (
        <Base>
            <PostPage />
            <Newsletter darkMode={true} />
        </Base>
    )
}

export default Post