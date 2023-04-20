import { useSelector } from "react-redux";

const Liked = () => {
    const data = useSelector(state => state.goods.data)
    const likedID = useSelector(state => state.liked.data)
    // let filtered = data.filter(item => {
    //     likedID.filter(el => {
    //         if(item.id === el) {
    //              return item
    //         }
    //     })
    //     return item
    // })

    console.log(likedID);
    return ( 
    <div className="grid grid-cols-5">
        {
            
        }
    </div> );
}
 
export default Liked;