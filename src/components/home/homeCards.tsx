import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles({
//   card: {
//     minWidth: 275,
//   },
//   bullet: {
//     display: 'inline-block',
//     margin: '0 2px',
//     transform: 'scale(0.8)',
//   },
//   title: {
//     fontSize: 14,
//   },
//   pos: {
//     marginBottom: 12,
//   },
// });

function createData (
  nameBook: string,
  description: string,
  cost: number
) {
  return {nameBook, description, cost}
}
let cards:any[] =[];

interface CardDataItem {
  nameBook: string,
  description: string,
  cost: number
}
interface CardBookState {
  cardData: CardDataItem[]
}

export default class SimpleCard extends React.Component<any,CardBookState> {
  // const classes = useStyles({});
  constructor(props: any) {
    super(props);
    this.state = {
      cardData:[]
    }
  }
loadCardBooks = async () => {
  const data = await fetch('http://localhost:3001/books',{
      method:"GET",
      headers: {
        'Accept': "application/json",
        "Content-Type": "application/json"
      }
    });
    const arrCards = await data.json()
    console.log('arrBooks',arrCards)
    arrCards.forEach(function(item:any) {
      cards.push(createData( item.nameBook, item.description, item.cost))
    })
    let formattedArr: CardDataItem[] = [];
    arrCards.forEach((item:any)=>{
      formattedArr.push(
        createData(item.nameBook, item.description, item.cost)
      )
    })

    this.setState({
      cardData : formattedArr
    });
    console.log('cardData',this.state.cardData)
}

 render() {
  const { cardData } = this.state;
   return (
     <div>
       {cardData.map(row =>(
         <Card>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Book
            </Typography>
            <Typography variant="h5" component="h2">
              {row.nameBook}
            </Typography>
            <Typography color="textSecondary">
              {row.description}
            </Typography>
            <Typography variant="body2" component="p">
              {row.cost}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Buy</Button>
          </CardActions>
        </Card>
       ))}
    </div>
   
   );
 } 
}