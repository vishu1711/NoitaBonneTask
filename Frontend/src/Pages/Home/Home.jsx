import Layout from "../../Commponent/Layout";
import ticket from "../../img/productCard.jpg";

const Home = () => {

  return (
    <>
      <Layout>
        <div class="card shadow" style={{ width: "100%" }}>
          <img src={ticket} class="card-img-top img-thumbnail" style={{ height: "90vh" }} alt="..." />
        </div>
      </Layout>
    </>
  )
}

export default Home
