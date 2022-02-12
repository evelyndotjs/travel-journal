import "./Blog.css";
import data from "../data";

function Blog(props) {
  return (
    <section className="blog--wrapper">
      <img
        className="blog--img"
        src={process.env.PUBLIC_URL + props.entries.imageUrl}
        alt="imgs"
      />
      <div className="content--wrapper">
        <h4>
          <span className="blog--location">{props.entries.location}</span>
          <a className="blog--map" href="{props.entries.googleMapsUrl}">
            View on Google Maps
          </a>
        </h4>
        <h1 className="blog--title">{props.entries.title}</h1>
        <h3 className="blog--dates">
          {props.entries.startDate} - {props.entries.endDate}
        </h3>
        <p className="blog--description">{props.entries.description}</p>
      </div>
    </section>
  );
}

export default Blog;
