import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

const HeaderButtons = (props) => {
  // console.log('HeaderButton', props);
  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      IconSize={28}
      color={'white'}
    />
  );
};

export default HeaderButtons;
