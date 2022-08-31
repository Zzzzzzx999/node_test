
        var eye = document.getElementById('eye');
        var pwd = document.getElementById('pwd');
        // 第二个案例
        var box1 = document.querySelector('.box1');
        var btn = document.querySelector('.close-button');
        var flag = 0;

        eye.onclick = function(){
            if(flag == 0){
                pwd.type = 'text' ;
                eye.src = 'picture/睁眼.png'
                flag = 1;
            }else{
                pwd.type = 'password' ;
                eye.src = 'picture/闭眼.png';
                flag = 0;
            }
        }
        btn.onclick = function(){
            box1.style.display = 'none';
        }
    