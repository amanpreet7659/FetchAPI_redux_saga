import { useDispatch, useSelector } from "react-redux"
import { loadPostStart } from "../redux/app.actions";

const Fetchpost = () => {
    const dispatch = useDispatch();
    // dispatch(loadPostStart())
    const fetchPost = () => {
        dispatch(loadPostStart())
    }
    const state = useSelector((state) => ({ ...state.app }))
    return (<>
        <h2>Fetch Posts</h2>
        {!state.loading && state.posts.map(post => (
            console.log('posts ', post),
            <li key={post.id}></li>
        ))}
        <button onClick={fetchPost}>Fetch</button>
    </>)
}

export default Fetchpost