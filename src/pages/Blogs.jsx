// App.js
import React from "react";
import "./Blog.css";
import { FiArrowUpRight } from "react-icons/fi";

const Blogs = () => {
  const blogs = [
    {
      id: 1,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/buddha.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    {
      id: 2,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/Rectangle 34.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    {
      id: 3,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/Rectangle 35.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    {
      id: 4,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/buddha.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    {
      id: 5,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/Rectangle 34.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    {
      id: 6,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/Rectangle 38.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    {
      id: 7,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/buddha.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    {
      id: 8,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/Rectangle 34.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    {
      id: 9,
      description: "WIT was a technical event hosted by the founders",
      imageUrl: "../../assests/Rectangle 41.png",
      button: "Read article",
      button2: <FiArrowUpRight/>,
    },
    // Add more blog data as needed
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
  };

  return (
    <div className="blogpage">

      {/* <header>
        <nav className="nav">
          <div className="logo">Prateek Prasoon</div>
          <div className="nav-links">
            <a href="#">Blogs</a>
            <a href="#">Reach out</a>
          </div>
        </nav>
      </header> */}

      <main className="main">

        <div className="blog-section">
          
          <div className="title">
            <h3>BLOGS</h3>
            <h1>Tips and Recommendations from Entrepreneur</h1>
          </div>

          <div className="main-grid">
            {/* Map over blog data and render cards */}
            <div className="blog-card-1">
              <img src="../../assests/buddha.png" alt="Buddha Statue" />
              <p>WIT was a technical event hosted by the founders</p>
              <div className="read-blog">
              <a href="#">Read article</a>
              <FiArrowUpRight/>
              </div>
            </div>

            <div className="right-blog">
              
            <div className="blog-card-2">

              <div>  <img src="../../assests/buddha.png" alt="Buddha Statue" />
              <p>WIT was a technical event hosted by the founders</p>
              <div className="read-blog2">
              <a href="#">Read article</a>
              <FiArrowUpRight/>
              </div>
              </div>

              <div>  <img src="../../assests/Rectangle 34.png" alt="Buddha Statue" />
              <p>WIT was a technical event hosted by the founders</p>
              <div>
              <a href="#">Read article</a>
              <FiArrowUpRight/>
              </div>
              </div>
            
            </div>
            {/* Render more blog cards here */}
            <div className="flex justify-center w-full gap-5">
          <button className="read-blogs-btn">Read Blogs </button>
          <img src="../../assests/Group 48095589.png" className="w-20"></img>
          </div>
          </div>
        </div>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img
                src={blog.imageUrl}
                alt={blog.title}
                className="blog-image"
              />
              <p className="blog-description">{blog.description}</p>
              <div className="button-div">
              <button className="blog-button">{blog.button}</button>
              <button className="arrow">{blog.button2}</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <footer className="footer">{/* Render footer content */}</footer>
    </div>
  );
};

export default Blogs;
