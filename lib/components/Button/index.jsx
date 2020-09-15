import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

export const StyledButton = styled.button`
  outline: none;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.2s;

  ${({ theme: { button: buttonTheme } }) =>
    buttonTheme &&
    css`
      ${({ variant, color }) =>
        buttonTheme.variant &&
        buttonTheme.variant[variant] &&
        buttonTheme.variant[variant][color]}
      ${({ size }) =>
        buttonTheme.size && buttonTheme.size[size]}
      :disabled {
        ${({ disabled }) =>
          disabled && buttonTheme.color && buttonTheme.color.disabled}
      }
    `}
`;

export const Button = (props) => <StyledButton {...props} />;

Button.propTypes = {
  variant: PropTypes.oneOf(["contained", "outlined", "text"]),
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "alert",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: "contained",
  color: "primary",
  size: "md",
  disabled: false,
};

export default Button;
