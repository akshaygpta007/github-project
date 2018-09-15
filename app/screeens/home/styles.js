import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { PADDING, MARGIN } from '../../constants/dimen';

const IMAGE_SIZE = 50;

const styles = StyleSheet.create({
    usersCount: {
        padding: PADDING.SIXTEEN,
    },
    flexContainer: {
        flex: 1,
    },
    flexRowContainer: {
        flex: 1,
        flexDirection: 'row',  
    },
    cell: {
        backgroundColor: COLORS.WHITE,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.LIGHT_GREY,
        padding: PADDING.SIXTEEN,
    },
    contentDetail: {
        marginLeft: MARGIN.EIGHT,
        justifyContent: 'center',
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
    },
    sortByContainer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: COLORS.WHITE,
        justifyContent: 'center',
    },
    sortBy: {
        width: 160,
    },
    viewDetailLinkContainer: {
        justifyContent: 'center',
    },
    viewDetailLink: {
        color: COLORS.LINK
    },
  });

  export default styles;