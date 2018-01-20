
export const goDetail = () => {
    return function (dispacth) {
        dispacth({ type: "PUSH_SCREEN", screen: "Screen4" });
    };
};

export const goStack = () => {
    return function (dispacth) {
        dispacth({ type: "PUSH_SCREEN", screen: "Screen3" });
    };
};



export const showModal = () => {
    return function (dispacth) {
        dispacth({ type: "SHOW_MODAL", screen: "Screen2" });
    };
};

