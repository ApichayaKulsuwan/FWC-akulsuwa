const ft_list = document.getElementById('ft_list');
const newBtn = document.getElementById('new-btn');

function saveToCookie() {
    const todos = [];
    const children = ft_list.children;
    for (let i = 0; i < children.length; i++) {
        todos.push(children[i].textContent);
    }

    const jsonString = JSON.stringify(todos);
    const encodedData = encodeURIComponent(jsonString);
    
    document.cookie = `todoList=${encodedData}; path=/; max-age=86400`;
}

function loadFromCookie() {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();

        if (cookie.startsWith('todoList=')) {
            const encodedData = cookie.substring('todoList='.length);
            try {
                const jsonString = decodeURIComponent(encodedData);
                const todos = JSON.parse(jsonString);
                
                if (Array.isArray(todos)) {
                    todos.reverse().forEach(text => {
                        createTodoElement(text, false); 
                    });
                }
            } catch (e) {
                console.error("Error loading cookies", e);
            }
            break;
        }
    }
}


function createTodoElement(text, saveAfterCreate = true) {
    if (!text || text.trim() === '') return;

    const div = document.createElement('div');
    div.textContent = text;

    div.addEventListener('click', function() {
        if (confirm('Do you want to remove this TO DO?')) {
            div.remove();
            saveToCookie();
        }
    });

    ft_list.prepend(div);

    if (saveAfterCreate) {
        saveToCookie();
    }
}

newBtn.addEventListener('click', function() {
    const text = prompt('Enter a new TO DO:'); 

    if (text !== null) { 
        createTodoElement(text);
    }
});


loadFromCookie();