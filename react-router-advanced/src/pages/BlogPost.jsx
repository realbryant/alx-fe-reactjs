import { useParams } from "react-router-dom"

export default function BlogPost() {
  const { id } = useParams()
  return <h2>Showing Blog Post #{id}</h2>
}
