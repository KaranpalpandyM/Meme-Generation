const generateMemeBtn =document.querySelector(".Mg .Headings" );
const memeImage = document.querySelector(".Mg img");
const memeTitle= document.querySelector(".Mg .meme");
const memeAuthor=document.querySelector(".Mg .meme author");


const updateDetails = (url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML =title;
    memeAuthor.innerHTML =`Meme by: author`;
};
const generateMeme =() => {
    fetch(" https://meme-api.com/gimme/wholesomememes")
        .then((response) => response.json())
        .then((data)=>{
            updateDetails(data.url,data.title,data.author);
    });
};

generateMemeBtn.addEventListener("click",generateMeme);