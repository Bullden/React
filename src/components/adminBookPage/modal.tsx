// import React, { PureComponent } from 'react';
// import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
// import Modal from '@material-ui/core/Modal';

// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// // const useStyles = makeStyles((theme: Theme) =>
// //   createStyles({
// //     paper: {
// //       position: 'absolute',
// //       width: 400,
// //       backgroundColor: theme.palette.background.paper,
// //       border: '2px solid #000',
// //       boxShadow: theme.shadows[5],
// //       padding: theme.spacing(2, 4, 4),
// //     },
// //   }),
// // );

// // const classes = useStyles({});
//   // getModalStyle is not a pure function, we roll the style only on the first render
//   const [modalStyle] = React.useState(getModalStyle);
//   const [open, setOpen] = React.useState(false);

// export default class SimpleModal extends PureComponent {
// constructor(props:any){
//     super(props);
//     this.state = {};
// }
  
//    handleOpen = () => {
//     setOpen(true);
//   };

//    handleClose = () => {
//     setOpen(false);
//   };

//   render():JSX.Element {
//       return (
//         <div>
//           <p>Click to get the full Modal experience!</p>
//           <button type="button" onClick={this.handleOpen}>
//             Open Modal
//           </button>
//           <Modal
//             aria-labelledby="simple-modal-title"
//             aria-describedby="simple-modal-description"
//             open={open}
//             onClose={this.handleClose}
//           >
//             <div style={modalStyle} >
//               <h2 id="simple-modal-title">Text in a modal</h2>
//               <p id="simple-modal-description">
//                 Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
//               </p>
//               <SimpleModal />
//             </div>
//           </Modal>
//         </div>
//       );

//   }
// }

import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import { InputLabel, Input } from '@material-ui/core';
import Inputs from './inputForBook';
import { object } from 'prop-types';
import ButtonComponent from '@components/helpComponents/button';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 4),
    },
  }),
);
interface SimpleModalProps {
  loadBooks: () => void
}
export default ({ loadBooks }: SimpleModalProps) => {
  const classes = useStyles({});
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <ButtonComponent type ="button" text="Add" click={handleOpen} />
      {/* <button type="button" onClick={handleOpen}>
        Add
      </button> */}
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <Inputs loadBooks={loadBooks} handleClose={handleClose} />
        </div>
      </Modal>
    </div>
  );
}