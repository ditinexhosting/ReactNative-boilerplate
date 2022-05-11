import React from 'react';
import Body from './body';

const Index = ({route: {params}, navigation}) => {
  // Only logics and API calls here
  const onStorageClick = () => {
    //navigation.navigate('Storage')
  };
  const onMovingClick = () => {
    //navigation.navigate('Moving')
  };

  return <Body onStorageClick={onStorageClick} onMovingClick={onMovingClick} />;
};

export default Index;
