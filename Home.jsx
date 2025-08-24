import React, { useEffect } from 'react';
import './Home.css'; // we'll create this CSS file

const Home = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.fade-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div style={{ width: '100vw', margin: 0, padding: 0 }}>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">MyWebsite</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link active" href="/">Home</a></li>
              <li className="nav-item"><a className="nav-link" href="/about">About</a></li>
              <li className="nav-item"><a className="nav-link" href="/contact">Contact</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header
        className="bg-dark text-white text-center py-5"
        style={{
          backgroundImage: "url('https://images.unsplash.com/3/GoWildImages_MtEverest_NEP0555.jpg?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          width: '100vw',
          margin: 0,
          height:'40vw'
        }}
      >
        <div className="py-5" style={{ width: '100%' }}>
          <h1 className="display-3 fw-bold fade-scroll">Welcome to My Website</h1>
          <p className="lead fade-scroll">We build amazing web experiences using React & Bootstrap</p>
          <a href="/about" className="btn btn-primary btn-lg mt-3 fade-scroll">Learn More</a>
        </div>
      </header>

      {/* Features Section */}
      <section className="my-5 px-0">
        <div className="row g-0 text-center">
          <div className="col-md-4">
            <div className="card shadow-sm m-1">
              <img src="https://picsum.photos/200" className="card-img-top" alt="feature1" />
              <div className="card-body">
                <h5 className="card-title fade-scroll">Fast</h5>
                <p className="card-text fade-scroll">Lightning-fast websites with React components.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm m-1">
              <img src="https://picsum.photos/201" className="card-img-top" alt="feature2" />
              <div className="card-body">
                <h5 className="card-title fade-scroll">Responsive</h5>
                <p className="card-text fade-scroll">Bootstrap ensures your site looks great on any device.</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card shadow-sm m-1">
              <img src="https://picsum.photos/202" className="card-img-top" alt="feature3" />
              <div className="card-body">
                <h5 className="card-title fade-scroll">Modern</h5>
                <p className="card-text fade-scroll">We use the latest technologies to keep things fresh.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="text-center bg-light py-5" style={{ width: '100vw', margin: 0 }}>
        <h2 className="fw-bold mb-4 fade-scroll">Watch Our Intro</h2>
        <div className="ratio ratio-16x9 fade-scroll">
          
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-5" style={{ width: '100vw', margin: 0 }}>
        <p className="mb-0">&copy; 2025 MyWebsite | All Rights Reserved</p>
      </footer>
    </div>
  )
}

export default Home;
