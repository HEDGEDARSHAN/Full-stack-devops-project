document.getElementById('fetchBtn').addEventListener('click', async () => {
    const responseDiv = document.getElementById('response');
    responseDiv.innerHTML = "Fetching...";

    try {
        
        const response = await fetch('/api/status');
        const data = await response.json();

        responseDiv.innerHTML = `
            <p><strong>App:</strong> ${data.app_name}</p>
            <p><strong>Env:</strong> ${data.environment}</p>
            <p><strong>Time:</strong> ${data.timestamp}</p>
            <p><strong>DB:</strong> ${data.database_status}</p>
        `;
    } catch (error) {
        responseDiv.innerHTML = `<p style="color:red">Error connecting to backend!</p>`;
        console.error("Fetch error:", error);
    }
});
