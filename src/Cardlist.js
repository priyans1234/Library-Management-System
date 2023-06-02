import React from 'react';
import Card from './Card';
import image1 from './action.jpg';
import image2 from './comic.jpg';
import image3 from './historical.jpg';
import image4 from './horror.jpg';
import image5 from './ncert.jpg';
import image6 from './novels.jpg';

const App = () => {
  return (
    <div>
      <div className="card-row">
        <Card
          imageSrc={image1}
          name="Action Books"
          
        />
        <Card
          imageSrc={image2}
          name="Comic Books"
        />
        <Card
          imageSrc={image3}
          name="Historical Books"
          
        />
      </div>
      <div className="card-row">
        <Card
          imageSrc={image4}
          name="Horror"
          
        />
        <Card
          imageSrc={image5}
          name="NCERT"
          
        />
        <Card
          imageSrc={image6}
          name="Novels"
          
        />
      </div>
    </div>
  );
};

export default App;
