import React, { Component } from 'react';
import HeaderTemplate from '../template/header';
import FooterTemplate from '../template/footer';
import Tinderable from './components/tinderable.js';

var cardsData = [
    {
        title: 'A wonderful day', 
        text: '—— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— -',
        image: 'portrait-1.jpg',
        id: '1'
    },
    {
        title: 'My amazing journey',
        text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ——— ———— ',
        image: 'portrait-2.jpg',
        id: '2'
    },
    {
        title: 'Three recipes without cocoa',
        text: ' - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ——— - - - ———',
        image: 'portrait-3.jpg',
        id: '3'
    },
    {
        title: 'Generic clickbait title',
        text: ' —— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— —— - ——— - - - ——— ———— - — ——— —— - ————— - - ———— - ——— ',
        image: 'portrait-4.jpg',
        id: '4'
    }
];

class HomePage extends Component {
  render() {
    return (

      <div>
      <HeaderTemplate logo="Palisthetics" />
	<div className="row">
			<div className="col-md-3 col-md-offset-3">
					<h2 className="h2blue text-center">I'm looking for...</h2>
					<div className="row">
					<div className="col-xs-2 col-xs-offset-2"><div className="circle"></div></div>
					<div className="col-xs-2 col-xs-offset-2"><div className="circle"></div></div>
					</div>
          <div className="row">
					<div className="col-xs-2 col-xs-offset-2 "><div className="circle"></div></div>
					<div className="col-xs-2 col-xs-offset-2 "><div className="circle"></div></div>
					</div>
          <div className="row">
					<div className="col-xs-2 col-xs-offset-2"><div className="circle"></div></div>
					<div className="col-xs-2 col-xs-offset-2"><div className="circle"></div></div>
					</div>
			</div>
			<div className="col-md-4">
	  <Tinderable initialCardsData={cardsData} />
	  </div>
      </div>
      <FooterTemplate />
      </div>
    );
  }
}

export default HomePage;
