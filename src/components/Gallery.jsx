import { useContext } from "react";
import { MyContext } from "../context/MyContext";
import IconHeart from "./IconHeart";

const Gallery = () => {

  const {data, setData} = useContext(MyContext)

  if (!data || !data.photos || data.photos.length === 0) {
    return <div>No hay datos disponibles.</div>;
  }

  const clickLiked = (index)=> {
      const updatedData = data.photos.map((e, i)=> {
        if(i === index){
          return(
            {...e,
            liked: !e.liked}
          )
        }else{
          return e
        }
      })
      setData({...data, photos:updatedData})
  }


  return <div className="gallery grid-columns-5 p-3">

    {data.photos.map((element,index)=> {
      const style = {backgroundImage: `url(${element.src.medium})`}
      return(
        <div style={style} onClick={()=>clickLiked(index)} className="photo" key={element.id}>
          <IconHeart filled = {element.liked}/>
          {/* <img src={element.src.small} alt={element.alt} /> */}
          <p>{element.alt}</p>
        </div>
      )
    })}
  </div>;
};
export default Gallery;
