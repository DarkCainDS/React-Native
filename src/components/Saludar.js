import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
const Saludar = (props) => {
  const { firstName = "Diego", lastName } = props;

  return (
    <Text>
      Hola {firstName} {lastName}
    </Text>
  );
};

Saludar.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string,
};
export default Saludar;
