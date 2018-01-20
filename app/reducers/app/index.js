const initialState = {
    root: undefined // 'login' / 'after-login'
};
import { getNav } from '../../navigatior';

export default function app(state = initialState, action = {}) {
    let nav = getNav();
    switch (action.type) {
        case "ROOT_CHANGED":
            return { ...state, root: action.payload };
            break;
        case "PUSH_SCREEN":
            nav.push({
                screen: action.screen,
            });
            return { ...state };
            break;
        case "SHOW_MODAL":

            nav.showModal({
                screen: action.screen,
            });
            return { ...state };;
            break;
        case "CLOSE_MODAL":
            nav.dismissModal({
                animationType: 'slide-down'
            });
            return { ...state };;
            break;
        case "POP_TO_ROOT":
            nav.popToRoot({
                animated: true, // does the popToRoot have transition animation or does it happen immediately (optional)
                animationType: 'fade', // 'fade' (for both) / 'slide-horizontal' (for android) does the popToRoot have different transition animation (optional)
            });
            return { ...state };;
            break;
        default:
            return state;
    }
}