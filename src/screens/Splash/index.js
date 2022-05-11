import React, {useEffect} from 'react';
import Body from './body';

// Only logics and API calls in this file

const Index = ({route: {params}, navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //navigation.replace('Home');
    }, 1000);
  }, []);

  return <Body />;
};

export default Index;
