import allQuests from '../data.js';
import { getUser } from '../userUtils.js';

const user = getUser();

if (user.hp <= 0) {
    alert('The GrimReaper found you');
    alert('Gold lost: ' + user.gold);
    window.location('../index.html');
}


const section = document.querySelector('section');

let questsCompleted = 0;

for (let i = 0; i < allQuests.length; i++) {
    const quest = allQuests[i];

    //checking to see if the user completed the quest
    if (user.completed[quest.id]) {
        questsCompleted++;
    } 
        
}

if (questsCompleted === allQuests.length) {
    alert('The battle has been won, you took' + user.gold, 'from the enemy');
}

for (let i = 0; i < allQuests.length; i++) {
    const quest = allQuests[i];

    //did user complete quest?
    if (user.completed[quest.id]) {
    
    //if they did then a link will be provided 
        const span = document.createElement('span');
        span.textContent = quest.title;
        span.style.textDecoration = 'strikethrough';
        section.append(span);
    } else {
        const link = document.createElement('a');
        link.textContent = quest.title;
        link.href = '/quests/?id=' + quest.id;
    
        section.append(link);
    }
}