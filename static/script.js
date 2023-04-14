let pop_song_left = document.getElementById('left_scroll');
let pop_song_right = document.getElementById('right_scroll');
let pop_song = document.getElementsByClassName('pop-songs')[0];


pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft += 360;
});


pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -= 360;
});

let pop_artist_left = document.getElementById('left_scrolls');
let pop_artist_right = document.getElementById('right_scrolls');
let pop_artist = document.getElementsByClassName('artists')[0];


pop_artist_right.addEventListener('click',()=>{
    pop_artist.scrollLeft += 360;
});


pop_artist_left.addEventListener('click',()=>{
    pop_artist.scrollLeft -= 360;
});


let pop_song_left2 = document.getElementById('left_scrollf');
let pop_song_right2 = document.getElementById('right_scrollf');
let pop_song2 = document.getElementsByClassName('pop-songs2')[0];


pop_song_right2.addEventListener('click',()=>{
    pop_song2.scrollLeft += 360;
});


pop_song_left2.addEventListener('click',()=>{
    pop_song2.scrollLeft -= 360;
});


let pop_song_left1 = document.getElementById('left_scrolli');
let pop_song_right1 = document.getElementById('right_scrolli');
let pop_song1 = document.getElementsByClassName('pop-songs1')[0];


pop_song_right1.addEventListener('click',()=>{
    pop_song1.scrollLeft += 360;
});


pop_song_left1.addEventListener('click',()=>{
    pop_song1.scrollLeft -= 360;
});



const music = new Audio('/static/music//5.mp3');
const music1 = new Audio('/static/music//Pink-Venom.mp3');

//creating array

