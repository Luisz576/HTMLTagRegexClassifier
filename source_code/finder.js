const regex = /<(!?|\/?)[A-z0-9]+( ([A-z0-9\"=,\-_. ()\*\&\%\$\#\@!+:/\[\]])*)?>/g;

class Finder{
    find(data){
        return data.match(regex)
    }
}

module.exports = Finder