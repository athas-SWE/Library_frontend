import "./home.scss";
import img2 from "./img.jpg";
const Home = () => {
  return (
    <div className="content home">
      <h3>Welcome To Website</h3>
      <br />
      <br />
      <img
        className="logo img mt-4"
        src={img2}
        style={{ width: 1000 }}
        alt="profile"
      />
      <span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugiat
        iusto explicabo voluptatum, blanditiis libero eum tempora excepturi
        inventore labore nesciunt cupiditate commodi beatae. Neque, totam
        tempore. Esse itaque vitae, reiciendis dolores provident placeat sequi
        nam pariatur praesentium quaerat autem libero quasi dolorem sapiente
        aliquid odio dolore maxime repellendus vel incidunt minima? Dolore sequi
        ea laudantium fuga autem officia, cum fugit rem voluptates, vel quis
        aperiam consectetur dolor perspiciatis labore. Blanditiis hic eaque
        natus accusantium officiis quam accusamus. Aperiam sed ullam in. Nisi
        inventore iste est placeat corrupti? Minima, mollitia hic dolorem porro
        molestiae nulla itaque incidunt veritatis sunt. Soluta!
      </span>
    </div>
  );
};

export default Home;