const songs = [
    {
        id:'1',
        songName:`Lovers In the Night
        <div class="sub" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Seori</div>`,
        poster:"https://i.scdn.co/image/ab67616d0000b273f40a36b5fd31d9817c34b070"
    },

    {
        id:'2',
        songName:`Bad Decisions
        <div class="sub" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">BTS</div>`,
        poster:"https://st1.bollywoodlife.com/wp-content/uploads/2022/07/BTS-Bad-Decisions-.jpg"
    },

    {
        id:'3',
        songName:`New Rules
        <div class="sub" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Dua Lipa</div>`,
        poster:"https://upload.wikimedia.org/wikipedia/en/2/20/Dua_Lipa_%28album%29.png"
    },

    {
        id:'4',
        songName:`Shut Down
        <div class="sub" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">BlackPink</div>`,
        poster:"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/99c08eac-1777-4459-81b0-341be2da5190/dfgy285-e7919242-7f2f-41c7-9545-a9e00497cf9c.jpg/v1/fill/w_894,h_894,q_70,strp/blackpink_shut_down___born_pink_album_cover__2_by_lealbum_dfgy285-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzQ2NCIsInBhdGgiOiJcL2ZcLzk5YzA4ZWFjLTE3NzctNDQ1OS04MWIwLTM0MWJlMmRhNTE5MFwvZGZneTI4NS1lNzkxOTI0Mi03ZjJmLTQxYzctOTU0NS1hOWUwMDQ5N2NmOWMuanBnIiwid2lkdGgiOiI8PTM0NjQifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.57QdT7g4FtVAuZ7_XgSNKrFm4iORfRid48jrNWo-c_A"
    },

    {
        id:'5',
        songName:`Same Old Love
        <div class="sub" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Selena Gomez</div>`,
        poster:"https://www.africandjspool.com/wp-content/uploads/2018/10/Selena-Gomez-%E2%80%93-Revival.jpg"
    },

    {
        id:'6',
        songName:`My Head & My Heart
        <div class="sub" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Ava Max</div>`,
        poster:"https://cdns-images.dzcdn.net/images/cover/0eca025ac1206d710f91c32e49d6e8a8/500x500.jpg"
    },

    {
        id:'7',
        songName:`Butter
        <div class="subtitle" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">BTS</div>`,
        poster:"/static/img/1.png"
    },

    {
        id:'8',
        songName:`Let Me Down Slowly
        <div class="subtitle" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Alec Benjamin</div>`,
        poster:"/static/img/8.png"
    },

    {
        id:'9',
        songName:`Beaultiful Mistakes<br>
        <div class="subtitle" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Maroon5</div>`,
        poster:"/static/img/9.png"
    },

    {
        id:'10',
        songName:`Bad Habits
        <div class="subtitle" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Ed Sheeran</div>`,
        poster:"/static/img/10.png"
    },

    {
        id:'11',
        songName:`Liggi
        <div class="subtitle" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Riwitz</div>`,
        poster:"/static/img/11.png"
    },

    {
        id:'12',
        songName:`Cinderella's Dead
        <div class="subtitle" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">EMELINE</div>`,
        poster:"/static/img/12.png"
    },

    {
        id:'13',
        songName:`I Like Me Better
        <div class="subtitle" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Lauv</div>`,
        poster:"/static/img/13.png"
    },

    {
        id:'14',
        songName:`2002
        <div class="subtitle" style = "font-size: 11px; color: rgba(255, 255, 255, 0.527);">Anne Marie</div>`,
        poster:"/static/img/14.png"
    },

    {
        id:'15',
        songName:`Pink Venom
        <div class="sub">Blackpink</div>`,
        poster:"/static/img/blackp.png"
    },

    {
        id:'16',
        songName:`Thousand Miles
        <div class="sub">Kid Laori</div>`,
        poster:"/static/img/15.jpg"
    },

    {
        id:'17',
        songName:`Mood
        <div class="sub">Iann Dior</div>`,
        poster:"/static/img/16.jpg"
    },

    {
        id:'18',
        songName:`No Lie
        <div class="sub">Sean Paul</div>`,
        poster:"/static/img/17.jpg"
    },

    {
        id:'19',
        songName:`At My Worst
        <div class="sub">Pink Sweat$</div>`,
        poster:"/static/img/18.jpg"
    },

    {
        id:'20',
        songName:`Golden Hour
        <div class="sub">JVKE</div>`,
        poster:"/static/img/19.jpg"
    },

    {
        id:'21',
        songName:`Night Changes
        <div class="sub">One Direction</div>`,
        poster:"/static/img/20.jpg"
    },

    {
        id:'22',
        songName:`Money
        <div class="sub">Lisa</div>`,
        poster:"/static/img/21.jpg"
    },
    {
        id:'23',
        songName:`Watermelon Sugar
        <div class="sub">Harry Style</div>`,
        poster:"/static/img/22.jpg"
    },
    {
        id:'24',
        songName:`Infinity
        <div class="sub">James Young</div>`,
        poster:"/static/img/23.jpg"
    },
    {
        id:'25',
        songName:`Left and Right
        <div class="sub">Charlie Puth</div>`,
        poster:"/static/img/24.jpg"
    },
    {
        id:'26',
        songName:`Maniac
        <div class="sub">Conan Gray</div>`,
        poster:"/static/img/25.jpg"
    },

    {
        id:'27',
        songName:`beggin'
        <div class="sub">Måneskin</div>`,
        poster:"/static/img/26.jpg"
    },

    {
        id:'28',
        songName:`Bad
        <div class="sub">Christropher</div>`,
        poster:"/static/img/27.jpg"
    },

    {
        id:'29',
        songName:`DNA
        <div class="sub">BTS</div>`,
        poster:"/static/img/28.jpg"
    },

    {
        id:'30',
        songName:`Dynamite
        <div class="sub">BTS</div>`,
        poster:"/static/img/29.jpg"
    },

    {
        id:'31',
        songName:`Positions
        <div class="sub">Ariana Grande</div>`,
        poster:"/static/img/31.jpg"
    },

    {
        id:'32',
        songName:`Life Goes On
        <div class="sub">BTS</div>`,
        poster:"/static/img/31.jpg"
    },

    {
        id:'33',
        songName:`Kill Bill
        <div class="sub">SZA</div>`,
        poster:"/static/img/33.jpg"
    }


]

