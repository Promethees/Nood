import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../actions/auth";
import DrawToggleButton from "./drawToggleButton";
import { Link as LinkComp} from "react-scroll";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (props) => (
    <div>
    <div class="res_button">
        <DrawToggleButton click={props.drawerClickHandler} />
    </div>
    <ul>
      <li>
        <LinkComp
          activeClass="active"
          to="campuses"
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          className="Linkbtn"
          style={linkStyle}
        >
          Explore
        </LinkComp>
      </li>
      <li>
        <Link style={linkStyle} to="/Aboutus" className="Linkbtn">
          About
        </Link>
      </li>
      <li>
        <Link to="/dashboard">
          <i className="fas fa-user" />{" "}
          <span className="hide-sm">Dashboard</span>
        </Link>
      </li>
      <li>
        <a onClick={logout} href="#!">
          <i className="fas fa-sign-out-alt" />{" "}
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </ul>
    </div>
  );

  const guestLinks = (
    <ul>
      <li>
        <Link to="/profiles">Developers</Link>
      </li>
      <li>
        <Link to="/register">Register</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  );

  return (
    <nav style = {headerStyle}>
      <Link
        activeClass="active"
        to="/"
        spy={true}
        smooth={true}
        offset={0}
        duration={500}
        className="link"
        style={linkStylehead}
        onClick = {scrollToTop}
      > 
        𝓝𝓤𝓢 𝓕𝓸𝓸𝓭
      </Link>
      {!loading && (
        <Fragment>{isAuthenticated ? authLinks : guestLinks}</Fragment>
      )}
    </nav>
  );
};

Navbar.propTypes = {
  logout: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

const headerStyle = {
  color: "#fff",
  textAlign: "center",
  position: "fixed",
  background: "#EF7C00",
};

const linkStyle = {
  color: "#fff",
  textAlign: "center",
  display: "flex",
  float: "right",
};
const linkStylehead = {
  color: "#fff",
  position: "absolute",
  top: "7px",
  left: "100px",
  display: "flex",
};
const scrollToTop = () => {
  window.scrollTo(0, 0);
};
export default connect(mapStateToProps, { logout })(Navbar);
