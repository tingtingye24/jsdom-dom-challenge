document.addEventListener("DOMContentLoaded", () => {
    let likeUl = document.createElement('ul');
    likeUl.id = 'likes';
    document.getElementById('heart').insertAdjacentElement('afterend',likeUl);
    let current = setInterval(function(){document.getElementById("counter").innerText++},1000);
    document.addEventListener("click", function(event) {
        event.preventDefault();
        console.log(event.target);
        if (event.target.id === "plus"){
            document.getElementById("counter").innerText++;
        } else if(event.target.id=== "minus"){
            document.getElementById("counter").innerText--;
        }else if(event.target.id === "pause"){
            document.getElementById("pause").innerText = 'resume';
            document.getElementById("pause").id = 'resume';
            clearInterval(current);
        }else if(event.target.id === "resume"){
            document.getElementById("resume").innerText = 'pause';
            document.getElementById("resume").id = 'pause';
            current = setInterval(function(){document.getElementById("counter").innerText++},1000);
        }else if(event.target.id === "heart"){
            let li = document.createElement('li')
            li.innerText = `${document.getElementById('counter').innerText} was liked`
            event.target.nextSibling.append(li);
        }else if(event.target.id === 'submit' ){
            let li = document.createElement('li');
            li.innerText = `${document.getElementById('comment-input').value}`;
            document.getElementById('list').append(li);
            document.getElementById('comment-input').value = '';
        }
    });

});
