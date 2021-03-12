import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Footer from './Footer'
import Bar from './Bar'
import Content from './Content'

function Main () {
  return (
    <>
      <CssBaseline />
      <Bar />
        <Content />
      <Footer/>
    </>
  )
}

export default Main

// // import { render } from '@testing-library/react';
// import React, { Component } from 'react';
// import UniversalCarousel from '../../Component/Carousel/Carousel';
// import { Button, Input,Card, CardHeader,CardTitle, CardBody, CardFooter, CardImg,} from 'reactstrap';
// class Main extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {};
//   }

//   render() {
//     return (
//       <div className="wrapper">
//         <CardHeader className="header ">
//           <CardTitle tag="h1">We halp you travel</CardTitle>
//           <Card className="d-flex flex-row bg-transparent border-0">
//             <Input className="w-25 fs-5" type="search" placeholder="Search the country" size="small" />
//             <Button size="large " onClick={this.serchCountry}>
//               Search
//             </Button>
//           </Card>
//         </CardHeader>
//         <CardBody className="wrapper__body">
//           <UniversalCarousel />
//         </CardBody>
//         <CardFooter className="footer d-flex justify-content-around bg-transparent border-0">
//           <span className="year">2021</span>
//           <a href="https://rs.school/js/">
//             <CardImg className="logo" src="media/img/rs_school_js.svg"></CardImg>
//           </a>
//         </CardFooter>
//       </div>
//     );
//   }
// }
// export default Main;
