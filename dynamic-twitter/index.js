var user1 = {
    userName: '@elonmusk',
    displayName: 'Elon Musk',
    joinedDate: 'June 2009',
    followingCount: 103,
    followerCount: 47900000,
    avatarURL: 'assets/elonmusk.jpg',
    coverPhotoURL: 'assets/elonmusk-cover.jpeg',
    tweets: [
        {
            text: 'I admit to judging books by their cover',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Starship to the moon',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'Out on launch pad, engine swap underway',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user2 = {
    userName: '@BillGates',
    displayName: 'Bill Gates',
    joinedDate: 'June 2009',
    followingCount: 274,
    followerCount: 53800000,
    avatarURL: 'assets/billgates.jpg',
    coverPhotoURL: 'assets/billgates-cover.jpeg',
    tweets: [
        {
            text: 'Everybody asks, how is the next Windows coming along? But nobody asks how is Bill? :/',
            timestamp: '2/10/2021 00:01:20'
        },
        {
            text: 'Should I start tweeting memes? Let me know in a comment.',
            timestamp: '2/09/2021 18:37:12'
        },
        {
            text: 'In 2020, I read a book every hour.',
            timestamp: '2/09/2021 12:11:51'
        }
    ]
};

var user3 = {
    userName: '@JoeyEidson',
    displayName: 'Joey Eidson',
    joinedDate: 'September 2015',
    followingCount: 53,
    followerCount: 20000000,
    avatarURL: 'assets/joeyeidson.jpg',
    coverPhotoURL: 'assets/joeyeidson-cover.jpg',
    tweets: [
        {
            text: 'This is a dynamic twitter timeline.',
            timestamp: '2/10/2021 00:02:20'
        },
        {
            text: 'Each profile is updated from the mock API.',
            timestamp: '2/09/2021 18:38:12'
        },
        {
            text: 'Front-end development is fun.',
            timestamp: '2/09/2021 12:12:51'
        }
    ]
};

//Read query string from the URL
function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var user = getParameterByName('user');

var users = {user1, user2, user3}

var activeUser = users[user]

var header = document.querySelector(".header-container")
header.innerHTML = `
    <div class='back-btn'>
       <a href='timeline.html'> ⬅ </a>
    </div>
    <div class='display-name'>
        <a><h3>${activeUser.displayName}</h3></a>
    </div>
    `;

var photo = document.querySelector(".photo-container")
photo.innerHTML = `
    <div class='hero-image' style='background-image:url(${activeUser.coverPhotoURL})'>    
    </div>
`

var details = document.querySelector(".details-container")

details.innerHTML = `
    <div class='details-header'>
        <a>
            <img src='${activeUser.avatarURL}'>
        </a>
        <button class='follow-btn'>Follow</button>       
    </div>
    <div class='username'>
        <a>
            <span>${activeUser.displayName}</span>
        </a>
    </div>
    <div class='twitter-handle'>
        <span>${activeUser.userName}</span>
    </div>
    <div class='joined-date'>
        <span>Joined ${activeUser.joinedDate}</span>
    </div>
    <div class='follow-counts'>
        <span id='followingCount'><strong style='color: black'>${activeUser.followingCount}</strong> Following</span>
        <span id='followerCount'><strong style='color: black'>${Number(activeUser.followerCount.toString().slice(0,3))/10}M</strong> Followers</span>
    </div>
`
var tweets = document.querySelector(".tweets-container")

for (var tweet of activeUser.tweets){
    var newTweet = document.createElement('div');
    newTweet.classList.add('tweet-container');
    var tweetTime = new Date(tweet.timestamp)
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    var month = months[tweetTime.getMonth()];
    newTweet.innerHTML = `
            <div class='avatar'>
                <img src='${activeUser.avatarURL}'>
            </div>
            <div class='tweet-content'>
                <div class=tweet-header>
                    <a>
                        <span class="tweet-name">${activeUser.displayName}</span>
                    </a>
                    <span class="tweet-handle">${activeUser.userName}</span>
                    <span class="tweet-date">• ${month} ${tweetTime.getDate()}</span>
                    
                </div>
                <p>${tweet.text}</p>
            </div>
        `
    tweets.appendChild(newTweet);
}




