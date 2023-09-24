import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Cart from "./Cart";

const Menu = () => {
  const [menu] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center my-3 py-5">
          <h3 className="text-primary">
            Welcome DGN Hotel <i class="bi bi-hand-thumbs-up"></i>
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={4} key={item}>
                <Cart />
              </Col>
            );
          })}
          
        </Row>
      </Container>
    </section>
  );
};

export default Menu;
