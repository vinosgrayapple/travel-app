// import { render } from '@testing-library/react';
import React, { Component } from 'react';
import UniversalCarousel from 'components/Carousel';
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
import { Link } from 'react-router-dom';
import { setSearch } from 'actions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDropBut: false,
    };

    // setTimeout(() => {
    //   this.props.history.push('/country')
    // }, 4000);
  }

  toggle = () => {
    const { isDropBut } = this.state;
    this.setState({ isDropBut: !isDropBut });
  };

  changeLanguage = () => () => {};

  render() {
    const { isDropBut } = this.state;
    const { t, i18n } = this.props;
    console.log('🔥', this.props);

    return (
      <div className="wrapper">
        <CardHeader className="header ">
          <CardTitle tag="h1">{t('title') + this.props.search}</CardTitle>
          <Card className="d-flex flex-row bg-transparent border-0">
            <Input
              className="w-25"
              type="search"
              placeholder="Search the country"
              onChange={(e) => {
                this.props.setSearch(e.target.value);
              }}
            />
            <Button onClick={() => {}}>{t('buttonSerch')}</Button>
            <ButtonDropdown isOpen={isDropBut} toggle={this.toggle} onClick={this.changeLanguage}>
              <DropdownToggle caret>{t('buttonChouseLang')}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem disabled>English</DropdownItem>
                <DropdownItem>Русский</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Deutsch</DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Card>
        </CardHeader>
        <CardBody className="wrapper__body">
          <UniversalCarousel />
        </CardBody>
        <CardFooter className="footer d-flex justify-content-around bg-transparent border-0">
          <span className="year">2021</span>
          <a href="https://rs.school/js/">
            <CardImg className="logo" src="media/img/rs_school_js.svg"></CardImg>
          </a>
        </CardFooter>
      </div>
    );
  }
}
export default Main;
