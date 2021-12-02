
//select .tab class, and loop through
var tabs = document.getElementsByClassName('tab');
for (var tab of tabs) {
    tab.addEventListener('click', function(e) {
        setNewActive(e.currentTarget)
    })
}

//function to remove show-active class & add to clicked
function setNewActive(el) {
    //select all .content-body
    var searchBars = document.getElementsByClassName('search-bar')

    //remove .show-active
    for (searchBar of searchBars) {
        searchBar.classList.remove('show-active');
    }

    //add .show-active (back) to clicked
    document.getElementById(el.textContent.trim()).classList.add('show-active');

    var tabs = document.getElementsByClassName('tab');
    for (var tab of tabs) {
        tab.classList.remove('tab-active');
    }
    el.classList.add('tab-active');

    //if click on videos tab then load popular videos
    if (el.textContent.trim()===`Videos`) {
                
        //default videos for col1
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(xhttp.responseText);
                
                var videoData = res.videos.map(function(item){
                    return(item);
                });
                
                var container = document.querySelector('#col1');
                container.innerHTML = '';

                videoData.forEach(function(video) {
                    var videoDiv = document.createElement('div');
                    videoDiv.classList.add('video-div')
                    videoDiv.innerHTML = `
                        <video controls>
                            <source src=${video.video_files[0].link} type='video/mp4'>
                        </video>
                        <h4>${video.user.name}</h4>
                    `;

                    container.appendChild(videoDiv);
                })
            };
        };

        xhttp.open("GET", `https://api.pexels.com/videos/popular?page=1&per_page15`, true);
        xhttp.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
        xhttp.send();

        //default videos for col2
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(xhttp.responseText);
                console.log(res.total_results);
                var videoData = res.videos.map(function(item){
                    return(item);
                });
                
                var container = document.querySelector('#col2');
                container.innerHTML = '';

                videoData.forEach(function(video) {
                //     console.log(video);
                    var videoDiv = document.createElement('div');
                    videoDiv.classList.add('video-div')
                    videoDiv.innerHTML = `
                        <video controls>
                            <source src=${video.video_files[0].link} type='video/mp4'>
                        </video>
                        <h4>${video.user.name}</h4>
                    `;
                    container.appendChild(videoDiv);
                })
            };
        };

        
        xhttp.open("GET", `https://api.pexels.com/videos/popular?page=2&per_page=15`, true);
        xhttp.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
        xhttp.send();
        
    }

    if (el.textContent.trim()===`Home` || el.textContent.trim()===`Discover` ) {

        //default load curated photos on home tab col1
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(xhttp.responseText);
                
                var photoData = res.photos.map(function(item){
                    return(item);
                });
                
                var container = document.querySelector('#col1');
                container.innerHTML = '';

                photoData.forEach(function(photo) {
                    var photoDiv = document.createElement('div');
                    photoDiv.classList.add('photo-div')
                    photoDiv.innerHTML = `
                    <a href=${photo.url}><img src=${photo.src.large2x}></a>
                        <h4>${photo.photographer}</h4>
                    `;
                    container.appendChild(photoDiv);
                })

            };
        };

        
        xhttp.open("GET", `https://api.pexels.com/v1/curated`, true);
        xhttp.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
        xhttp.send();

        //default load curated photos on home tab col2
        var xhttp2 = new XMLHttpRequest();
        xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var res = JSON.parse(xhttp2.responseText);
                
                var photoData = res.photos.map(function(item){
                    return(item);
                });
                
                var container = document.querySelector('#col2');
                container.innerHTML = '';

                photoData.forEach(function(photo) {
                    var photoDiv = document.createElement('div');
                    photoDiv.classList.add('photo-div')
                    photoDiv.innerHTML = `
                    <a href=${photo.url}><img src=${photo.src.large2x}></a>
                        <h4>${photo.photographer}</h4>
                    `;
                    container.appendChild(photoDiv);
                })
            };
        };
        xhttp2.open("GET", `https://api.pexels.com/v1/curated/?page=2`, true);
        xhttp2.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
        xhttp2.send();
    }
}
    

