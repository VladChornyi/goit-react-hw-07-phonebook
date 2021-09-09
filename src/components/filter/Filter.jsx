import s from './Filter.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { changeFilter } from '../../redux/phonebook/phonebook-actions';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <>
      <label className={s.title}>
        Find contacts by name
        <input className={s.data} type="text" value={value} onChange={onChangeFilter} />
      </label>
    </>
  );
};

const mapStateToProps = state => ({
  value: state.phonebook.filter,
});

const mapDispatchToProps = dispatch => ({
  onChangeFilter: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  value: PropTypes.string,
  onChangeFilter: PropTypes.func.isRequired,
};
