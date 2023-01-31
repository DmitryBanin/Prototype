import CardsList from '../components/cards-list/cards-list'

function MainScreen({ dataCards }) {

  return (
    <div className='wrapper'>
      <main className='main'>
        <section className='cards-list'>
          <h1 className='cards-list__title'>Ты сегодня покормил кота?</h1>
          <CardsList dataCards = {dataCards}/>
        </section>
      </main>
    </div>
  );
}

export default MainScreen;
