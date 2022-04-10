import styled from "styled-components";
import { Navbar as BSNavbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from "./Container";
import useAppContext from "../hooks/appContext";

const NavLink = styled(Link)`
  background: #ffffff;
  color: #696763;
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 300;
  margin-top: 10px;
  padding-left: 15px !important;
  padding-right: 15px !important;
  svg {
    margin-bottom: 4px;
    margin-right: 5px;
  }
`;

const Navbar = styled(BSNavbar)`
  border-bottom: 1px solid #f5f5f5;
  margin-left: 0;
  margin-right: 0;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const BrandHeader = () => {
  const { isLoggedin, logout, auth } = useAppContext();

  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Container>
        <Link to="/" className="navbar-brand">
          Coupon-task
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/">
              Products
            </NavLink>
            {
              auth.role === 1 ? (
                <NavLink className="nav-link" to="/coupons">
                  Coupons
                </NavLink>
              ) : (
                <NavLink className="nav-link" to="/cart">
                  Cart
                </NavLink>
              )
            }
            {!isLoggedin ? (
              <NavLink className="nav-link" to="/login">
                Login
              </NavLink>
            ) : (
              <NavLink className="nav-link" to="/login" onClick={logout}>
                Logout
              </NavLink>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default BrandHeader;
