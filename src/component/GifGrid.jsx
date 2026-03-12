import GifItem from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, onDeleteCategory }) => {
  const [images, isLoading] = useFetchGifs(category);

  return (
    <>
    <div className="content">
      <h2>{category}</h2>
      {isLoading && <h3>Cargando...</h3>}
      <button
       className="delete-btn"
       onClick={() => onDeleteCategory(category)}>
         🗑
      </button>
</div>
      <div className="card-grid">
        {images.map((img) => (
          <GifItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
