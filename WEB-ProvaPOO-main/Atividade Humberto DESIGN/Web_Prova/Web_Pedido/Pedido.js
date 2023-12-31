async function listPedidos() {
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

        result.forEach(pedido => {
            var linha = document.createElement('tr');

            var id = document.createElement('td');
            id.innerHTML = `<a href="javascript:detailPedido('${pedido.id}');">${pedido.id}</a>`;
            linha.appendChild(id);

            var nmPedido = document.createElement('td');
            nmPedido.innerHTML = pedido.nmPedido;
            linha.appendChild(nmPedido);

            var totalPedido = document.createElement('td');
            totalPedido.innerHTML = pedido.totalPedido;
            linha.appendChild(totalPedido);

            var acoes = document.createElement('td');
            acoes.innerHTML = `<button class = "botao" onClick="deletePedido('${pedido.id}');">&#10003</button>`;

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

async function createPedido() {
    var pedido = {

        "id": uuidv4(),
        "nmPedido": document.getElementById('detail-nmPedido').value,
        "totalPedido": document.getElementById('detail-totalPedido').value

    }

    try {
        const response = await fetch('http://localhost:8080/menu', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pedido)
        });
        listPedidos();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function deletePedido(id) {
    try {
        const response = await fetch(`http://localhost:8080/menu/${pedido.id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });
        listPedidos();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function detailPedido(id) {
    try {
        const result = await fetch(`http://localhost:8080/menu/${pedido.id}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        var pedido = await result.json();
        document.getElementById('detail-id').value = pedido.id;
        document.getElementById('detail-nmPedido').value = pedido.nmPedido;
        document.getElementById('detail-totalPedido').value = pedido.totalPedido;
    } catch (error) {
        console.error("Error:", error);
    }
}

async function filterPedidos() {

    lista.innerHTML = '';

    var filtro = document.getElementById('filter').value;

    try {
        const response = await fetch(`http://localhost:8080/pedido?nmPedido=${filtro}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const result = await response.json();

        for (let index = 0; index < result.length; index++) {

            if (result[index].prato == filtro) {


                menu = result[index];

                var linha = document.createElement('tr');

                var id = document.createElement('td');
                id.innerHTML = `<a href="javascript:detailPrato('${pedido.id}');">${pedido.id}</a>`; result[index].id;
                linha.appendChild(id);

                var nmPedido = document.createElement('td');
                nmPedido.innerHTML = result[index].nmPedido;
                linha.appendChild(nmPedido);

                var totalPedido = document.createElement('td');
                totalPedido.innerHTML = result[index].totalPedido;
                linha.appendChild(totalPedido);

                var acoes = document.createElement('td');
                acoes.innerHTML = `<button class = "botao" onClick="deletePedido('${pedido.id}');">&#10003</button>`;

                linha.appendChild(acoes);

                lista.appendChild(linha);

            }

        }


    } catch (error) {
        console.error("Error:", error);
    }
}


async function cleanPedido() {

    document.getElementById('detail-id').value = '';
    document.getElementById('detail-nmPedido').value = '';
    document.getElementById('detail-totalPedido').value = '';

}

async function atualizarPedido(id) {

    var menu = {

        "id": document.getElementById('detail-id').value,
        "nmPedido": document.getElementById('detail-nmPedido').value,
        "totalPedido": document.getElementById('detail-totalPedido').value

    }

    try {
        const response = await fetch(`http://localhost:8080/menu/${pedido.id}`, {
            method: "PUT",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(pedido)
        });
        listPedidos();
    } catch (error) {
        console.error("Error:", error);
    }
}

async function limparPedido() {

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

        result.forEach(pedido => {
            var linha = document.createElement('tr');

            var id = document.createElement('td');
            id.innerHTML = `<a href="javascript:detailPedido('${pedido.id}');">${pedido.id}</a>`;
            linha.appendChild(id);

            var nmPedido = document.createElement('td');
            nmPedido.innerHTML = menu.nmPedido;
            linha.appendChild(nmPedido);

            var totalPedido = document.createElement('td');
            totalPedido.innerHTML = menu.totalPedido;
            linha.appendChild(totalPedido);

            var acoes = document.createElement('td');
            acoes.innerHTML = `<button class = "botao" onClick="deletePedido('${pedido.id}');">&#10003</button>`;

            linha.appendChild(acoes);

            lista.appendChild(linha);
        });
    } catch (error) {
        console.error("Error:", error);
    }

    document.getElementById('detail-id').value = '';
    document.getElementById('detail-nmPedido').value = '';
    document.getElementById('detail-totalPedido').value = '';
    document.getElementById('filter').value = '';


}


