const music= new Audio('audio/1.mp3')
//music.play();


const songs=[
    {
        id:1,
        song_name:`On My Way <br>
        <div class="subtitle"> Alan Walker </div>`,
        poster:"Images/1.jpg"

    },

    {
        id:2,
        song_name:`You need to calm down <br>
        <div class="subtitle"> Taylor Swift </div>`,
        poster:"Images/2.jpg"

    },

    {
        id:3,
        song_name:`22 <br>
        <div class="subtitle"> Taylor Swift </div>`,
        poster:"Images/3.jpg"

    },

    {
        id:4,
        song_name:`360 <br>
        <div class="subtitle"> Charli XCX </div>`,
        poster:"Images/4.jpg"

    },

    {
        id:5,
        song_name:`brat <br>
        <div class="subtitle"> Charli XCX </div>`,
        poster:"Images/5.jpg"

    },

    {
        id:6,
        song_name:`B2b <br>
        <div class="subtitle"> Charli XCX </div>`,
        poster:"Images/6.jpg"

    },

    {
        id:7,
        song_name:`Juno <br>
        <div class="subtitle"> Sabrina Carpenter </div>`,
        poster:"Images/7.jpg"

    },

    {
        id:8,
        song_name:`Stole the keys <br>
        <div class="subtitle"> Jack Antonoff</div>`,
        poster:"Images/8.jpg"

    },

    {
        id:9,
        song_name:`To the other side <br>
        <div class="subtitle"> Bonnie and Clyde </div>`,
        poster:"Images/9.jpg"

    }
    ,


    {
        id:10,
        song_name:`We are never getting back togetherr <br>
        <div class="subtitle"> Shawn Mendes </div>`,
        poster:"Images/10.jpg"

    }
    ,

    {
        id:11,
        song_name:`Tailor Swif <br>
        <div class="subtitle"> ASAP ROCKY</div>`,
        poster:"Images/11.jpg"

    }
    ,

    {
        id:12,
        song_name:`Let Your Hair Down <br>
        <div class="subtitle"> MAGIC!</div>`,
        poster:"Images/12.jpg"

    }
    ,

    {
        id:13,
        song_name:`Warning <br>
        <div class="subtitle">The wallows</div>`,
        poster:"Images/13.jpg"

    }
    ,

    {
        id:14,
        song_name:`Espresso <br>
        <div class="subtitle"> Sabrina Carpenter </div>`,
        poster:"Images/14.jpg"

    }
    ,

    {
        id:15,
        song_name:`Please, Please, Please... <br>
        <div class="subtitle"> Sabrina Carpenter </div>`,
        poster:"Images/15.jpg"

    }
    ,

    {
        id:16,
        song_name:`Last friday night <br>
        <div class="subtitle"> Katy Perry </div>`,
        poster:"Images/16.jpg"

    }
    ,

    {
        id:17,
        song_name:`Perfect<br>
        <div class="subtitle"> Ed Sheeran </div>`,
        poster:"Images/17.jpg"

    }
    ,

    {
        id:18,
        song_name:`Can i call you tonight <br>
        <div class="subtitle">Dayglow </div>`,
        poster:"Images/18.jpg"

    }
    ,

    {
        id:19,
        song_name:`Tu hai mera <br>
        <div class="subtitle"> Arijit Singh </div>`,
        poster:"Images/19.jpg"

    }
    ,

    {
        id:20,
        song_name:`On My Way <br>
        <div class="subtitle"> Alan Walker </div>`,
        poster:"Images/charlie.jpg"

    }
    ,

    {
        id:21,
        song_name:`On My Way <br>
        <div class="subtitle"> Alan Walker </div>`,
        poster:"Images/havana.jpg"

    }
    ,

    {
        id:22,
        song_name:`On My Way <br>
        <div class="subtitle"> Alan Walker </div>`,
        poster:"Images/hailee.jpg"

    } ,

    {
        id:23,
        song_name:`On My Way <br>
        <div class="subtitle"> Alan Walker </div>`,
        poster:"Images/wallows.jpg"

    }
    ,

    {
        id:24,
        song_name:`On My Way <br>
        <div class="subtitle"> Alan Walker </div>`,
        poster:"Images/senorita.jpg"

    }
]



Array.from(document.getElementsByClassName('song_item')).forEach((e,i)=>{
    e.getElementsByTagName('img')[0].src=songs[i].poster;
    e.getElementsByTagName('h5')[0].innerHTML=songs[i].song_name;
})

let masterPlay=document.getElementById('masterPlay');
let wave=document.getElementById('wave');
masterPlay.addEventListener('click',()=>{
    if(music.paused ||music.currentTime<=0){
        music.play();
        wave.classList.add('active1');
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');

    }else{
        music.pause();
        wave.classList.remove('active1');
        masterPlay.classList.add('bi-play-fill');
        masterPlay.classList.remove('bi-pause-fill');
    }
});

const  makeAllBackground


let index=0;
// index++;
// console.log(index);
let poster_master_play=document.getElementById('poster_play_section');


Array.from(document.getElementsByClassName('playListPlay')).forEach((e)=>{
    e.addEventListener('click',(el)=>{
        // let abc=el.target.id;  //jo element click hua hai uski element ko tag kro
        // console.log(abc);
        index=el.target.id;
        console.log(index);
        music.src=`audio/${index}.mp3`;
        poster_master_play.src=`Images/${index}.jpg`;
        music.play();
        masterPlay.classList.remove('bi-play-fill');
        masterPlay.classList.add('bi-pause-fill');
        let songTitles=songs.filter((els)=>{
            return els.id==index;
        });
        songTitles.forEach(els=>{
            // let {song_name}=els;
            // title.innerHTML= song_name;
            //OR
            let {song_name,poster}=els;
            title.innerHTML= song_name;
            poseter_play_section.src=poster;
        })
    })
})









let pop_song_left=document.getElementById('pop_song_left');
let pop_song_right=document.getElementById('pop_song_right');
let pop_song=document.getElementsByClassName('pop_songs')[0];

pop_song_right.addEventListener('click',()=>{
    pop_song.scrollLeft +=330;
    console.log('Right button clicked');
});
pop_song_left.addEventListener('click',()=>{
    pop_song.scrollLeft -=330;
    console.log('left button clicked');
});

let pop_art_left=document.getElementById('pop_art_left');
let pop_art_right=document.getElementById('pop_art_right');
let artists_icons=document.getElementsByClassName('artists_icons')[0];

pop_art_right.addEventListener('click',()=>{
    artists_icons.scrollLeft +=330;
    console.log('Right button clicked');
});
pop_art_left.addEventListener('click',()=>{
    artists_icons.scrollLeft -=330;
    console.log('left button clicked');
});