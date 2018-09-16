import { StyleSheet } from 'react-native';
import COLORS from '../../constants/colors';
import { PADDING, MARGIN } from '../../constants/dimen';
import colors from '../../constants/colors';

const IMAGE_SIZE = 80;
const BUTTON_WIDTH = 120;

const styles = StyleSheet.create({
    flexContainer: {
        flex: 1
    },
    flexRowContainer: {
        flexDirection: 'row',  
    },
    cell: {
        backgroundColor: COLORS.WHITE,
        borderBottomWidth: 2,
        borderBottomColor: COLORS.LIGHT_GREY,
        padding: PADDING.SIXTEEN,
    },
    basicInfoContentContainer: {
        flex: 1,
        marginLeft: MARGIN.SIXTEEN,
        justifyContent: 'center',
    },
    basicInfoText: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    viewProfileContainer: {
        borderWidth: 2,
        borderColor: COLORS.LIGHT_GREY,
        marginTop: MARGIN.EIGHT,
        padding: PADDING.EIGHT,
        width: BUTTON_WIDTH,
    },
    viewProfile: {
        color: COLORS.LINK,
        textAlign: 'center',
    },
    image: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE,
        borderRadius: IMAGE_SIZE / 2,
    },
    smallCell: {
        backgroundColor: COLORS.WHITE,
        padding: PADDING.EIGHT,
    },
    smallImage: {
        width: IMAGE_SIZE,
        height: IMAGE_SIZE / 2,
        borderRadius: IMAGE_SIZE / 4,
    },
    title: {
        fontSize: 10,
    },
    descriptionWithLink: {
        fontSize: 16,
        fontWeight: 'bold',
        color: COLORS.LINK,
    },
    description: {
        fontSize: 16,
        fontWeight: 'bold',
    },
  });

  export default styles;