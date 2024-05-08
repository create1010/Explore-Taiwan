function rand (){
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const length=6;
    let answer='';
    for(let i =0;i<length;i++){
        const randNum=Math.floor(Math.random()*characters.length)
        answer+=characters[randNum];
    }
    document.querySelector('.math-rand').innerText=answer;
    document.querySelector('.form-list').addEventListener('submit',function(event){
        event.preventDefault();
    })
}
let refresh=document.querySelector('.refresh');
refresh.addEventListener('click',rand);