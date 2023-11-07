import { routesPath } from "@/utils"
import { Link } from "react-router-dom"

const Overview = () => {
  const { CASH_REQUEST } = routesPath
  
  return (
    <section className="">
      <p className="text-muted-foreground">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, eos? <Link to={CASH_REQUEST}>Cash Request</Link>
      </p>
    </section>
  )
}

export default Overview