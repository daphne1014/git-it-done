let getRepoIssues = function(repo) {
    let apiUrl = "https://api.github.com/repos/" + repo + "/issues?direction=asc";
    console.log(repo);
    fetch(apiUrl).then(function(response){
        if (response.ok){
            response.json().then(function(data)
            {console.log(data);
            });
        }
        else{alert("There was a problem with your resuests!");
    }
    })};


getRepoIssues("facebook/react");