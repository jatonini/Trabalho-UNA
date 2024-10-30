function changeMainImage(src) {
    document.getElementById('foto-perfil-principal').src = src;
}

function addUC() {
    const newUC = prompt("Digite a nova UC:");
    if (newUC) {
        const ucList = document.getElementById("uc-list");
        const li = document.createElement("li");
        li.innerHTML = `${newUC} <button onclick="moveUp(this)">↑</button> <button onclick="moveDown(this)">↓</button>`;
        ucList.appendChild(li);
    }
}

function moveUp(button) {
    const li = button.parentElement;
    const previous = li.previousElementSibling;
    if (previous) {
        li.parentElement.insertBefore(li, previous);
    }
}

function moveDown(button) {
    const li = button.parentElement;
    const next = li.nextElementSibling;
    if (next) {
        li.parentElement.insertBefore(next, li);
    }
}

function validateCPF() {
    const cpf = document.getElementById("cpf").value;
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    if (!cpfRegex.test(cpf) && cpf !== "") {
        alert("CPF inválido! O formato deve ser ddd.ddd.ddd-dd");
        document.getElementById("cpf").focus();
    }
}

function validateEmail() {
    const email = document.getElementById("email").value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailInput = document.getElementById("email");

    
    emailInput.setCustomValidity("");

    if (email && !emailRegex.test(email)) {
        emailInput.setCustomValidity("E-mail inválido! Verifique o formato.");
    }
    
    emailInput.reportValidity();
}

function addDescription() {
    const descricaoInput = document.getElementById("descricao-pessoal");
    const descricao = descricaoInput.value.trim();

    if (descricao) {
        const descricaoLista = document.getElementById("descricao-lista");
        const li = document.createElement("li");
        li.textContent = descricao;
        descricaoLista.appendChild(li);
        
        
        descricaoInput.value = "";
    } else {
        alert("Por favor, digite uma descrição válida.");
    }
}

