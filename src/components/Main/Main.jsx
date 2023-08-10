import React,{useEffect} from 'react'
import './main.css'
import img from '../../assets/bali3.jpg'
import img2 from '../../assets/berehove.jpeg'
import img3 from '../../assets/chicago-us.jpeg'
import img4 from '../../assets/santorini-greece.jpeg'
import img5 from '../../assets/venice-italy.jpeg'
import img6 from '../../assets/cappadocia-turkey.jpg'
import img7 from '../../assets/taj-mahal.jpg'
import img8 from '../../assets/maldives.jpg'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {HiOutlineClipboardCheck} from 'react-icons/hi'

import Aos from 'aos'
import 'aos/dist/aos.css'


const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle:'Bali',
    location:'Indonesia',
    grade:'CULTURAL RELAX',
    fees: '$500',
    description:"Bali, Indonesia is a captivating island destination that offers a perfect blend of natural beauty, cultural experiences, and a relaxed atmosphere. It is often referred to as the Island of the Gods due to its stunning landscapes, vibrant traditions, and spiritual ambiance."
  },

  {
    id:2,
    imgSrc:img2,
    destTitle:'Berehove',
    location:'Ukraine',
    grade:'CULTURAL RELAX',
    fees:'$700',
    description:'Berehove, a charming town nestled in the western part of Ukraine, is a hidden gem that offers a unique and enriching travel experience. Known for its thermal baths, rich history, and warm hospitality, Berehove promises an unforgettable journey for those seeking a blend of relaxation and cultural exploration.'
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:'Chicago',
    location: 'U.S',
    grade:'CULTURAL RELAX',
    fees:'$900',
    description:'Chicago, often referred to as the "Windy City," is a dynamic and vibrant metropolis that sits along the shores of Lake Michigan in the United States. With its iconic skyline, diverse neighborhoods, rich cultural scene, and renowned architecture, Chicago offers a multitude of experiences for every type of traveler. '
  },

  {
    id:4,
    imgSrc:img4,
    destTitle:'Santorini',
    location:'Greece',
    grade:'CULTURAL RELAX',
    fees:'$690',
    description:'Santorini, a mesmerizing Greek island nestled in the Aegean Sea, is a dreamy destination that captures the hearts of travelers with its stunning sunsets, white-washed buildings, azure waters, and rich history. Known for its romantic ambiance and picturesque landscapes, Santorini offers an unforgettable experience for those seeking a blend of relaxation and exploration. '
  },

  {
    id:5,
    imgSrc:img5,
    destTitle:'Venice',
    location:'Italy',
    grade:'CULTURAL RELAX',
    fees:'$820',
    description:'Venice, often referred to as the "City of Canals," is a unique and enchanting destination that captures the imagination with its intricate waterways, historic architecture, artistic treasures, and rich cultural heritage. Nestled in northeastern Italy, Venice offers an unparalleled experience for travelers seeking romance, history, and artistic inspiration.'
  },

  {
    id:6,
    imgSrc:img6,
    destTitle:'Cappadocia',
    location:'Turkey',
    grade:'CULTURAL RELAX',
    fees:'$800',
    description:'Cappadocia, a magical region located in central Turkey, is a land of otherworldly landscapes, ancient history, and captivating cultural experiences. With its unique rock formations, underground cities, hot air balloon rides, and warm hospitality, Cappadocia offers a truly unforgettable journey for those seeking adventure and exploration.'
  },

  {
    id:7,
    imgSrc:img7,
    destTitle:'Taj Mahal',
    location:'India',
    grade:'CULTURAL RELAX',
    fees:'$500',
    description:'The Taj Mahal, a timeless masterpiece located in Agra, India, is a symbol of love, beauty, and architectural excellence. This iconic white marble mausoleum is celebrated as one of the most stunning structures ever built and holds a special place in the hearts of people around the world.'
  },

  {
    id:8,
    imgSrc:img8,
    destTitle:'Maldives',
    location:'Maldives',
    grade:'CULTURAL RELAX',
    fees:'$640',
    description:'The Maldives, a tropical paradise nestled in the heart of the Indian Ocean, is a dream destination that captures the essence of a perfect escape. With its pristine white sandy beaches, crystal-clear turquoise waters, and luxurious overwater bungalows, the Maldives offers a haven for travelers seeking relaxation, romance, and natural beauty. '
  },

  // {
  //   id:9,
  //   imgSrc:,
  //   destTitle:,
  //   location:,
  //   grade:,
  //   fees:,
  //   description:
  // },

  // {
  //   id:10,
  //   imgSrc:,
  //   destTitle:,
  //   location:,
  //   grade:,
  //   fees:,
  //   description:
  // },
]

const Main = () => {
  return (
    <section className='main container section'>
      <div className='secTitle'>
        <h3 className='title'>
          Most visited destinations
        </h3>
      </div>

      <div className="secContent grid">
      {

      }
      {
        Data.map(({id,
          imgSrc,
          destTitle,
          location,
          grade,
          fees,
          description})=>{
            return(
              <div key={id}  data-aos='fade-up' 
              className="singleDestination">
              {}
              
              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">{destTitle}</h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade}<small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                    <p>{description}</p>
                </div>

                <button className="btn flex">
                  DETAILS <HiOutlineClipboardCheck className='icon'/>
                </button>
              </div>
              </div>
            )
          })
      }


      </div>
    </section>
  ) 
}

export default Main