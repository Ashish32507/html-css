let url = "https://api.github.com/users/";
let mainElement = document.querySelector('.main');
let search = document.querySelector('#search');
let searchBtn = document.querySelector('#searchBtn');

searchBtn.addEventListener('click',()=>{
    getUSer(search.value);
    mainElement.innerHTML ='';
})



    const getUSer = async(userName)=>{
        const response = await fetch(url+userName);
        const data = await response.json();
        console.log(data);
        // console.log(data.message);
        if(data.message!='Not Found')
        {
            let newElement = document.createElement('div');
              newElement.innerHTML = 
              `
                  <div class="cards">
                    <div>
                        <img src=${data.avatar_url} alt="" id="avtar">
                    </div>
                    <div class="user-info">
                        <h1>${data.name}</h1>
                        <p>${data.bio}</p>
                        <div class="info">
                            <ul>
                                <li><strong>${data.followers}</strong><strong> Follower</strong></li>
                                <li><strong>${data.following}</strong><strong> Following</strong></li>
                                <li><strong>${data.public_repos}</strong><strong> Repo</strong></li>
                            </ul>
                        </div>
                        <div id="repo">
                        </div>
                    </div>    
                </div>
              `
              mainElement.append(newElement);
              getRepo(userName);
              search.value="";
        } 
        else if(search.value==""){
            alert("Please Enter The User Name");
            search.value="";
        } 
        else
        {
            alert("Please Enter The Correct User Name");
            search.value="";
        }    
        }
    
        
    
    
    
    const getRepo = async(userName)=>{
        let repo = document.querySelector('#repo');
        const repoList = await fetch(url+userName+"/repos");
        const repoData = await repoList.json();
        console.log(repoData)
        repoData.forEach((element) => {
            console.log(element);
            let repoItem = document.createElement('a');
            repoItem.classList.add("repo");
            repoItem.href = element.url;
            repoItem.innerText = element.name;
            repoItem.target ="_balank";
            repo.appendChild(repoItem);
        });
    }

    


