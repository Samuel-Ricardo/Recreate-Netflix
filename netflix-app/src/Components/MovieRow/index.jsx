import React from 'react'
import './MovieRow.css'

import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';

import MovieItem from '../MovieItem'

export default ({title, itens, onSelect}) => {

  const [scrollX, setScrollX] = React.useState(0)
  
  const handlerLeftArrow = () => {

    let x = scrollX + Math.round(window.innerWidth / 2)

    if(x > 0){
      
      x = 0
    }

    setScrollX(x)
  }

  const handlerRightArrow = () => {

    let x = scrollX - Math.round(window.innerWidth / 2)

    let listWidth = itens.results.length * 150

    if((window.innerWidth - listWidth) > x ){
      x = (window.innerWidth - listWidth) - 80
    }
      setScrollX(x)
  } 


    return(
        <div className="MovieRow">

          <div className="MovieRow--Right" onClick={handlerRightArrow}>
            <NavigateNextIcon style={{fontSize: 50}}/>
          </div>

          <div className="MovieRow--Left" onClick={handlerLeftArrow}>
            <NavigateBeforeIcon style={{fontSize: 50}}/>
          </div>

          <h2 className="Title">{title}</h2>

          <div className="MovieRow--ListArea">
            <div className="MovieRow--List"
            
              style={{
                width : itens.results.length * 150,
                marginLeft: scrollX
              }}
            >

            {itens.results.length > 0 && itens.results.map((movie, key) => (
              
              <MovieItem movie={movie} itens={itens} select={onSelect} />
              
            ))}

            </div>
          </div>
        </div>
    )
}