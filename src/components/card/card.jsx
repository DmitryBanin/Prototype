
import { miceWordEnding, portionWordEnding } from '../../mocks/dataCards';
import { useState } from 'react';
import { getMiceCount, getWordEnding } from '../../utils'

function Card({ dataCard }) {

  const { weight, mainСourse, portion, image, miceCount, available, customer, ingredient } = dataCard;

  const [classChange, setClassChange] = useState('');
  const [isLogics, setLogics] = useState({
    isActive: false,
    isRed: false,
    isBlue: true,
    isFocus: false,
  });

  const { isActive, isRed, isBlue, isFocus } = isLogics;

  const mouseLeaveHandler = () => {
    if (isActive && !isRed && !isBlue && !isFocus) {
      setLogics(
        {
          ...isLogics,
          isRed: true,
        });
      setClassChange('active-red-hover');
    } else if (!isActive && !isRed && !isBlue && !isFocus) {
      setLogics(
        {
          ...isLogics,
          isBlue: !isBlue
        })
      setClassChange('');
    } else if (isActive && isRed && !isBlue && isFocus) {
      setLogics(
        {
          ...isLogics,
          isFocus: !isFocus});
    } else if (isActive && !isRed && !isBlue && isFocus) {
            setLogics(
        {
          ...isLogics,
          isFocus: !isFocus});
    }
  };

  const mouseEnterHandler = () => {
    if (isActive && isRed && !isBlue && !isFocus) {
      setLogics(
        {
          ...isLogics,
          isRed: true,
          isFocus: !isFocus
        });
    } else if (isActive && !isRed && !isBlue && !isFocus) {
      setLogics(
        {
          ...isLogics,
          isRed: true,
          isFocus: !isFocus
        });
      setClassChange('active-red-hover');
    }
   };

  const clickHandler = (evt) => {
    evt.preventDefault();
    if (!isActive) {
        setLogics(
          {
            ...isLogics,
            isRed: false,
            isBlue: false,
            isActive: !isActive
          });
        setClassChange('active-red');
          } else if (isActive) {
          setLogics(
            {
              ...isLogics,
              isRed: false,
              isBlue: false,
              isActive: !isActive,
              isFocus: false
            });
          setClassChange('blue');
          }
  };

  return ( 
    <article className={`card  ${available ? '' : 'disable'}`}>
      <div className='card__wrapper' >
        <a className={`card__link ${classChange}`} href='#' onClick={clickHandler} onMouseLeave={mouseLeaveHandler} onMouseEnter={mouseEnterHandler}>
          <div className="card__content">
            <div className='card__info'>
              {isActive && isFocus ?
                <p className='card__info-description red'>Котэ не одобряет?</p> :
                <p className='card__info-description'>Сказочное заморское яство</p>
              }
              <h2 className='card__info-title'>Нямушка</h2>
              <p className='card__info-ingredient'>{mainСourse}</p>
              <p className='card__info-portion'>
                <span>{portion} </span>
                {getWordEnding(portion, portionWordEnding.firstEnding, portionWordEnding.secondEnding, portionWordEnding.thirdEnding)}
              </p>
              <p className='card__info-present'><span>{getMiceCount(miceCount)} </span>{getWordEnding(miceCount, miceWordEnding.firstEnding, miceWordEnding.secondEnding, miceWordEnding.thirdEnding)} в подарок
              </p>
              <p className='card__info-customer'>{customer ? 'заказчик доволен' : ''}</p>
            </div>
            <img
              className='card__image'
              src={image}
              alt='cute-cat-card'
            />
            <div className='card__weight'>
              <p>
                {weight}
                <br />
                <span>кг</span>
              </p>
            </div>
          </div>
        </a>
        {available ?
          !isActive ?
            <p className='card__button-buy'> Чего сидишь? Порадуй котэ, <a href='#' onClick={clickHandler}>купи.</a></p>
            : <p className='card__button-buy'> {ingredient} </p>
          : <p className='card__button-buy' >Печалька, {mainСourse} закончился.</p>}
      </div>
    </article>
  );
}

export default Card;
