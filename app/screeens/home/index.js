import React, {Component} from 'react';
import { ActivityIndicator, Image, FlatList, Picker, Text, View } from 'react-native';
import { connect } from 'react-redux';
import { fetchAllGithubUsers } from '../../apis';
import styles from './styles';

const SORT_BY = {
    title: {
        text: "Sort By",
        value: 0,
    },
    nameAscending: {
        text: "Name (A - Z)",
        value: 1,
    },
    nameDescending: {
        text: "Name (Z - A)",
        value: 2,
    },
    renkAscending: {
        text: "Rank Asc",
        value: 3,
    },
    rankDescending: {
        text: "Rank Desc",
        value: 4,
    }
};

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchString: '',
            sortBy: SORT_BY.nameDescending.value,
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
                <View style={styles.viewDetailLinkContainer}>
                    <Text style={styles.viewDetailLink}>View Details</Text>
                </View>
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
        return(
            <FlatList
                data={users}
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