//default load curated photos on home tab col1
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            
            var photoData = res.photos.map(function(item){
                return(item);
            });
            
            var container = document.querySelector('#col1');
            container.innerHTML = '';

            photoData.forEach(function(photo) {
                var photoDiv = document.createElement('div');
                photoDiv.classList.add('photo-div')
                photoDiv.innerHTML = `
                <a href=${photo.url}><img src=${photo.src.large2x}></a>
                    <h4>${photo.photographer}</h4>
                `;
                container.appendChild(photoDiv);
            })
        };
    };

    
    xhttp.open("GET", `https://api.pexels.com/v1/curated`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
    xhttp.send();

//default load curated photos on home tab col2
var xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var res = JSON.parse(xhttp2.responseText);
        
        var photoData = res.photos.map(function(item){
            return(item);
        });
        
        var container = document.querySelector('#col2');
        container.innerHTML = '';

        photoData.forEach(function(photo) {
            var photoDiv = document.createElement('div');
            photoDiv.classList.add('photo-div')
            photoDiv.innerHTML = `
            <a href=${photo.url}><img src=${photo.src.large2x}></a>
                <h4>${photo.photographer}</h4>
            `;
            container.appendChild(photoDiv);
        })

    };
};

xhttp2.open("GET", `https://api.pexels.com/v1/curated/?page=2`, true);
xhttp2.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
xhttp2.send();

//search form for videos col1
var searchFormVideo = document.querySelector('#search-form-videos');
searchFormVideo.addEventListener('submit', function(e) {
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            
            var videoData = res.videos.map(function(item){
                return(item);
            });
            
            var container = document.querySelector('#col1');
            container.innerHTML = '';

            videoData.forEach(function(video) {
                var videoDiv = document.createElement('div');
                videoDiv.classList.add('video-div')
                videoDiv.innerHTML = `
                    <video controls>
                        <source src=${video.video_files[0].link} type='video/mp4'>
                    </video>
                    <h4>${video.user.name}</h4>
                `;
                container.appendChild(videoDiv);
            })
        };
    };

    var textValue = document.querySelector('#search-bar-videos').value
    xhttp.open("GET", `https://api.pexels.com/videos/search?query=${textValue}`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
    xhttp.send();
})

//search form for videos col2
var searchFormVideo = document.querySelector('#search-form-videos');
searchFormVideo.addEventListener('submit', function(e) {
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            
            var videoData = res.videos.map(function(item){
                return(item);
            });
            
            var container = document.querySelector('#col2');
            container.innerHTML = '';

            videoData.forEach(function(video) {
                var videoDiv = document.createElement('div');
                videoDiv.classList.add('video-div')
                videoDiv.innerHTML = `
                    <video controls>
                        <source src=${video.video_files[0].link} type='video/mp4'>
                    </video>
                    <h4>${video.user.name}</h4>
                `;
                container.appendChild(videoDiv);
            })
        };
    };

    var textValue = document.querySelector('#search-bar-videos').value
    xhttp.open("GET", `https://api.pexels.com/videos/search?query=${textValue}?next_page`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
    xhttp.send();
})

//search form for photos col1
var searchFormPhoto = document.querySelector('#search-form-photos');
searchFormPhoto.addEventListener('submit', function(e) {
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            
            var photoData = res.photos.map(function(item){
                return(item);
            });
            
            var container = document.querySelector('#col1');
            container.innerHTML = '';

            photoData.forEach(function(photo) {
                var photoDiv = document.createElement('div');
                photoDiv.classList.add('photo-div')
                photoDiv.innerHTML = `
                    <a href=${photo.url}><img src=${photo.src.large2x}></a>
                    <h4>${photo.photographer}</h4>
                `;
                container.appendChild(photoDiv);
            })

        };
    };

    var textValue = document.querySelector('#search-bar-photos').value
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
    xhttp.send();

})

//search form for photos col2
var searchFormPhoto = document.querySelector('#search-form-photos');
searchFormPhoto.addEventListener('submit', function(e) {
    e.preventDefault();

    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var res = JSON.parse(xhttp.responseText);
            var photoData = res.photos.map(function(item){
                return(item);
            });
            var container = document.querySelector('#col2');
            container.innerHTML = '';

            photoData.forEach(function(photo) {
                var photoDiv = document.createElement('div');
                photoDiv.classList.add('photo-div')
                photoDiv.innerHTML = `
                    <a href=${photo.url}><img src=${photo.src.large2x}></a>
                    <h4>${photo.photographer}</h4>
                `;
                container.appendChild(photoDiv);
            })
        };
    };

    var textValue = document.querySelector('#search-bar-photos').value
    xhttp.open("GET", `https://api.pexels.com/v1/search?query=${textValue}?next_page`, true);
    xhttp.setRequestHeader('Authorization', '563492ad6f917000010000010ec8e0b6c37744978d9317a351603193');
    xhttp.send();

})

