import React, { useState, useEffect } from "react";
import './App.css';

function App() {
  const [value, setValue] = useState("black aesthetic");
  const [results, setResults] = useState([]);
  const [notFound,setNotFound] = useState(false);

  useEffect(() => {
    // Fetch images when the component mounts
    fetchImages();
  }, []); // Empty dependency array ensures that the effect runs only once on mount

  const fetchImages = () => {
    fetch(`https://api.unsplash.com/search/photos?client_id=Q9RrC6QtazZ9BKei2APR_xhxadc4M2OXwKhT0GbWVMI&query=${value}&per_page=50`)
      .then(res => res.json())
      .then(data => {
        if(data.results.length === 0){
          setNotFound(true);
        }else{
          setNotFound(false);
        }
        setResults(data.results);
      });
  };
  return(
   <>
      {/* <div className="App">
        <div className="mydiv"> */}
          {/* <span>Search:</span> */}
          {/* <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/> */}
          {/* <button onClick={()=>fetchImages()}>Send</button> */}
        {/* </div> */}
        {/* <div className="gallery">
          {
            results.map((item)=>{
              return <img src={item.urls.regular}/>
            })
          } */}
        {/* </div> */}
      {/* </div> */}
  
  
     <div id="parent-header">
      
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            {/* logo */}
            <img id="pexel-logo" className="m-2" src="https://logos.bugcrowdusercontent.com/logos/7cfc/9afe/eadc3233/49c354597a8fbf87c32726929fbe4ca5_pexels.jpg" height={"40px"} width={"40px"} />
            <a class="navbar-brand text-light fw-bold" href="#">Pexels</a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                
                {/* <li class="nav-item">
                  <a class="nav-link" href="#">Explore</a>
                </li> */}
                  <div class="dropdown">
  <button class="btn text-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
    Explore
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Discover Photos</a></li>
    <li><a class="dropdown-item" href="#">Popular Searches</a></li>
    <li><a class="dropdown-item" href="#">Leaderboard</a></li>
    <li><a class="dropdown-item" href="#">Challenges</a></li>
    <li><a class="dropdown-item" href="#">Free videos</a></li>
    <li><a class="dropdown-item" href="#">Pexels Blog</a></li>


  </ul>
</div>
                
                <li class="nav-item">
                  <a class="nav-link" href="#">Upload</a>
                </li><li class="nav-item">
                  <a class="nav-link" href="#">License</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bell" viewBox="0 0 16 16">
  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
</svg></a>
                </li>
                </ul>
                </div>
          </div>
        </nav>

        
        <div className="container mt-5 pt-5">
        <div className="row">
          <div className="col-12 col-sm-10 col-md-8 mx-auto text-center mt-5">
            <h2 className="text-white fw-bold">
              The best free stock photos, royalty free images & videos shared by creators.
            </h2>
            <div>
              <div id="search_area">
                <input
                  type="text"
                  id="search_box"
                  className="form-control shadow-none mt-4"
                  placeholder="Search Photos"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                {/* button */}
                <button onClick={() => fetchImages()} type="button" className="butt">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                  </svg>
                </button>
              </div>
<div className="mt-4">
                Trending: anime, pumpkin, basketball, handshake, community &nbsp;
                
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"/>
</svg>
  
</div>            </div>
          </div>
        </div>
      </div>

        
        
        <div className="gallery-head">
      
          <div className={notFound ? "zzz":"gallery"}>
            <div className="scrollable-content">
              {
                notFound&&
                <div>bot found</div>
              }
              

            </div>
          <div>
            <ul className={notFound&&"zzz"}>
              <li><a href=""><span>Home</span></a></li>
              <li><a href="">Videos</a></li>
              <li><a href="">Leaderboard</a></li>
              <li><a href="">Challenges</a></li>
            </ul>
          </div>
          <div className="w-100">
            <h3 className="header_1">Free Stock Photos</h3>
          </div>
           <div className="sura">
              {
                notFound? (
                  <div>Not found</div>
                  ):
                (results.map((item)=>{
                  return <div ><img src={item.urls.regular}/></div>
                }))
                
              }
           </div>
            </div>
          </div>
       <div className="d-flex justify-content-between">
          <div>
              
             <div className="sponser fs-2 fw-bolder">Sponsored Photos iStock!</div>
             
             <div className="fw-bold" id="sp">Find the perfect photo for your next creative project.</div>
          </div>
           <button type="button" className="ad btn btn-outline-secondary" disabled>Get 20% off with code PEXELS20 »</button>
           
       </div>

         

       
     {/* footer ----------------------------------------------------------------------------------*/}

<footer className="text-center text-lg-start bg-white text-muted">
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">

    {/* <!-- Right --> */}
    <div>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-facebook-f"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-twitter"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-google"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-instagram"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-linkedin"></i>
      </a>
      <a href="" className="me-4 link-secondary">
        <i className="fab fa-github"></i>
      </a>
    </div>
  </section>
  {/* <!-- Section: Social media --> */}

  {/* <!-- Section: Links  --> */}
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="row mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-secondary"></i>Free photos and videos shared by talented creators.
          </h6>
          <p>
            Here you can use rows and columns to organize your footer content. Lorem ipsum
            dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>
        <div className="links col-md-2 col-lg-2 col-xl-2 mx-auto">
          <h6 className="text-uppercase fw-bold mb-4">
          Pexels
          </h6>
          <p><a href="#!" className="text-reset">Free Stock Photos</a></p>
          <p><a href="#!" className="text-reset">Free Videos</a></p>
          <p><a href="#!" className="text-reset">Popular searches</a></p>
          <p><a href="#!" className="text-reset">Collections</a></p>
          <p><a href="#!" className="text-reset">Challenges</a></p>
          <p><a href="#!" className="text-reset">Leaderboard</a></p>
          <p><a href="#!" className="text-reset">Other plugins & apps</a></p>

        </div>

        <div className="links col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
          Company
          </h6>
          <p><a href="#!" className="text-reset">About</a></p>
          <p><a href="#!" className="text-reset">Blog</a></p>
          <p><a href="#!" className="text-reset">FAQ</a></p>
          <p><a href="#!" className="text-reset">Become a hero</a></p>
          <p><a href="#!" className="text-reset">Partner with Pexels</a></p>
          <p><a href="#!" className="text-reset">Image & Video API</a></p>

        </div>
        <div className="links col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3 text-secondary"></i>
Terms of Use</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            Privacy Policy
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i>License</p>
          <p><i className="fas fa-print me-3 text-secondary"></i>Imprint
Cookies Policy

</p>
        </div>
      </div>
    </div>
  </section>
  <div className="cr text-center p-4">
    © 2023 Pexels:
    <a className="text-reset fw-bold" href="zzarooon">zzarooon</a>
  </div>
</footer> 
</div> 
   </>
    
  )
}
export default App