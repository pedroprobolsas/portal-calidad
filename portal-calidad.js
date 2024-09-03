(function() {
    // Crear el contenido HTML
    var htmlContent = `
    <style>
        .portal-calidad-container {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
            display: flex;
            flex-direction: column;
            align-items: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
        }
        .portal-calidad-container h1 {
            color: #2c3e50;
            text-align: center;
            margin-bottom: 30px;
        }
        .portal-calidad-buttons {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            max-width: 1000px;
            width: 100%;
        }
        .portal-calidad-button {
            background-color: #3498db;
            color: white;
            padding: 15px;
            text-align: center;
            text-decoration: none;
            font-size: 18px;
            border-radius: 8px;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .portal-calidad-button:hover {
            transform: translateY(-5px);
            box-shadow: 0 5px 15px rgba(0,0,0,0.2);
        }
        .portal-calidad-footer {
            margin-top: auto;
            text-align: center;
            padding: 20px;
        }
        .portal-calidad-footer a {
            color: #2c3e50;
            text-decoration: none;
            font-weight: bold;
        }
    </style>
    <div class="portal-calidad-container">
        <h1>Portal Calidad</h1>
        <div class="portal-calidad-buttons">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLScHp8Ssdq9pBmQPwLlHgY5hLpmDH1f8zJ9ueoxj4GeTxO19Bg/viewform" class="portal-calidad-button">No conformidades</a>
            <a href="https://intranet.probolsas.com/documentos/" class="portal-calidad-button">ISO 9001</a>
            <a href="https://intranet.probolsas.com/documentos/" class="portal-calidad-button">Fichas Técnicas</a>
            <a href="http://192.168.0.51:8080/ProduccionApp/index.jsp#" class="portal-calidad-button">Reportes</a>
            <a href="https://intranet.probolsas.com/documentos/" class="portal-calidad-button">Indicadores de Cumplimiento</a>
            <a href="https://intranet.probolsas.com/documentos/" class="portal-calidad-button">Novedades</a>
        </div>
        <footer class="portal-calidad-footer">
            <a href="https://empaques.probolsas.com/">PROBOLSAS</a>
        </footer>
    </div>
    `;

    // Crear un nuevo elemento div
    var divElement = document.createElement('div');
    
    // Establecer el contenido HTML del div
    divElement.innerHTML = htmlContent;
    
    // Añadir el div al body del documento
    document.body.appendChild(divElement);
})();
