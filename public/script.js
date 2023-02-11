const fetchData = async () => {
    const apiUrl = localStorage.getItem("apiUrl");
    console.log(apiUrl)
    if(apiUrl){
        const response = await fetch(`${apiUrl}/users`);
        console.log(response)
        const data = await response.json();
        console.log(data);
    }else{
        window.location.href = "/api"
    }
    
}
fetchData()