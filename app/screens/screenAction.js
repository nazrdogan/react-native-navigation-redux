export const goTab = () => {
    return function (dispatch) {
        dispatch({ type: "ROOT_CHANGED", payload: "after-login" });
    };
};

export const goLogin = () => {
    return function (dispatch) {
        dispatch({ type: "ROOT_CHANGED", payload: "login" });
    };
};

export const push = (screen) => {
    return function (dispacth) {
        dispacth({ type: "PUSH_SCREEN", screen });
    };
};
export const popToRoot = (screen) => {
    return function (dispacth) {
        dispacth({ type: "POP_TO_ROOT" });
    };
};

export const dismissModal = () => {
    return function (dispatch) {
        dispatch({ type: "CLOSE_MODAL" });
    };
};
