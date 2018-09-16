import React, {Component} from 'react';
import { ActivityIndicator, Image, FlatList, Picker, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchAllGithubUsers } from '../../apis';
import { sortData, SORT_BY, getDefaultSorting } from './helper';
import styles from './styles';
import { SCREENS } from '../../constants/app';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            sortBy: getDefaultSorting(),
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }
    
    renderUser = ({ item }) => {
        const scoreText = `Score: ${item.score}`;
        return (
            <View style={[styles.flexRowContainer, styles.cell]}>
                <View style={styles.flexRowContainer}>
                    <Image 
                        style={styles.image}
                        source={{ uri: item.avatar_url }}
                    />
                    <View style={styles.contentDetail}>
                        <Text>{item.login}</Text>
                        <Text>{scoreText}</Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate(SCREENS.DETAILS, { userDetails: item })}
                    style={styles.viewDetailLinkContainer}
                >
                    <Text style={styles.viewDetailLink}>View Details</Text>
                </TouchableOpacity>
            </View>
        );
    }

    renderSortByFilter = () => {
        const { sortBy } = this.state;
        return (
            <View style={styles.sortByContainer}>
                <Picker
                    selectedValue={sortBy}
                    style={styles.sortBy}
                    onValueChange={(itemValue, itemIndex) => {
                        this.setState({ sortBy: itemValue });
                    }}>
                    <Picker.Item label={SORT_BY.title.text} value={SORT_BY.title.value} />
                    <Picker.Item label={SORT_BY.nameAscending.text} value={SORT_BY.nameAscending.value} />
                    <Picker.Item label={SORT_BY.nameDescending.text} value={SORT_BY.nameDescending.value} />
                    <Picker.Item label={SORT_BY.renkAscending.text} value={SORT_BY.renkAscending.value} />
                    <Picker.Item label={SORT_BY.rankDescending.text} value={SORT_BY.rankDescending.value} />
                </Picker>
            </View>
        );
    }

    renderListDetails = () => {
        const { users = {} } = this.props;
        const count = users ? users.total_count : 0;
        const countString = `Showing ${count} results`;
        return (
            <View>
                {this.renderSortByFilter()}
                <Text style={styles.usersCount}>{countString}</Text>
            </View>);
    }

    rendersUserList = (users) => {
        const sortedUsers = sortData(users, this.state.sortBy);
        return(
            <FlatList
                data={sortedUsers}
                ListHeaderComponent={this.renderListDetails}
                keyExtractor={({ login }) => login}
                extraData={this.state}
                renderItem={this.renderUser}
            />
        );
    }

    render() {
        const { users } = this.props;
        return users ? this.rendersUserList(users.items) : <ActivityIndicator />
    }

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'HOME',
        };
    };
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