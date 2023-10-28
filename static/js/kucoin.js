function createOneRow(id,obj){
    var one = creatNode('a','d-flex py-1');
    one.setAttribute('href','#');
    one.setAttribute('data-bs-toggle','offcanvas');
    one.setAttribute('data-bs-target','#menu-activity-1');
    one.innerHTML= templateChange('onerow',obj);
    one.onclick = function(){
        document.getElementById('menu-activity-1-id').innerHTML = obj.id;
        document.getElementById('menu-activity-1-price').innerHTML = obj.price;
        document.getElementById('menu-activity-1-size').innerHTML = obj.size;
        document.getElementById('menu-activity-1-type').innerHTML = obj.side;
        document.getElementById('menu-activity-1-time').innerHTML = obj.time;
    };
    return one;
};

function freshTable(){
    var node = document.getElementById('tab-4');
    var id,method;
    if(node.classList.contains('show')){
        id = 'tab-4';
        method = 'queryOpenOrders';
    }else{
        id = 'tab-6';
        method = 'historyDoneOrders';
    }
    var url=creatExecuteUrl('kucoinclient',method,['btc']);
    sendCmd2('kucoin',url,function(res){
        var data = eval("("+res+")").data;
        showdata(data,id);
    });
};

function showCurrentPrice(){
    var url=creatExecuteUrl('kucoinclient','getAskBid',['btc']);
    sendCmd2('kucoin',url,function(res){
        var data = eval("("+res+")").data.ask;
        document.getElementById('current_price').innerHTML = '$'+data;
    });
};


var allCmd=null;

function cmdChanged(){
    var cmdNode = document.getElementById('c_cmd');
    var index = cmdNode.selectedIndex
    showIndexhelp(index);
};

function showIndexhelp(index){
    var data = allCmd[index].methods;
    var selNode = document.getElementById('c_method');
    var len = selNode.options;
    while(selNode.options.length>0){
      selNode.options.remove(selNode.options.length-1);
    }
    for(x in data){
       selNode.options.add(new Option(data[x].desc+'('+data[x].para+')',data[x].name));
    }
};

function showHelp(){
   var cmdNode = document.getElementById('c_cmd');
   var len = cmdNode.options;
   while(cmdNode.options.length>0){
      cmdNode.options.remove(cmdNode.options.length-1);
   }
   var url=creatExecuteUrl('cmdcenter','getAllCmdHelp');
   sendCmd2('kucoin',url,function(res){
        allCmd = eval("("+res+")").data;
        var size = allCmd.length;
        for(var i = 0;i<size;i++){
           cmdNode.options.add(new Option(allCmd[i].desc,allCmd[i].name));
        }
        showIndexhelp(0);
    });
}


function runCmd(){
    var cmdName = document.getElementById('c_cmd').value;
    var method = document.getElementById('c_method').value;
    var para = document.getElementById('c_para').value;
    var url=creatExecuteUrl(cmdName,method,para.split(','));
    sendAndPrint(url);
};

function showBalance(){
    var url=creatExecuteUrl('kucoinclient','account',['null']);
    sendCmd2('kucoin',url,function(res){
        var data = eval("("+res+")").data;
        for(x in data){
            if(data[x].type == 'trade'){
                if(data[x].currency=='BTC'){
                    document.getElementById('freecoin').innerHTML = data[x].available;
                }else if(data[x].currency=='USDT'){
                    document.getElementById('freeusdt').innerHTML = "$"+data[x].available;
                }
            }
        }        
    });
};

function showTotalFee(){
    
};


function splite(){
    var orderId = document.getElementById('menu-activity-1-id').innerHTML;
    var res = prompt('拆分后马丁数量',1);
    if(res){
        var url=creatExecuteUrl('btc','splite',[orderId,res]);
        sendAndPrint(url);
    }
};

function average(){
    var orderId = document.getElementById('menu-activity-1-id').innerHTML;
    var res = confirm('确认平衡订单');
    if(res){
        var url=creatExecuteUrl('btc','addAverageOrder',[orderId]);
        sendCmd(url,print);
    }
};

function martinOrder(){
    var orderId = document.getElementById('menu-activity-1-id').innerHTML;
    var res = document.getElementById('dialog_martin_num').value;
    if(res){
        var url=creatExecuteUrl('btc','martin',[orderId,res]);
        sendAndPrint(url);
    }
};

function changeOrder(){
    var orderId = document.getElementById('menu-activity-1-id').innerHTML;
    var res = document.getElementById('dialog_change_per').value;
    if(res){
        var url=creatExecuteUrl('btc','addChangeOrder',[orderId,res]);
        sendAndPrint(url);
    }
};


function sendAndPrint(url){
    sendCmd2('kucoin',url,function(res){
        alert(res);
    });
};


function placeOrder(){
    var market = document.getElementById('c_type').selectedIndex == 0 ?'false':'true';
    var price = 'null';
    var mess = '市价';
    if(market == 'false'){
       price = document.getElementById('c_price').value;
       if(price == ''){
        alert('请输入价格');
        return;
       }
       mess = '限价';
    }
    var num = document.getElementById('c_num').value;
    if(num == ''){
        alert('请输入数量');
        return;
    }
    var side = document.getElementById('c_side').selectedIndex == 0?'true':'false';
    if(side == 'true'){
        mess = mess + '买入';
    }else{
        mess = mess + '卖出';
    }
    var res = confirm('确认'+mess);
    if(res){
       var url=creatExecuteUrl('kucoinclient','placeOrder',[price, num, side,'btc', market]);
        sendAndPrint(url);
    }
};

function showdata(fd,id){
    var node = document.getElementById(id);
    var his = id =='tab-6';
    node.innerHTML = '';
    function addSep(){
        node.appendChild(creatNode('div','divider my-2 opacity-50'));
    };
    function addrow(obj,id){
        node.appendChild(createOneRow('onerow',obj));   
    };
    var has = true;
    for(x in fd){
        var onedata = fd[x];
        onedata.time = timeFormat(onedata.createdAt);
        if(his){
            onedata.num = onedata.fee.toFixed(8);
        }else{
            onedata.num = 1 ;
        }
        if(onedata.side.toLowerCase() == 'buy'){
            onedata.color = 'blue';
            onedata.type = '买入';
        }else{
            onedata.color = 'red';
            onedata.type = '卖出';
        }
        if(has == true){
            has = false;
        }else{
         addSep();
        }
        addrow(onedata);
    }

    var detailNode = creatNode('h3','text-center opacity-30 pb-3');
    detailNode.innerHTML='Total: '+fd.length;
    node.appendChild(detailNode);
};
function showpos(res){
    var data = eval("("+res+")").data;
    var fd = data[0].data;
    showdata(fd,'tab-4');
};