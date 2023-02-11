const fetchData = async () => {
    const apiUrl = localStorage.getItem("ApiUrl");
    console.log(ApiUrl)
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
