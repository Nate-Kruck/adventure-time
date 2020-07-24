import { getUser } from '../userUtils.js';

function loadProfile() {
    const name = document.getElementById('user-name');
    const avatar = document.getElementById('avatar');
    const health = document.getElementById('hp');
    const gold = document.getElementById('gold');

    // get user data from local storage
    const user = getUser();

    if (!user) {
        window.location = './';
    }

    name.textContent = user.name;
    avatar.src = '../assets/' + user.class + '.jpg';
    gold.textContent = user.gold;

    health.textContent = user.hp;


}

export default loadProfile;