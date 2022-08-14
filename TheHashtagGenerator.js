//First version

function generateHashtagFirstAttempt(str) {

    let result = '#';

    str = str.split(' ')
    str = str.map(item => {
        return (item.charAt(0).toUpperCase() + item.slice(1)).trim()
    })
    str = str.join('')

    return (result+str).length > 140 ? false : result+str === '#' ? false : result+str
}

//Final version

function generateHashtag(str) {
    return ('#' + str.split(' ').map(item => (item.charAt(0).toUpperCase() + item.slice(1)).trim()).join('')).length > 140 ? false : str.trim() === '' ? false : '#' + str.split(' ').map(item => (item.charAt(0).toUpperCase() + item.slice(1)).trim()).join('')
}

console.log(generateHashtag("Do We have A      Hashtag"));
