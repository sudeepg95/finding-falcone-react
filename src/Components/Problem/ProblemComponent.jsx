import React from 'react';
import { Link } from 'react-router-dom';

const ProblemComponent = () => {
  return (
    <div className="box">
      <div className="title-box">Welcome to the planet of Lengaburu</div>
      <div className="box-content">
        <div className="image-box image-box-bordered">
          <img src={`${process.env.PUBLIC_URL}/eagle.png`} alt="eagle" />
        </div>
        <div className="text-box">
          <p className="description">
            After the recent war with neighbouring planet Falicornia, King Shan has exiled the Queen
            of Falicornia for 15 years. Queen Al Falcone is now in hiding. But if King Shan can find
            her before the years are up, she will be exiled for another 15 years....
          </p>
          <p className="description">
            King Shan has received intelligence that Al Falcone is in hiding in one of these 6
            planets - DonLon, Enchai, Jebing, Sapir, Lerbin & Pingasor. However he has limited
            resources at his disposal & can send his army to only 4 of these planets. Your task is
            to help King Shan find Al Falcone.
          </p>
        </div>
        <div className="buttons-box">
          <Link to="/solve/select-planets">Help King Shan find Al Falcone</Link>
        </div>
      </div>
    </div>
  );
};

export default ProblemComponent;
