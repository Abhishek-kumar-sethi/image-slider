 
    
    var i=6;
    function work1(){
    var main = document.getElementById('main')
    if(main.hasChildNodes()){
        var nodes = main.children
            if(i==0)
            {
                nodes[i].style.display = 'none'
                i=5
                nodes[i].style.display = 'block'
            }
            else{
                nodes[i].style.display = 'none'
                i--;
                nodes[i].style.display = 'block'
            }
            console.log(nodes[i])
        }   
    }
    var i=0;
    function work2(){
    var main = document.getElementById('main')
    if(main.hasChildNodes()){
        var nodes = main.children
            if(i==5)
            {
                nodes[i].style.display = 'none'
                i=0;
                nodes[i].style.display = 'block'
            }
            else
            {
                nodes[i].style.display = 'none'
                i++;
                nodes[i].style.display = 'block'
            }
            console.log(nodes[i])
        }
    }       
 