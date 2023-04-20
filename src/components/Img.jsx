const Img = ({item}) => {
    return ( 
        <div className="w-full bg-contain bg-no-repeat bg-center aspectImgSlider" style={{backgroundImage: `url('${item}')`}}></div>
     );
}
 
export default Img;