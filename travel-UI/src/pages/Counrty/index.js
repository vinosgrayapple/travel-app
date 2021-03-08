import { withTranslation } from 'react-i18next';
import { connect } from 'react-redux';
import Country from './Country';
import { set, setSearch } from 'actions';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({ main }) => ({
  item: main.item,
});

export default connect(mapStateToProps)(withTranslation()(withRouter(Country)));