Array.from(document.getElementsByClassName('song-artist')).forEach((element,i)=>{
    element.getElementsByTagName('img')[0].src = songs[i].poster;
    element.getElementsByTagName('h5')[0].src = songs[i].songName;
})


// search data start

let search_result = document.getElementsByClassName("search_result")[0];

songs.forEach(element => {
    const {id, songName, poster} = element;
    let card = document.createElement('a');
    card.classList.add('card');
    card.href = '#' + id;
    card.innerHTML = `
    <img src="${poster}" alt="">
    <div class="content">
        ${songName}
    </div>
    `;
    search_result.appendChild(card);


});

let input = document.getElementsByTagName('input')[0];
input.addEventListener('keyup', ()=>{
    let input_value = input.value.toUpperCase();
    let items = search_result.getElementsByTagName('a');

    for (let i = 0; i < items.length; i++) {
        let as = items[i].getElementsByClassName('content')[0];
        let text_value = as.textContent || as.innerText;

        if (text_value.toUpperCase().indexOf(input_value) > -1) {
            items[i].style.display = "flex";
        } else{
            items[i].style.display = "none"
        }
        
        if (input.value == 0) {
            search_result.style.display = "none";
        } else {
            search_result.style.display = "";
        }
    }
})


// search data end


const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('playListPlay')).forEach((elem)=>{
        elem.classList.add('bi-play-circle-fill');
        elem.classList.remove('bi-pause-circle-fill');
    })
}
const makeAllBackgrounds = () =>{
    Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
            element.style.background = "rgb(105, 105, 170, 0)";
    })
}



let masterPlay =document.getElementById('masterPlay');
let wave =document.getElementById('wave');

let back = document.getElementById('back');
let next = document.getElementById('next');


// const makeAllBackgrounds1 = () =>{
//     Array.from(document.getElementsByClassName('songItem')).forEach((element)=>{
//             element.style.background = "rgb(105, 105, 170, 0)";
//     })
// }


masterPlay.addEventListener('click', ()=>{
    if(music.paused || music.currentTime <=0){
        masterPlay.className = "bi bi-pause-fill"
        music.play();
        wave.classList.add('active2');

    } else {
        masterPlay.className = "bi bi-play-fill"
        music.pause();
        wave.classList.remove('active2')
    }
})

let index = 5;
let poster_img_play = document.getElementById('poster_img_play');
let sub1 = document.getElementById('sub1');
let sub2 = document.getElementById('sub2');

Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click', (el)=>{
        index = el.target.id;
        
        console.log(index);
        makeAllPlays();
        el.target.classList.remove('bi-play-circle-fill');
        el.target.classList.add('bi-pause-circle-fill');
        music.src = `static/music/${index}.mp3`;
        
        poster_img_play.src = `/static/img/${index}.png`;
        music.play();
        masterPlay.className = "bi bi-pause-fill"

        let songTitle = songs.filter((els) =>{
            return els.id == index;
        });

        songTitle.forEach(elss =>{
            let {songName} = elss;
            sub1.innerHTML = songName;
        })
        // makeAllBackgrounds1();
    
        // ";
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        wave.classList.add('active2');
        music.addEventListener('ended',()=>{
            masterPlay.classList.add('bi-play-fill');
            masterPlay.classList.remove('bi-pause-fill');
            wave.classList.remove('active2');
        })
        makeAllBackgrounds();
        
        Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgba(105, 105, 105, 0.301)";

        
    })
    
});

back.addEventListener('click', ()=>{
    index -= 1;
    if (index < 1) {
        index = Array.from(document.getElementsByClassName('songItem')).length;
    }
    
    
    music.src = `/static/music//${index}.mp3`;
    
    poster_img_play.src = `/static/img/${index}.png`;
    music.play();
    

    let songTitle = songs.filter((els) =>{
        return els.id == index;
    })

    songTitle.forEach(elss =>{
        let {songName} = elss;
        sub1.innerHTML = songName;
    })
    
    makeAllPlays();

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgba(105, 105, 105, 0.301)";
    
})

