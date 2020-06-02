import React, {Component} from 'react';
import './Main.css';
import Slider from './Slider.js';
import imagen1 from './img/tres.jpg';
import imagen2 from './img/cuatro.jpg';
import { css, jsx } from '@emotion/core'
class Main extends Component
{

render()
{
    const images = [
       
        'https://drive.google.com/file/d/1EioklEdw-Lqj9r_73s-3k3SV0-lVvybK/view?usp=sharing',
        'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
        'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
      ]

      const img =[
        


      ]

      const Arrow = ({ direction, handleClick }) => (
        <div 
        css={css`
     
      position: relative;
      height: 100%;
      width: 100%;
      `}>
          {<img src={imagen1}></img>,
        <img src={imagen2}></img>}
        </div>
      )
 return(
      <div className="Main">
          <main>

                    <div className="slider">
                <Slider slides={images}></Slider>
                    </div>
          </main>


      </div>

        





 )



}






}


export default Main;