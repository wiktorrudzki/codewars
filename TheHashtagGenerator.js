function generateHashtag (str) {

    let result = '#';

    str = str.split(' ')
    str = str.map(item => {
        return (item.charAt(0).toUpperCase() + item.slice(1)).trim()
    })
    str = str.join('')

    return (result+str).length > 140 ? false : result+str === '#' ? false : result+str
}

console.log(generateHashtag("Do We have A      Hashtag"));
