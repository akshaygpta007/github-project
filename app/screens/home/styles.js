import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { PADDING, MARGIN, FONT } from '../../constants/dimen';

const IMAGE_SIZE = 50;

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1,
    },
    flexRowContainer: {
        flex: 1,
        flexDirection: 'row',  
    },
    usersCountContainer: {
        padding: PADDING.SIXTEEN,
    },
    usersCountText: {
        fontFamily: 'Lato-Bold',
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
        flexDirection: 'row',
        borderBottomWidth: 2,
        borderTopWidth: 2,
        borderBottomColor: COLORS.LIGHT_GREY,
        borderTopColor: COLORS.LIGHT_GREY,
        backgroundColor: COLORS.WHITE,
        justifyContent: 'center',
        paddingVertical: PADDING.SIXTEEN,
    },
    sortBy: {
        fontSize: FONT.SIZE.SIXTEEN,
        marginRight: MARGIN.EIGHT
    },
    viewDetailLinkContainer: {
        justifyContent: 'center',
    },
    viewDetailLink: {
        color: COLORS.LINK
    },
  });

  export default styles;