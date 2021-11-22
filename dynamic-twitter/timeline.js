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

var users = [user1,user2,user3];

var storedTweets = []

//combining all user objects into an array for sorting by date
for (var user of users) {
    for (var tweet of user.tweets){
        var index = users.indexOf(user)+1
        storedTweets.push({index, tweet, userName: user.userName, displayName: user.displayName, avatarURL: user.avatarURL});
    }
}

//sort tweets from most newest to oldest
storedTweets.sort(function(a,b){
    return new Date(b.tweet.timestamp) - new Date(a.tweet.timestamp);
  })


var timeline = document.querySelector('.timeline')
timeline.innerHTML = `
        <div class=nav-bar>
        
        </div>
        <div class=timeline-container>
            <div class=timeline-header>
                <a><h3>Dynamic Twitter Timeline</h3></a>
                <p>Click on a user to see their profile.<p>
            </div>
        </div>
    `
var timelineContainer = document.querySelector('.timeline-container');
for (var tweet of storedTweets) {
        var newTweet = document.createElement('div');
        newTweet.classList.add('tweet-container');
        var tweetTime = new Date(tweet.tweet.timestamp)
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        var month = months[tweetTime.getMonth()];
        newTweet.innerHTML = 
            `   
                <div class='avatar'>
                    <img src='${tweet.avatarURL}'>
                </div>
                <div class='tweet-content'>
                    <div class=tweet-header>
                        <a href ='index.html?user=user${tweet.index}'>
                            <span class='tweet-name'>${tweet.displayName}</span>
                        </a>
                        <span class='tweet-handle'>${tweet.userName}</span>
                        <span class='tweet-date'>• ${month} ${tweetTime.getDate()}</span>
                    </div>
                    <p>${tweet.tweet.text}</p>
                </div>
            `
        timelineContainer.appendChild(newTweet);
    }


