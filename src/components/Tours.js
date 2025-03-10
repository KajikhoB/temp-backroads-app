import Title from "./Title"
import { tour } from "../Data"
function Tours() {
  return (
    <section className="section" id="tours">
     <Title title1='featured' title2='tours' />

      <div className="section-center featured-center">
        {tour.map((list)=>{
          const{id, image, title, date, info, duration, amount, location} = list
          return(
            <article className="tour-card" key={id}>
          <div className="tour-img-container">
            <img src={image} className="tour-img" alt="" />
            <p className="tour-date">{date}</p>
          </div>
          <div className="tour-info">
            <div className="tour-title">
              <h4>{title}</h4>
            </div>
            <p>
              {info}
            </p>
            <div className="tour-footer">
              <p>
                <span><i className="fas fa-map"></i></span> {location}
              </p>
              <p>{duration}</p>
              <p>{amount}</p>
            </div>
          </div>
        </article>
          )
        })}
        
      </div>
    </section>
  )
}
export default Tours