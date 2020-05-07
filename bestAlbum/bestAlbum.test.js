// 고유 번호를 넣는다.

// 장르 별로 모든 갯수를 총 플레이 횟수를 더해준다.

// 그 후에 장르 별로 플레이 횟수를 보고 정렬을 한다.

// 그 후에 정렬을 한 장르들 끼리 플레이 횟수를 보고 정렬을 한다.

// 그리고 그 고유 번호를 돌려준다.

const bestAlbum = (genres, plays) => {

    const genreObject = {};
    const genresOnly = [];
    genres.forEach((x,i)=> {
       if( genreObject[x]){
        genreObject[x]= genreObject[x]+plays[i];
    }else {
        genreObject[x] = plays[i];
        genresOnly.push(x);

    }
})

    genresOnly.sort((a,b) => {
        return genreObject[b]- genreObject[a];
    })
    
    const genresWithPlays = genres.map((genre,i) => genre = {genre: genre, plays: plays[i], index: i})

    genresWithPlays.sort((a,b) => {
        return genreObject[b.genre]- genreObject[a.genre]
    })
    genresWithPlays.sort((a,b) => {
        if(a.genre === b.genre) {
            return b.plays- a.plays
        }
        return
    })
    genresWithPlays.sort((a,b) => {
        if(a.genre === b.genre && a.plays === b.plays) {
            return a.index- b.index
        }
        return
    })
    
    const genreCounts = {};
    const slicedGenres =[];
    genresWithPlays.forEach(x => {
        if(!genreCounts[x.genre]){
            slicedGenres.push(x)
            genreCounts[x.genre] = 1;
        } else {
            if(genreCounts[x.genre] < 2)
            {
            slicedGenres.push(x);
            genreCounts[x.genre] = genreCounts[x.genre] +1
            }
        }
    })

    const answer = slicedGenres.map(x=> x= x.index);
    return answer;
}

test('bestAlbum', () =>{
    expect(bestAlbum(["classic", "pop", "classic", "classic", "pop"], [500, 600, 150, 800, 2500])).toEqual([4,1,3,0]);
    expect(bestAlbum(["classic", "pop", "classic", "classic", "pop","hi"], [500, 600, 150, 800, 2500, 4])).toEqual([4,1,3,0,5]);
    expect(bestAlbum(["classic", "pop", "classic", "classic", "pop","hi"], [500, 600, 150, 800, 2500, 4])).toEqual([4,1,3,0,5]);
})