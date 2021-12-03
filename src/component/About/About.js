import React from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const About = () => {
  return (
    <div>
      <Header></Header>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
              <h1 className="text-center my-4">About Us</h1>
            <p>
              Our vision is of a new world of learning based on the compelling
              truth that improving education is the key to the survival of the
              human race. It's a world of creativity, inspiration, and ambition
              informed by evidence and experience. It's a world where students
              become lifelong learners and develop 21st-century skills. It's a
              world where innovation is the rule, not the exception. It's a
              world where schools provide rigorous project-based learning,
              social and emotional learning, and access to new technology. It's
              a world where students and parents, teachers and administrators,
              policy makers and the people they serve are all empowered with a
              shared vision to change education for the better. We call this
              place Edutopia, and we provide not just the vision for this new
              world of learning but the information and community connections to
              make it a reality.
            </p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;
