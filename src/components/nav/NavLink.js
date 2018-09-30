import PropTypes from 'prop-types';
import {NavLink as RSNavLink} from 'reactstrap';
import classNames from 'classnames';
import DashLink from '../base/DashLink';

const NavLink = ({ children, className, active, ...otherProps }) => {
  const classes = classNames(
    className,
    'nav-link',
    { active }
  );
  return (
    <DashLink className={classes} {...otherProps}>
      {children}
    </DashLink>
  );
}

NavLink.propTypes = {
  /**
   * The ID of this component, used to identify dash components
   * in callbacks. The ID needs to be unique across all of the
   * components in an app.
   */
  id: PropTypes.string,

  /**
   * The children of this component
   */
  children: PropTypes.node,

  /**
   * Defines CSS styles which will override styles previously set.
   */
  style: PropTypes.object,

  /**
   * Often used with CSS to style elements with common properties.
   */
  className: PropTypes.string,

  /**
   * The URL of the linked resource.
   */
  href: PropTypes.string,

  /**
   * Apply 'active' style to this component
   */
  active: PropTypes.bool,

  /**
   * HTML tag to use for the link, default: a
   */
  tag: PropTypes.string,

  /**
   * Disable the link
   */
  disabled: PropTypes.bool,

  /**
   * A callback for firing events to dash.
   */
  fireEvent: PropTypes.func,

  dashEvents: PropTypes.oneOf(['click'])
}

export default NavLink;
