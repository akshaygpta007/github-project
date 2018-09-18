import React, { Component } from 'react';

import { Image, Linking, ScrollView, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import Text from '../../components/text';
import { Icon } from 'react-native-elements';

import styles from './styles';
import { getRepositoryDetails } from '../../apis';
import { getRepositoryData, CELL } from './helper';
import { SCREENS } from '../../constants/app';
import COLORS from '../../constants/colors';

class Details extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const { id, repos_url } = this.props.navigation.getParam('userDetails');
        this.props.fetchRepositoryDetails(id, repos_url);
    }

    openUrl = (url) => {
        Linking.canOpenURL(url).then(supported => {
            if (supported) {
              Linking.openURL(url);
            }
          });
    }

    renderCell = (iconName, title, description, onPress) => (
        <View style={[styles.flexRowContainer, styles.smallCell]}>
            <Icon
                containerStyle={styles.smallImage}
                name={iconName}
            />

            <View style={styles.basicInfoContentContainer}>
                <Text style={styles.title}>{title}</Text>
                {onPress 
                    ? (
                <TouchableOpacity
                    onPress={onPress}
                >
                    <Text style={styles.descriptionWithLink}>{description}</Text>
                </TouchableOpacity>)
                    : <Text style={styles.description}>{description}</Text>}
            </View>
        </View>
    )
    
    render () {
        const { navigation, repository = {} } = this.props;
        const { avatar_url, html_url, id, login } = navigation.getParam('userDetails');
        const { name, description, repo_url, language, createdOn } = getRepositoryData(repository, id);
        const onPressRepositoryUrl = () => repo_url && this.openUrl(repo_url);
        const onPressViewProfile = () => html_url && this.openUrl(html_url);
        const createdOnDate = new Date(createdOn).toLocaleDateString().split('/').join('-');
        return (
            <ScrollView style={styles.flexContainer}>
                <View style={[styles.flexRowContainer, styles.cell]}>
                    <Image 
                        style={styles.image}
                        source={{ uri: avatar_url }}
                    />
                    <View style={styles.basicInfoContentContainer}>
                        <Text style={styles.basicInfoText}>{login}</Text>
                        <TouchableOpacity
                            onPress={onPressViewProfile}
                            style={styles.viewProfileContainer}
                        >
                            <Text style={styles.viewProfile}>View Profile</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {this.renderCell(CELL.NAME.ICON, CELL.NAME.TITLE, name)}
                {this.renderCell(CELL.DESCRIPTION.ICON, CELL.DESCRIPTION.TITLE, description)}
                {this.renderCell(CELL.URL.ICON, CELL.URL.TITLE, repo_url, onPressRepositoryUrl)}
                {this.renderCell(CELL.LANGUAGE.ICON, CELL.LANGUAGE.TITLE, language)}
                {this.renderCell(CELL.CREATED_ON.ICON, CELL.CREATED_ON.TITLE, createdOnDate)}
            </ScrollView>
        );
    }
    static navigationOptions = ({ navigation }) => {
        return {
            headerLeft: (
                <Icon
                    color={COLORS.WHITE}
                    iconStyle={styles.headerLeft}
                    name="chevron-left"
                    onPress={() => navigation.navigate(SCREENS.MAIN)}
                    underlayColor={COLORS.BLUE}
                />
            ),
            headerStyle: styles.headerStyle,
            headerTitleStyle: styles.headerTitleStyle,
            headerTitle: 'User Details',
        };
    };
}

function mapStateToProps(state) {
    return {
        repository: state.repository,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchRepositoryDetails: (id, repos_url) => getRepositoryDetails(dispatch, id, repos_url),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Details);