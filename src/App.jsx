import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PageTitle from './components/Header.jsx';
import MyCard from './components/MyCard.jsx';
import PageFooter from './components/Footer.jsx';
import Tag from './components/Tags.jsx';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <>
    <Container>
      <header>
        <PageTitle nombre="Adopta un Perrito" />
      </header>
      <main>
        <MyCard
          imageUrl="https://images.pexels.com/photos/333083/pexels-photo-333083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Bartolo"
          text="lleno de energía y listo para jugar.¡Dale a Bartolo el hogar amoroso que se merece!"
          tagColor="primary"
          tagText="Pastor Alemán"
        />
        <MyCard
          imageUrl="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Messi"
          text="Es juguetón, amigable y se lleva bien con los niños y otros animales.¡Haz de Messi parte de tu familia hoy mismo!"
          tagColor="success"
          tagText="Labrador"
        />
        <MyCard
          imageUrl="https://images.pexels.com/photos/164186/pexels-photo-164186.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Gohan"
          text="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
          tagColor="danger"
          tagText="Corgis"
        />
        <MyCard
          imageUrl="https://images.pexels.com/photos/1739125/pexels-photo-1739125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          title="Princesa"
          text="Es una compañera leal y cariñosa que adora los mimos y los abrazos.¡Ayuda a princesa a encontrar su final feliz!"
          tagColor="warning"
          tagText="Bulldog Inglés"
        />
      </main>
      <footer>
        <PageFooter descripcion="Explora nuestra galería de adopción de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia única. Adopta un perro y bríndale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."/>
      </footer>
      </Container>
    </>
  );
}

export default App;