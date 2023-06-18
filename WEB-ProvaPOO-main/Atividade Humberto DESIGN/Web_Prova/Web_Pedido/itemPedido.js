

async function listItemPedido() {
    try {
        const response = await fetch(`http://localhost:8080/menu`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        var lista = document.getElementById('lista');
        lista.innerHTML = '';

        result.forEach(item => {
            var linha = document.createElement('tr');

            var id = document.createElement('td');
            id.innerHTML = `<a href="javascript:detailPrato('${menu.id}');">${item.id}</a>`;
            linha.appendChild(id);

            var prato = document.createElement('td');
            prato.innerHTML = item.prato;
            linha.appendChild(prato);

            var preco = document.createElement('td');
            preco.innerHTML = item.preco;
            linha.appendChild(preco);

            var acoes = document.createElement('td');
            acoes.innerHTML = `<button class = "botao" onClick="deletePrato('${item.id}');">&#10003</button>`;

            linha.appendChild(acoes);

            lista.appendChild(linha);
        });
    } catch (error) {
        console.error("Error:", error);
    }
}

const uuidv4 = () => {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    );
}

async function createItemPedido() {
    var item = {

        "id": uuidv4(),
        "prato": document.getElementById('detail-prato').value,
        "preco": document.getElementById('detail-preco').value

    }

    try {
        const response = await fetch('http://localhost:8080/menu', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        listItemPedido();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function deleteItemPedido(id) {
    try {
        const response = await fetch(`http://localhost:8080/menu/${item.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        listItemPedido();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function detailItemPedido(id) {
    try {
        const result = await fetch(`http://localhost:8080/menu/${item.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        var item = await result.json();
        document.getElementById('detail-id').value = item.id;
        document.getElementById('detail-prato').value = item.prato;
        document.getElementById('detail-preco').value = item.preco;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function filterItemPedido() {

    lista.innerHTML = '';

    var filtro = document.getElementById('filter').value;

    try {
        const response = await fetch(`http://localhost:8080/menu?prato=${filtro}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await response.json();

        for (let index = 0; index < result.length; index++) {

            if (result[index].prato == filtro) {


                item = result[index];

                var linha = document.createElement('tr');

                var id = document.createElement('td');
                id.innerHTML = `<a href="javascript:detailPrato('${item.id}');">${item.id}</a>`; result[index].id;
                linha.appendChild(id);

                var prato = document.createElement('td');
                prato.innerHTML = result[index].prato;
                linha.appendChild(prato);

                var preco = document.createElement('td');
                preco.innerHTML = result[index].preco;
                linha.appendChild(preco);

                var acoes = document.createElement('td');
                acoes.innerHTML = `<button class = "botao" onClick="deletePrato('${item.id}');">&#10003</button>`;

                linha.appendChild(acoes);

                lista.appendChild(linha);

            }

        }


    } catch (error) {
        console.error("Error:", error);
    }
}


async function cleanItemPedido() {

    document.getElementById('detail-id').value = '';
    document.getElementById('detail-prato').value = '';
    document.getElementById('detail-preco').value = '';

}

async function atualizarItemPedido(id) {

    var item = {

        "id": document.getElementById('detail-id').value,
        "prato": document.getElementById('detail-prato').value,
        "preco": document.getElementById('detail-preco').value

    }

    try {
        const response = await fetch(`http://localhost:8080/menu/${item.id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        });
        listItemPedido();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function limparItemPedido() {

    try {
        const response = await fetch(`http://localhost:8080/menu`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const result = await response.json();
        var lista = document.getElementById('lista');
        lista.innerHTML = '';

        result.forEach(item => {
            var linha = document.createElement('tr');

            var id = document.createElement('td');
            id.innerHTML = `<a href="javascript:detailPrato('${item.id}');">${item.id}</a>`;
            linha.appendChild(id);

            var prato = document.createElement('td');
            prato.innerHTML = item.prato;
            linha.appendChild(prato);

            var preco = document.createElement('td');
            preco.innerHTML = item.preco;
            linha.appendChild(preco);

            var acoes = document.createElement('td');
            acoes.innerHTML = `<button class = "botao" onClick="deletePrato('${item.id}');">&#10003</button>`;

            linha.appendChild(acoes);

            lista.appendChild(linha);
        });
    } catch (error) {
        console.error("Error:", error);
    }

    document.getElementById('detail-id').value = '';
    document.getElementById('detail-prato').value = '';
    document.getElementById('detail-preco').value = '';
    document.getElementById('filter').value = '';


}


