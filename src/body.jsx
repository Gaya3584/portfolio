import './body.css'
import meImg from './assets/me.png'
import 'animate.css';


function Body() {
  return (
    <div className="body-section">
      <div className="heading-container">
        <div class="container">
        <div className="shape">
          <div className="text">Hello!</div>
        </div>
        </div>
        <h2 className="name-heading">GAYATHRI M A</h2>
        <p className="summary">"I'm a passionate developer with experience in full-stack web development. I love solving problems and learning new technologies!"</p>
      </div>

      <div className="image-wrapper">
        <img src={meImg} alt="Me" className="profile-img" />
      </div>
    </div>
  )
}

export default Body
