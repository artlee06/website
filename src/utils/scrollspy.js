export const isInView = (ele) => {
    if (ele === null) {
        return false;
    } else {
        const { top, bottom } = ele.getBoundingClientRect();
        const vHeight = (window.innerHeight || document.documentElement.clientHeight);
    
        return (
        (top > 0 || bottom > 0) &&
        top < vHeight
        );
    }
  }

export const getElement = (id) => {
    return document.getElementById(id);
}


export const handleScroll = (setState, allElementsIDs) => {
    allElementsIDs.forEach((id) => {
        const element = document.getElementById(id);
        setState((inViewState) => {  
            const newState = {
                ...inViewState
            };
            newState[id] = isInView(element);
            return newState;
        });
        // console.log(id + " " + isInView(element));
    });
}