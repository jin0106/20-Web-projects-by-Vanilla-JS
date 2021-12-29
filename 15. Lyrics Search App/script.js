const apiUrl = 'https://api.lyrics.ovh',
form = document.querySelector('#form'),
search = document.querySelector('#search'),
result = document.querySelector('#result'),
more = document.querySelector('#more');


// Search by song or artist
async function searchSongs(term) {
  const res = await fetch(`${apiUrl}/suggest/${term}`);
  const data = await res.json();
  
  showData(data);
}

function showData(data){

  result.innerHTML = 
    `
    <ul class='songs'>
      ${data.data.map(song => 
      `<li>
        <span><strong>${song.artist.name}</strong> - ${song.title}</span>
        <button class='btn' data-artist="${song.artist.name}" data-songtitle="${song.title}"
        >Get Lyrics</button>
      </li>`).join('')}
    </ul>
    `;


    if(data.prev || data.next){
      more.innerHTML = `
        ${
          data.prev ? `<button class='btn' onclick="getMoreSongs('${data.prev}')">Prev</button>` : ''}
        ${data.next ? `<button class='btn' onclick="getMoreSongs('${data.next}')">Next</button>` : ''}
      `;
    } else {
      more.innerHTML = '';
    }
}

async function getMoreSongs(url) {
  const res = await fetch(`https://cors-anywhere.herokuapp.com/${url}`);
  const data = await res.json();

  showData(data);
};



// Event Listeners

form.addEventListener('submit', e => {
  e.preventDefault();

  const searchTerm = search.value.trim();

  if (!searchTerm) {
    alert('Plz type in a search term')
  } else {
    searchSongs(searchTerm);
  }
  
})

// Get lyrics for song
async function getLyrics(artist,songtitle) {
  const res = await fetch(`${apiUrl}/v1/${artist}/${songtitle}`);
  const data = await res.json();

  // 정규표현식을 사용해 <br>로 변경
  const lyrics = data.lyrics.replace(/(\r\n|\r|\n)/g,'<br>')
  result.innerHTML = `<h2><strong>${artist}</strong> - ${songtitle}</h2><span>${lyrics}</span>`
  more.innerHTML='';
}

// Get lyrics button click

result.addEventListener('click', e=> {
  const clickedEl = e.target;

  if (clickedEl.tagName === 'BUTTON') {
    const artist = clickedEl.getAttribute('data-artist')
    const song = clickedEl.getAttribute('data-songtitle')
    
    
    getLyrics(artist,song)
  }
})