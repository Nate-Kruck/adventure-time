import { getUser, setUser } from '../userUtils.js';
// These functions render questions to quest page

export function renderSection(quest) {
    const section = document.createElement('section');
    const div = document.createElement('div');
    div.textContent = quest.title;

    const img = document.createElement('img');
    img.src = '/assets/prepare4battle.jpg';
    

    const form = document.createElement('form');
    const description = document.createElement('div');
    description.textContent = quest.description;
    form.append(description);

    for (let i = 0; i < quest.choices.length; i++) {
        const label = document.createElement('label');
        const divLabel = document.createElement('div');
        const choice = quest.choices[i];

        divLabel.textContent = choice.description;
        const input = document.createElement('input');

        input.type = 'radio';
        input.value = choice.id;
        input.name = 'choices';

        label.append(divLabel, input);
        form.append(label);

    }

    const button = document.createElement('button');

    button.textContent = 'Submit';

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const choiceId = formData.get('choices');

        const results = findById(quest.choices, choiceId);

        const user = getUser();

        user.gold += results.gold;
        user.hp = results.hp;
        user.completed[quest.id] = true;

        setUser(user);

        const resultPage = document.querySelector('#results');
        resultPage.textContent = results.result;

        
        const nextButton = document.querySelector('#next');
        nextButton.classList.remove('hidden');

    });


    form.append(button);
    section.append(div, img, form);

    return section;
}

export function findById(array, id) {
    return array.find(i => i.id === id);
}