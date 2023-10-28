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

function test(){
     var bb= {
    'data':[{'data':[{'id':1,'price':'100','side':'buy','time':1232224567,'size':'0.004'},
    {'id':2,'price':'200','side':'buy','time':1234545467,'size':'0.004'},
    {'id':3,'price':'300','side':'sell','time':12343555567,'size':'0.004'}
    ]},{'data':[{'orderId':1,'side':'buy'},
    {'orderId':4,'side':'buy','time':1234223366},
    {'orderId':4,'side':'buy','time':1234223366}]}]
   };

   // showHisData(JSON.stringify(bb.data[0]));
   showHisData(bb.data[0].data);
};

function freshTable(){
    var node = document.getElementById('tab-4');
    if(node.classList.contains('show')){
        var first=creatExecuteData('btcclient','getAllOpenOrders',['btc']);
        var second=creatExecuteData('dao','queryAllWatchOrder',['false']);
        var url = createMutiUrl(first,second);
        sendCmd(url,showpos);
    }else{
        var url=creatExecuteUrl('btcclient','queryHisOrders',['btc']);
        sendCmd(url,function(res){
           var data = eval("("+res+")").data;
           showHisData(data);
        });
    }
    // test();
};

function showCurrentPrice(){
    var url=creatExecuteUrl('btcclient','getCurrentPrice',['btc']);
    sendCmd(url,function(res){
        var data = eval("("+res+")").data;
        document.getElementById('current_price').innerHTML = '$'+data;
    });
};

function showBalance(){
    var url=creatExecuteUrl('btcclient','getSpotAccount',['btc']);
    sendCmd(url,function(res){
        var data = eval("("+res+")").data;
        document.getElementById('freeusdt').innerHTML = "$"+data.freeUsdtAccount;
        document.getElementById('freecoin').innerHTML = data.freeCoinAccount;
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
        hidderDialog('menu-activity-1');
    }
};

function changeOrder(){
    var orderId = document.getElementById('menu-activity-1-id').innerHTML;
    var res = document.getElementById('dialog_change_per').value;
    if(res){
        var url=creatExecuteUrl('btc','addChangeOrder',[orderId,res]);
        sendAndPrint(url);
        hidderDialog('menu-activity-1');
    }
};


function sendAndPrint(url){
    sendCmd(url,function(res){
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
    var side = document.getElementById('c_side').selectedIndex == 0 ? 'true':'false';
    if(side == 'true'){
        mess = mess + '买入';
    }else{
        mess = mess + '卖出';
    }
    var res = confirm('确认'+mess);
    if(res){
       var url=creatExecuteUrl('bianclient','placeOrder',[price, num, side, 'btc', market, 'null']);
        sendAndPrint(url);
    }
};


function showHisData(fd){
    var node = document.getElementById('tab-6');
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
        onedata.time = timeFormat(onedata.time);
        if(onedata.side.toLowerCase() == 'buy'){
            onedata.color = 'blue';
            onedata.type = '买入';
        }else{
            onedata.color = 'red';
            onedata.type = '卖出';
        }
        onedata.num = 1;
        if(has == true){
            has = false;
        }else{
         addSep();
        }
        addrow(onedata);
    }
};

function showdata(fd,sd){
    var node = document.getElementById('tab-4');
    node.innerHTML = '';
    function addSep(){
        node.appendChild(creatNode('div','divider my-2 opacity-50'));
    };
    function addrow(obj,id){
        node.appendChild(createOneRow('onerow',obj));   
    };
    var map = new Map();
    for(x in fd){
        var onedata = fd[x];
        map.set(onedata.id,{'id':onedata.id,
            'side':onedata.side,
            'size':onedata.size,
            'time':timeFormat(onedata.time),
            'num':0,
            'price':onedata.price});
    }
    if(sd){
        for(x in sd){
            var onedata = sd[x];
            var tmp = map.get(onedata.orderId);
            if(tmp){
                tmp.num = tmp.num + 1;
            }else{
                map.set(onedata.orderId,{'id':onedata.orderId,
                    'side':onedata.side,
                    'time':timeFormat(onedata.time),
                    'num':0});
            }
        }
    }
    var has = true;
    var data = [...map.values()];
    for(x in data){
        if(data[x].side.toLowerCase() == 'buy'){
            data[x].color = 'blue';
            data[x].type = '买入';
        }else{
            data[x].color = 'red';
            data[x].type = '卖出';
        }
        if(has == true){
            has = false;
        }else{
         addSep();
        }
        addrow(data[x]);
    }

    var detailNode = creatNode('h3','text-center opacity-30 pb-3');
    detailNode.innerHTML='Total: '+data.length;
    node.appendChild(detailNode);
};
function showpos(res){
    var data = eval("("+res+")").data;
    var fd = data[0].data;
    var sd = data[1].data;
    showdata(fd,sd);
};