import { useParams } from "react-router-dom";

function MovieDetailsPage() {
  const { id } = useParams()

  
  return (<h2>
          MovieDetailsPage {id}
  </h2>)
}


export default MovieDetailsPage;
