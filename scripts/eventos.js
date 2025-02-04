window.addEventListener('DOMContentLoaded', () => {
    
    const dishInput = document.getElementById('dishInput');
    const addDishButton = document.getElementById('addDishButton');
    const menuList = document.getElementById('menuList');

    
    function loadMenu() {
    const menu = JSON.parse(localStorage.getItem('menu')) || [];
    menuList.innerHTML = '';
    menu.forEach((dish, index) => renderDish(dish, index));
    }

    
    function saveMenu(menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
    }

    
    function renderDish(dish, index) {
    const li = document.createElement('li');
    li.className = dish.available ? 'available' : 'unavailable';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = dish.available;
    checkbox.addEventListener('change', () => toggleDishAvailability(index));

    const span = document.createElement('span');
    span.textContent = dish.name;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Eliminar';
    deleteButton.addEventListener('click', () => deleteDish(index));

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    menuList.appendChild(li);
    }

    
    function addDish() {
    const dishName = dishInput.value.trim();
    if (dishName === '') {
        alert('Por favor, ingresa un plato.');
        return;
    }

    const menu = JSON.parse(localStorage.getItem('menu')) || [];
    menu.push({ name: dishName, available: true });
    saveMenu(menu);
    renderDish({ name: dishName, available: true }, menu.length - 1);
    dishInput.value = '';
    }

    
    function toggleDishAvailability(index) {
    const menu = JSON.parse(localStorage.getItem('menu')) || [];
    menu[index].available = !menu[index].available;
    saveMenu(menu);
    loadMenu();
    }

    
    function deleteDish(index) {
    const menu = JSON.parse(localStorage.getItem('menu')) || [];
    menu.splice(index, 1);
    saveMenu(menu);
    loadMenu();
    }

    
    addDishButton.addEventListener('click', addDish);
    loadMenu(); 
});
