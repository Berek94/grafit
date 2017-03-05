import Main from '../components/Main';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import {getUsers} from '../actions/index';

const mapStateToProps = (state) => ({
    users: state.app.users,
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
    getUsers
},dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Main)