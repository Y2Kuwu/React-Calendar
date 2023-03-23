// // import React from "react";
// // import Alert from "react-bootstrap/Alert";
// // import Button  from "react-bootstrap/Button";




// // export default class AlertDismissable extends React.Component {
// //     constructor(props, context) {
// //       super(props, context);
  
// //       this.handleDismiss = this.handleDismiss.bind(this);
// //       this.handleShow = this.handleShow.bind(this);
  
// //       this.state = {
// //         show: this.props.data
// //       };
// //     }
  
// //     handleDismiss() {
// //       this.setState({ show: false });
// //     }
  
// //     handleShow() {
// //       this.setState({ show: true });
// //     }
  
// //     render() {
// //       if (this.state.show) {
// //         return (
// //           <Alert bsStyle="danger" onDismiss={this.handleDismiss}>
// //             <h4>Oh snap! You got an error!</h4>
// //             <p>
// //               Change this and that and try again. Duis mollis, est non commodo
// //               luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
// //               Cras mattis consectetur purus sit amet fermentum.
// //             </p>
// //             <p>
// //               <Button bsStyle="danger">Take this action</Button>
// //               <span> or </span>
// //               <Button onClick={this.handleDismiss}>Hide Alert</Button>
// //             </p>
// //           </Alert>
// //         );
// //       }
  
// //       return <Button onClick={this.handleShow}>Show Alert</Button>;
// //     }
// //   }
  


// import React, { useState } from 'react';
// import Alert from 'react-bootstrap/Alert';
// import Button from 'react-bootstrap/Button';
// import { render } from 'react-dom';
// import 

// function AlertDismissibleExample() {
//   const [show, setShow] = useState(true);

//   if (show) {
//     return (
//       <Alert variant="danger" onClose={() => setShow(false)} dismissible>
//         <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
//         <p>
//           Change this and that and try again. Duis mollis, est non commodo
//           luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
//           Cras mattis consectetur purus sit amet fermentum.
//         </p>
//       </Alert>
//     );
//   }
//   return <Button onClick={() => setShow(true)}>Show Alert</Button>;
// }

// render(<AlertDismissibleExample />);



