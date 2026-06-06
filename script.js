document.getElementById('csvFile').addEventListener('change', function(event) {

    const file = event.target.files[0];

    const reader = new FileReader();

    reader.onload = function(e) {

        const text = e.target.result;
        const rows = text.trim().split('\n');

        let totalSales = 0;
        let totalRevenue = 0;

        const tbody = document.querySelector('#dataTable tbody');
        tbody.innerHTML = '';

        for(let i = 1; i < rows.length; i++) {

            const cols = rows[i].split(',');

            const date = cols[0];
            const product = cols[1];
            const sales = Number(cols[2]);
            const revenue = Number(cols[3]);

            totalSales += sales;
            totalRevenue += revenue;

            tbody.innerHTML += `
                <tr>
                    <td>${date}</td>
                    <td>${product}</td>
                    <td>${sales}</td>
                    <td>${revenue}</td>
                </tr>
            `;
        }

        document.getElementById('totalSales').innerText = totalSales;
        document.getElementById('totalRevenue').innerText = totalRevenue;
    };

    reader.readAsText(file);
});
