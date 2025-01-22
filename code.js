function binarySearch(list, element, positionOne = 0, positionTwo = list.length - 1) {
    // Used the help from chatGPT to help with this if statement because I couldnt figure out the proper case to return -1
    if (positionOne > positionTwo) {
        return -1;
    }

    half = Math.floor((positionOne + positionTwo) / 2);
    if (element === list[half]) {
        while (list[half - 1] === element) {
            half -= 1;
        }
        return half;
    } else if (element < list[half]) {
        return binarySearch(list, element, positionOne, half - 1);
    } else {
        return binarySearch(list, element, half + 1, positionTwo);
    }
}
