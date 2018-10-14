import React from "react";
// used for making the prop types of this component
import PropTypes from "prop-types";

class Footer extends React.Component {
  render() {
    return (
      <footer
        className={"footer  text-center" + (this.props.default ? " footer-default" : "")}
      >
                <div className="copyright">Copyright &copy; Elizabeth Engler 2018</div>
      </footer >
    );
  }
}

Footer.propTypes = {
  default: PropTypes.bool,
  fluid: PropTypes.bool
};

export default Footer;
