import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import networking from "./../assets/aws/aws-networking.png";
// import networking from "./../assets/aws";
import bigdata from "./../assets/aws/aws-bigdata.png";
import partner from "./../assets/aws/aws-partner.png";
import qualified from "./../assets/aws/aws-qualified.png";
import architect from "./../assets/aws/aws-architect.png";
import practitioner from "./../assets/aws/aws-practitioner.png";
import security from "./../assets/aws/aws-security.png";
import { motion } from "framer-motion";


export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return <>
    <div style={{ marginTop: "55px" , width:"100vw" }}>
      {/* HERO SECTION */}
      <section
        className="text-center text-dark py-5"
        style={{
          background: "linear-gradient(180deg, #e8ecff 0%, #fff 100%)",
        }}
      >
        <Container>
          <h1 className="fw-bold display-5" data-aos="fade-up">
            Innovative IT Solutions Revolutionizing the Cloud
            <br />
            with Cutting-Edge Services
          </h1>
          <p
            className="lead text-secondary mt-3"
            style={{ maxWidth: "700px", margin: "auto" }}
            data-aos="fade-up"
          >
            Empowering Businesses with Next-Generation Cloud Solutions and
            Tailored App Development. Accelerating Growth, Efficiency, and
            Scalability.
          </p>

          <div className="mt-4" data-aos="zoom-in">
            <Button variant="dark" className="mx-2 px-4 py-2">
              Explore
            </Button>
            <Button variant="outline-dark" className="mx-2 px-4 py-2">
              Contact Us
            </Button>
          </div>
        </Container>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-5 text-center bg-light">
        <Container>
          <h2 className="fw-bold mb-3" data-aos="fade-up">
            Explore Our Services
          </h2>
          <p className="text-secondary mb-5" data-aos="fade-up">
            Transform your business with expert cloud services and tailored app
            solutions.
          </p>

          <Row xs={1} md={3} className="g-4">
            {[
              {
                title: "Cloud Development",
                img: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
              },
              {
                title: "Software Development",
                img: "https://cdn-icons-png.flaticon.com/512/906/906334.png",
              },
              {
                title: "Internet of Things",
                img: "https://cdn-icons-png.flaticon.com/512/906/906321.png",
              },
            ].map((srv, i) => (
              <Col key={i} data-aos="zoom-in">
                <Card className="shadow-sm border-0 h-100">
                  <Card.Body className="p-4">
                    <img
                      src={srv.img}
                      alt={srv.title}
                      width="80"
                      className="mb-3"
                    />
                    <Card.Title className="fw-bold">{srv.title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          <Button variant="dark" className="mt-4 px-4 py-2 rounded-pill">
            Explore All Services
          </Button>
        </Container>
      </section>

      {/* TECHNOLOGY STACK */}
      <section className="py-5 text-center">
        <Container>
          <h2 className="fw-bold mb-4" data-aos="fade-up">
            Technology Stack
          </h2>
          <Row className="justify-content-center g-4" data-aos="fade-up">
            {[
              "html5",
              "python",
              "aws",
              "react",
              "angular",
              "nodejs",
              "mysql",
              "php",
            ].map((tech, i) => (
              <Col key={i} xs={4} sm={3} md={2}>
                <img
                  src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech}/${tech}-original.svg`}
                  alt={tech}
                  width="60"
                  height="60"
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* STATISTICS */}
      <section
        className="text-white py-5"
        style={{ background: "#0b1424", textAlign: "center" }}
      >
        <Container>
          <Row>
            {[
              { num: 150, label: "Clients" },
              { num: 100, label: "Completed Projects" },
              { num: 7, label: "Years in Business" },
              { num: 99, label: "Success Rate" },
            ].map((stat, i) => (
              <Col key={i} md={3} sm={6} className="py-3">
                <h2 className="fw-bold display-6">{stat.num}</h2>
                <p className="text-secondary">{stat.label}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

{/* TESTIMONIALS SECTION */}
<section
  className="py-5 text-center"
  style={{ background: "linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)" }}
>
  <Container>
    <motion.h2
      className="fw-bold mb-5"
      data-aos="fade-up"
      style={{ color: "#0b1424" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Trusted by hundreds of customers
    </motion.h2>

    <div className="position-relative">
      <motion.div
        className="d-flex justify-content-center align-items-center gap-4 flex-wrap"
        style={{ minHeight: "350px" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        {[
          {
            name: "Ashish Goel",
            title: "Ex. Founder & CTO, Milk Basket",
            text: "IOanyT is my go-to team for full-stack IoT solutions. They deliver with precision and great communication.",
            img: "https://cdn-icons-png.flaticon.com/512/4333/4333609.png",
          },
          {
            name: "Divya Bidani",
            title: "Head of Business Development, Precept (S) Pte Ltd",
            text: "IOanyT has delivered projects with exceptional speed without compromising on quality. Tremendous dedication!",
            img: "https://cdn-icons-png.flaticon.com/512/4333/4333603.png",
          },
          {
            name: "Leandro Bufi",
            title: "CTO, Habito SA",
            text: "An excellent professional team! Extremely collaborative and highly recommended for enterprise-level projects.",
            img: "https://cdn-icons-png.flaticon.com/512/4333/4333605.png",
          },
          {
            name: "Tina Morgan",
            title: "Founder, SmartTech Labs",
            text: "They transformed our cloud infrastructure — reliable, fast, and innovative. True partners in progress.",
            img: "https://cdn-icons-png.flaticon.com/512/4333/4333635.png",
          },
          {
            name: "Saurabh Singhal",
            title: "Director, TSI Informatics",
            text: "Their cloud architecture and support exceeded expectations. We trust them for every mission-critical deployment.",
            img: "https://cdn-icons-png.flaticon.com/512/4333/4333600.png",
          },
        ].map((review, index) => (
          <motion.div
            key={index}
            className="testimonial-card bg-dark text-white p-4 rounded-4 shadow-lg"
            style={{
              maxWidth: "320px",
              minHeight: "340px",
              flex: "0 0 320px",
              border: "1px solid rgba(255,255,255,0.05)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
            }}
            transition={{ duration: 0.4 }}
          >
            <motion.img
              src={review.img}
              alt={review.name}
              className="rounded-circle mb-3"
              width="70"
              height="70"
              style={{ objectFit: "cover" }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3 + index * 0.2,
                ease: "easeInOut",
              }}
            />
            <h6 className="fw-bold text-white">{review.name}</h6>
            <p className="small text-secondary mb-2">{review.title}</p>
            <p className="small">{review.text}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Navigation Arrows */}
      {/* <div
        className="d-flex justify-content-center gap-3 mt-4"
        style={{ cursor: "pointer" }}
      >
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="p-2 bg-dark text-white rounded-circle"
          style={{ width: "40px", height: "40px" }}
          onClick={() => {
            const container = document.querySelector(".testimonial-scroll");
            if (container) container.scrollLeft -= 350;
          }}
        >
          ←
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.2 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="p-2 bg-dark text-white rounded-circle"
          style={{ width: "40px", height: "40px" }}
          onClick={() => {
            const container = document.querySelector(".testimonial-scroll");
            if (container) container.scrollLeft += 350;
          }}
        >
          →
        </motion.div>
      </div> */}
    </div>
  </Container>
</section>


{/* AWS PARTNERS SECTION */}
<section className="py-5 text-center bg-white">
  <Container>
    <motion.h2
      className="fw-bold mb-4"
      style={{ color: "#0b1424" }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      We are AWS Partners
    </motion.h2>

    <motion.div
      className="d-flex flex-wrap justify-content-center gap-4 mt-4"
      initial="hidden"
      whileInView="visible"
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.2,
          },
        },
      }}
    >
      {[
        { name: "Advanced Networking", img: networking },
        { name: "Big Data Specialty", img: bigdata },
        { name: "AWS Partner", img: partner },
        { name: "Qualified Software", img: qualified },
        { name: "Solutions Architect", img: architect },
        { name: "Cloud Practitioner", img: practitioner },
        { name: "Security Specialty", img: security },
      ].map((badge, i) => (
        <motion.div
          key={i}
          className="aws-badge-card shadow-sm p-3 bg-white rounded"
          variants={{
            hidden: { opacity: 0, scale: 0.8, y: 30 },
            visible: {
              opacity: 1,
              scale: 1,
              y: 0,
              transition: { type: "spring", stiffness: 120 },
            },
          }}
          whileHover={{
            rotate: [0, 3, -3, 0],
            scale: 1.1,
            boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
            transition: { duration: 0.4 },
          }}
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "12px",
            position: "relative",
            overflow: "hidden",
            background:
              "linear-gradient(180deg, #fff 0%, #f7f9ff 100%)",
          }}
        >
          <motion.img
            src={badge.img}
            alt={badge.name}
            className="img-fluid"
            style={{
              objectFit: "contain",
              width: "100%",
              height: "100%",
              borderRadius: "10px",
            }}
            animate={{
              y: [0, -6, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 4 + i * 0.2,
              ease: "easeInOut",
            }}
          />

          {/* Glow effect */}
          <motion.div
            className="position-absolute top-0 start-0 w-100 h-100"
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.25), transparent 60%)",
              borderRadius: "12px",
            }}
            animate={{
              opacity: [0.4, 0.8, 0.4],
              scale: [1, 1.05, 1],
            }}
            transition={{
              repeat: Infinity,
              duration: 3 + i * 0.5,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      ))}
    </motion.div>
  </Container>
</section>





      {/* CALL TO ACTION */}
      <section
        className="text-center text-white py-5"
        style={{ background: "#0b1424" }}
      >
        <Container>
          <h2 className="fw-bold mb-3">
            Unlock the Power of IT & Cloud Solutions Today!
          </h2>
          <p className="text-secondary mb-4">
            Join us on a transformative journey and take your organization to
            new heights of efficiency and innovation.
          </p>
          <Button
            variant="success"
            className="px-5 py-2 fw-semibold rounded-pill"
          >
            Get in Touch
          </Button>
        </Container>
      </section>
    </div>
  </>
}
