import React from 'react';
import './App.css';  
import Header from './Componentes/Header';  
import Banner from './Componentes/Banner';  
import Footer from './Componentes/Footer';  
import Text from './Componentes/Text';  
import Card from './Componentes/Card';  
import Post from './Componentes/Post';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/> 
      <Text />
      <Card />  
      <Post />
      <Text />
      <Card />
      <Footer />
      
    </div>
  );
}
export default App;