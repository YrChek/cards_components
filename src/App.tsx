import CardsContainer from './components/CardsContainer';
import Container from './components/Container';
import CardItem from './components/CardItem';
import type { DataList } from './components/types';
import './App.css';

const data: DataList = [
  {
  id: 1,
  url: 'cubes.jpg',
  title: 'Три красных кубика',
  text: 'Роялти-фри фото с высоким разрешением',
  btnText: 'https://www.piqsels.com/ru'
  },
  {
  id: 2,
  title: 'Потрясающие стоковые фото бесплатно',
  text: 'Фотографии без лицензионных отчислений по лицензии CC0, бесплатные для личного и коммерческого использования, авторство не требуется',
  btnText: 'https://www.piqsels.com/ru'
  }
]

function App() {

  return (
    <>
      <Container>
        <CardsContainer>
          {data.map((obj) => <CardItem data={obj} key={obj.id}/>)}
        </CardsContainer>
      </Container>
    </>
  )
}

export default App
