import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DetailStack from './navigation/detailStack';
import {store} from "./redux/store"
import {Provider} from "react-redux"




const App = () => {


  
return (
    <Provider store={store}>
    <NavigationContainer>
      <DetailStack />
    </NavigationContainer>
    </Provider>
  );
};

export default App;