next.addEventListener('click', ()=>{
    index -= 0;
    index += 1;
    if (index > Array.from(document.getElementsByClassName('songItem')).length) {
        index = 1;
        }
    
    music.src = `/static/music//${index}.mp3`;
    
    poster_img_play.src = `/static/img/${index}.png`;
    music.play();
    masterPlay.className = "bi bi-pause-fill";

    let songTitle = songs.filter((els) =>{
        return els.id == index;
    })

    songTitle.forEach(elss =>{
        let {songName} = elss;
        sub1.innerHTML = songName;
    })
    makeAllPlays();

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgba(105, 105, 105, 0.301)";
})

let banner = document.getElementById('blackpink');

banner.addEventListener('click', ()=>{

    index = 15;
    music.src = `/static/music//Pink-Venom.mp3`;
    
    poster_img_play.src = `/static/img/blackp.png`;
    music.play();
    masterPlay.className = "bi bi-pause-fill";

    let songTitle = songs.filter((els) =>{
        return els.id == index;
    })

    songTitle.forEach(elss =>{
        let {songName} = elss;
        sub1.innerHTML = songName;
    })
    makeAllPlays();

    document.getElementById(`${index}`).classList.remove('bi-play-fill');
    document.getElementById(`${index}`).classList.add('bi-pause-fill');
    makeAllBackgrounds();
    Array.from(document.getElementsByClassName('songItem'))[`${index-1}`].style.background = "rgba(105, 105, 105, 0.301)";
})

let currentStart = document.getElementById('currentStart');
let currentEnd = document.getElementById('currentEnd');
let seek = document.getElementById('seek');
let bar2 = document.getElementById('bar2');
let dot = document.getElementsByClassName('dot')[0];


music.addEventListener('timeupdate', ()=>{
    let music_curr = music.currentTime;
    let music_dur = music.duration;
    // console.log(music_dur);

    let min1 = Math.floor(music_dur / 60);
    let sec1 = Math.floor(music_dur % 60);
    
    if(sec1<10){
        sec1 =`0${sec1}`;
    }

    currentEnd.innerText = `${min1}:${sec1}`;

    let min2 = Math.floor(music_curr / 60);
    let sec2 = Math.floor(music_curr % 60);
    
    if(sec2<10){
        sec2 =`0${sec2}`;
    }

    currentStart.innerText = `${min2}:${sec2}`;

    let progressbar = parseInt((music_curr / music_dur)*100);
    seek.value = progressbar;
    console.log(seek.value);

    let seekbar = seek.value;
    bar2.style.width = `${seekbar}%`;
    dot.style.left = `${seekbar}%`

})

seek.addEventListener('change', ()=>{
    music.currentTime = (seek.value * music.duration) /100;
});

music.addEventListener('ended', ()=>{
    masterPlay.classList.add('bi-play-fill');
    masterPlay.classList.remove('bi-pause-fill');
    wave.classList.remove('active2');
})


let vol_icon = document.getElementById('vol_icon');
let vol_dot = document.getElementById('vol_dot');
let vol = document.getElementById('vol');
let vol_bar = document.getElementsByClassName('vol_bar')[0];


vol.addEventListener('change', ()=>{
    if (vol.value == 0) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.add('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 0) {
        vol_icon.classList.add('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.remove('bi-volume-up-fill');
    }
    if (vol.value > 50) {
        vol_icon.classList.remove('bi-volume-down-fill');
        vol_icon.classList.remove('bi-volume-off-fill');
        vol_icon.classList.add('bi-volume-up-fill');
    }

    let vol_a = vol.value;
    vol_bar.style.width = `${vol_a}%`;
    vol_dot.style.left = `${vol_a}%`;
    music.volume = vol_a/100;
})
