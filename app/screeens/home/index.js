import React, {Component} from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { fetchAllGithubUsers } from '../../apis';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }
    
    render() {
        return (
            <Text>GitHub</Text>
        );
    }
};

function mapStateToProps(state) {
    return {
        users: state.users,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchAllUsers: (searchString) => fetchAllGithubUsers(dispatch, searchString),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);