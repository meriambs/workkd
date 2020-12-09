
import './main.css';
function App() {
  return (
    <div className="App" >
          <header>
      <h1>John Doe</h1>
      <ul className="navmenu">
        <li ><a href="bcn.com">About</a></li>
        <li><a href="bbn.com">Projects</a></li>
        <li><a href="bb.com">Contact</a></li>
      </ul>
    </header>
    <section className="about-me">
      <h1>
        Hello my name is
        <span className="rotate text-important">John doe</span> ,<br />
        and i make a horrible websites
      </h1>
      <img className="avatar" src="./images/XDAC-John-Doe.jpg" alt="jhon-doe" />
    </section>
    <section className="projects">
      <h2 className="text-important">Projects</h2>
      <div className="projects-container">
        
        <div className="project-card">
          <img src="./images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p>Github <a href="github.com">Link</a></p>
        </div>
       
        <div className="project-card">
          <img src="./images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p>Github <a href="github.com">Link</a></p>
        </div>
        
        <div className="project-card">
          <img src="./images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p>Github <a href="github.com">Link</a></p>
        </div>
       
        <div className="project-card">
          <img src="./images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p>Github <a href="github.com">Link</a></p>
        </div>
       
        <div className="project-card">
          <img src="./images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p>Github <a href="github.com">Link</a></p>
        </div>
        
        <div className="project-card">
          <img src="./images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p>Github <a href="github.com">Link</a></p>
        </div>
        
        <div className="project-card">
          <img src="./images/proj.png" alt="project" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus ex natus quis beatae perspiciatis repellat laudantium
            aliquam.
          </p>
          <p>Github <a href="github.com">Link</a></p>
        </div>
      </div>
    </section>
    <section className="contact">
      <h2 className="text-important">contact me</h2>
      <form className="contact-form">
        <label>Full Name</label>
        <input type="text" placeholder="Email" />
        <label>Email</label>
        <input type="email" placeholder="Email" />
        <label>Message</label>
        <textarea rows="5" cols="40"></textarea>
        <button className="butoonk" >Send</button>
      </form>
    </section>
    <footer>
      <p>Copyritghts &copy; GOMYCODE 2020</p>
    </footer>
    </div>
  );
}

export default App;
