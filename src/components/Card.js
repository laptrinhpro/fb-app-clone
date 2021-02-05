import Styled from 'styled-components'

import Button from './Buttons'

export const List = (props) => {
  return (
    <>
      <li className='list-group-item'>{props.list}</li>
    </>
  )
}

const Cards = ({ img, title, text, btnName, bgBtn, colorBtn }) => {
  return (
    <Card className='card mt-2 mx-n1'>
      <CardImageMax>
        <img src={img} className='card-img-top' alt={title} />
      </CardImageMax>
      <div className='card-body'>
        <h5 className='card-title'>{title}</h5>
        <p className='card-text'>{text}</p>
      </div>
    </Card>
  )
}

export default Cards


const Card = Styled.div`
  overflow: hidden;
`

const CardImageMax = Styled.div`
  max-height: 190px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  & img {
    width: 100%;
  }
`
