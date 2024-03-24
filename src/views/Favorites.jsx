import { useContext } from "react";
import { MyContext } from "../context/MyContext";

const Favorites = () => {
  
  const {data,setData} = useContext(MyContext)

const likedPhotos = data.photos.filter((e)=> e.liked)

  return (
    <div>
      <h1 className="titulo">Fotos favoritas</h1>
      <div className="p-3 gallery grid-columns-4">
        {likedPhotos.map((element)=>{
          return  <img key={element.id} src={element.src.small} alt={element.alt} />

        })}
      </div>
    </div>
  );
};
export default Favorites;
