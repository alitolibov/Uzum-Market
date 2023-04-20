const Img = ({index, fn, item}) => {

    let idx = index + 1

    return ( 
        <div onClick={() => fn(idx)} className="w-full bg-contain bg-no-repeat bg-center aspectImgSlider" style={{backgroundImage: `url('${item}')`}}></div>
     );
}
 
export default Img;