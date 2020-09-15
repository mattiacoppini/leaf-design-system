import token from "../tokens/LeafToken";

export default {
  button: {
    variant: {
      contained: {
        primary: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.primaryColor,
          backgroundColor: token.primaryColor,
          color: token.primaryTextColor || "#fff",
        },
        secondary: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.secondaryColor,
          backgroundColor: token.secondaryColor,
          color: token.secondaryTextColor || "#fff",
        },
        success: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.successColor,
          backgroundColor: token.successColor,
          color: token.successTextColor || "#fff",
        },
        warning: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.warningColor,
          backgroundColor: token.warningColor,
          color: token.warningTextColor || "#fff",
        },
        alert: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.alertColor,
          backgroundColor: token.alertColor,
          color: token.alertTextColor || "#fff",
        },
      },
      outlined: {
        primary: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.primaryColor,
          backgroundColor: "transparent",
          color: token.primaryColor,
        },
        secondary: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.secondaryColor,
          backgroundColor: "transparent",
          color: token.secondaryColor,
        },
        success: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.successColor,
          backgroundColor: "transparent",
          color: token.successColor,
        },
        warning: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.warningColor,
          backgroundColor: "transparent",
          color: token.primaryColor,
        },
        alert: {
          borderWidth: "1px",
          borderStyle: "solid",
          borderColor: token.alertColor,
          backgroundColor: "transparent",
          color: token.alertColor,
        },
      },
      text: {
        primary: {
          borderWidth: "0",
          backgroundColor: "transparent",
          color: token.primaryColor,
        },
        secondary: {
          borderWidth: "0",
          backgroundColor: "transparent",
          color: token.secondaryColor,
        },
        success: {
          borderWidth: "0",
          backgroundColor: "transparent",
          color: token.successColor,
        },
        warning: {
          borderWidth: "0",
          backgroundColor: "transparent",
          color: token.warningColor,
        },
        alert: {
          borderWidth: "0",
          backgroundColor: "transparent",
          color: token.alertColor,
        },
      },
    },
    size: {
      sm: {
        padding: token.paddingSm,
      },
      md: {
        padding: token.paddingMd,
      },
      lg: {
        padding: token.paddingLg,
      },
    },
  },
};
