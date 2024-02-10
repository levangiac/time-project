import _, { rest } from 'lodash';
import React from 'react';
import { TouchableOpacity, TouchableOpacityProps } from 'react-native';
interface Props extends TouchableOpacityProps {
  debounceTime?: number;
}

const PTouchableOpacity: React.FC<TouchableOpacityProps & Props> = ({
  debounceTime,
  children,
  ...rest
}) => {
  return (
    <TouchableOpacity
      {...rest}
      onPress={_.debounce(rest.onPress ? rest.onPress : () => {}, debounceTime, {
        leading: true,
        trailing: false,
      })}
    >
      {children}
    </TouchableOpacity>
  );
};

export default PTouchableOpacity;
