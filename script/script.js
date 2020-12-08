/*document.getElementById('btnAccounting').addEventListener('mouseover',function (){
    this.style.backgroundColor="yellow";
});
document.getElementById('btnAccounting').addEventListener('mouseleave',function (){
    this.style.removeProperty("background-color");
});*/
var btns=document.querySelectorAll(".subject button");
var index=0;
var colors=["white","yellow","blue","green"];
var i=0;
btns.forEach(function (btn){
    /*alert(btn.id);*/
    document.styleSheets[0].insertRule('#'+btn.id+':after{\n' +
        '    content: "";\n' +
        '    background:'+colors[i]+';\n' +
        '    display: block;\n' +
        '    position: absolute;\n' +
        '    padding-top: 100%;\n' +
        '    padding-left: 150%;\n' +
        '    margin-left: -20% !important;\n' +
        '    margin-top: -120%;\n' +
        '    opacity: 0;\n' +
        '    transition: all 0.8s;\n' +
        '}',index);
    index++;
    document.styleSheets[0].insertRule('#'+btn.id+':active:after{\n' +
        '    padding: 0;\n' +
        '    margin: 0;\n' +
        '    opacity: 1;\n' +
        '    transition: 0s;\n' +
        '}',index);
    index++;
    i++;
    if(i>3){
        i=0;
    }
});
/*document.getElementById("btnArea").style.display="none";*/
document.getElementById("btnAccounting").addEventListener('click',function (){
    /*window.open('courses.html');*/
    window.location='courses.html';
});
document.getElementById("CourseAccounting").addEventListener('click',function (){
    window.location='courses.html';
})
