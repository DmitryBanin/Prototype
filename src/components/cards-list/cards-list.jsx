import Card from '../card/card'

function CardsList({ dataCards }) {
  
  return (
    <div className='cards-list__container'>
      {dataCards.map((dataCard) => (
        <Card
          key={dataCard.id}
          dataCard={dataCard}
        />
      ))}
    </div>
  );
}

export default CardsList;