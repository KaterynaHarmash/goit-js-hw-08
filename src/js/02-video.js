import Player from '@vimeo/player';
import * as _ from 'lodash.throttle';

const player = new Player('vimeo-player');

const currTime = localStorage.getItem('videoplayer-current-time');

player.setCurrentTime(currTime).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});

player.on('timeupdate', _(function (event) {
    localStorage.setItem('videoplayer-current-time', event.seconds.toFixed());
}, 1000));
