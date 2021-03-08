import React,{Component} from 'react'
import { render } from 'react-dom/cjs/react-dom.development';
import {
  Button,
  Input,
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  CardFooter,
  CardImg,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
class Country extends Component{
 constructor(props) {
    super(props);
    this.state = {}

}
render(){
    return (
      <div className="wrapper-country">
        <CardHeader>{this.props.item.header}</CardHeader>
        <CardBody>{this.props.item.body}</CardBody>
        <CardFooter></CardFooter>
      </div>
    );
}
}
export default Country