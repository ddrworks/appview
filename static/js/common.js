function sendCmd(cmd,fun){
    var res = window.android.send('high',cmd);
    fun(res);
};

function sendCmd2(flag,cmd,fun){
    var res = window.android.send(flag,cmd);
    fun(res);
};

function templateChange(id,obj){
    return document.getElementById(id).innerHTML.replace(/\{\{([\s\S]+?)\}\}/g,function(a,b){
        if(obj[b] || obj[b] == 0){
            return obj[b];
        }
        return '--';
    });
};


function creatNode(tag,cls){
    var one = document.createElement(tag);
    if(cls){
        one.className=cls;
    }
    return one;
};

function creatExecuteUrl(name,method,args){
    var value = JSON.stringify(creatExecuteData(name,method,args));
    return 'execute?value=' + btoa(value);
};

function createMutiUrl(first,second){
    var value = JSON.stringify([first,second]);
    return 'execute?value=' + btoa(value);
};


function creatExecuteData(name,method,args){
    var data={'name': name,'method': method};
    if(args){
        data.args=args;
    }
    return data;
};

function add0(m){
    return m<10?'0'+m:m 
};

function timeFormat(shijianchuo){
    var time = new Date(shijianchuo);
    var y = time.getFullYear();
    var m = time.getMonth()+1;
    var d = time.getDate();
    var h = time.getHours();
    var mm = time.getMinutes();
    var s = time.getSeconds();
    return y+'-'+add0(m)+'-'+add0(d)+' '+add0(h)+':'+add0(mm)+':'+add0(s);
};

function showDialog(id){
    var aa = bootstrap.Offcanvas.getInstance('#'+id);
    if(aa){
        aa.show();
    }else{
        new bootstrap.Offcanvas('#'+id).show();
    }
    
};


function setNodeHtml(id,message){
    document.getElementById(id).innerHTML=message;
};


function hidderDialog(id){
    bootstrap.Offcanvas.getInstance('#'+id).hide();
};

function hidderAndRun(el,fun){
    var current = el;
    while(current){
        if(current.classList.contains('offcanvas')){
            hidderDialog(current.id);
            break;
        }else{
            current = current.parentNode;
        }
    }
    fun();
};

function addClass(node,str){
    if(!new RegExp("(^|\\s+)"+str).test(node.className)){
        node.className=node.className+" "+str;
    }
};

function removeClass(node,str){
    if(new RegExp("(^|\\s+)"+str).test(node.className)){
        node.className=node.className.replace(new RegExp("(^|\\s+)"+str),"");
    }
};


function cleanNodeHtml(id){
    var node = document.getElementById(id);
    node.innerHTML = '';
};

function getNodeValue(id){
    return document.getElementById(id).value;
};