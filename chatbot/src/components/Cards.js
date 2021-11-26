import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these Property Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img5.jpg'
              text='The magic thing about home is that it feels good to leave, and it feels even better to come back.'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/img1.jpg'
              text='There is no place like home.'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img2.jpg'
              text='The ache for home lives in all of us, the safe place where we can go as we are and not be questioned.'
              label='Mystery'
              path='/'
            />
            <CardItem
              src='images/img3.jpg'
              text='Bless out house as we come and go. Bless our home as the children grow. Bless our families as they gather in. Bless our home with love and friends.'
              label='Adventure'
              path='/'
            />
            <CardItem
              src='images/img4.jpg'
              text='It is like coming home after a long trip. That is what love is like. It is like coming home.'
              label='Adrenaline'
              path='/'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
