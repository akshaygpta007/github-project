import React, {Component} from 'react';
import { ActivityIndicator, Image, FlatList, Text, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { Icon } from 'react-native-elements';
import { SafeAreaView } from 'react-navigation';
import { Toolbar } from 'react-native-material-ui';
import ActionSheet from 'react-native-actionsheet'

import { fetchAllGithubUsers } from '../../apis';
import { sortData, SORT_BY, getDefaultSorting, SORT_BY_OPTIONS } from './helper';
import styles from './styles';
import { SCREENS } from '../../constants/app';
import COLORS from '../../constants/colors';

const SORT_BY_OPTION_MSG = "Sort By";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sortBy: getDefaultSorting(),
        }
    }

    componentDidMount() {
        this.props.fetchAllUsers();
    }
    
    renderUser = ({ item }) => {
        const scoreText = `Score: ${parseInt(item.score, 10)}`;
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

    renderSortByFilter = () => (
        <TouchableOpacity
            onPress={() => this.ActionSheet.show()}
            style={styles.sortByContainer}
        >
            <Text style={styles.sortBy} >
                {SORT_BY.title.text}
            </Text>
            <Icon name="sort" />
            <ActionSheet
                ref={o => this.ActionSheet = o}
                title={SORT_BY_OPTION_MSG}
                options={SORT_BY_OPTIONS}
                cancelButtonIndex={SORT_BY.cancel.value}
                destructiveButtonIndex={this.state.sortBy}
                onPress={(index) => index !== SORT_BY.cancel.value && this.setState({ sortBy: index })}
            />
        </TouchableOpacity>
    )

    renderListDetails = () => {
        const { users = {} } = this.props;
        const count = users.items && users.items.length;
        const countString = `Showing ${count} results`;
        return <Text style={styles.usersCount}>{countString}</Text>;
    }

    rendersUserList = (users, fetchAllUsers) => {
        const sortedUsers = sortData(users, this.state.sortBy);
        return(
            <SafeAreaView style={styles.flexContainer}>
                <Toolbar
                    leftElement="menu"
                    centerElement="HOME"
                    searchable={{
                        autoFocus: true,
                        onChangeText: (text) => {
                            text && fetchAllUsers(text);
                        },
                        placeholder: 'Search',
                    }}
                    style={{ container: { backgroundColor: COLORS.BLUE } }}
                />
                {this.renderSortByFilter()}
                <FlatList
                    data={sortedUsers}
                    ListHeaderComponent={this.renderListDetails}
                    keyExtractor={({ login }) => login}
                    extraData={this.state}
                    renderItem={this.renderUser}
                />
            </SafeAreaView>
        );
    }

    render() {
        const { fetchAllUsers, users } = this.props;
        return users ? this.rendersUserList(users.items, fetchAllUsers) : <ActivityIndicator />
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