function createOneRow(id,obj,run){
    // var one = creatNode('a','d-flex py-1');
    // one.setAttribute('href','#');
    var one = creatNode('div','border rounded-m');
    if(run){
        one.setAttribute('style','overflow:hidden;margin-top:8px;background-color:#cde6c7');
    }else{
        one.setAttribute('style','overflow:hidden;margin-top:8px');
    }
    // one.setAttribute('style','overflow:hidden;margin-top:8px');
    // one.setAttribute('data-bs-toggle','offcanvas');
    // one.setAttribute('data-bs-target','#trade_detail');
    one.innerHTML = templateChange(id,obj);
    var nodes = one.getElementsByTagName('a');
    nodes[nodes.length-2].onclick=function(event){
        event.stopPropagation();
        if(run){
            stopCoin(obj.coin);
        }else{
            startCoin(obj.coin);
        }
    };
    nodes[nodes.length-1].onclick=function(event){
        event.stopPropagation();
        //modify coin
        if(run){
            setNodeValue('modifyP_trade-openper', obj.op, false);
            setNodeValue('modifyP_trade-closeper', obj.ep, false);
            var modifyButton = document.getElementById('modify_percent_dialog').getElementsByTagName('a')[0];
            modifyButton.onclick=function(){
                modifyPercent(obj.coin);
            };
            showDialog('modify_percent_dialog');
        }else{
            setNodeValue('modify_trade-name', obj.coin, false);
            setNodeValue('modify_trade-level', obj.level, false);
            setNodeValue('modify_trade-quantity', obj.size, false);
            setNodeValue('modify_trade-opennum', obj.len, false);
            setNodeValue('modify_trade-openper', obj.op, false);
            setNodeValue('modify_trade-closeper', obj.ep, false);
            setNodeValue('modify_trade-bianname', obj.bname, false);
            setNodeValue('modify_trade-multi', obj.mu, false);
            showDialog('modify_dialog');
        }
    };
    one.onclick = function(){
        setNodeHtml('trade-name', obj.coin);
        setNodeHtml('trade-level', obj.level);
        setNodeHtml('trade-quantity', obj.size);
        setNodeHtml('trade-opennum', obj.len);
        setNodeHtml('trade-openper', obj.op);
        setNodeHtml('trade-closeper', obj.ep);
        setNodeHtml('trade-bianname', obj.bname);
        setNodeHtml('trade-multi', obj.mu);
        
        // var button = document.getElementById('operBu');
        // button.innerHTML= (run ?'停止':'启动');
        // button.onclick=function () {
        //     if(run){
        //         stopCoin(obj.coin);
        //     }else{
        //         startCoin(obj.coin);
        //     }
        // };
        // document.getElementById('modifyBu').onclick = function(){
        //     hidderDialog('trade_detail');
        //     if(run){
        //         setNodeValue('modifyP_trade-openper', obj.op, false);
        //         setNodeValue('modifyP_trade-closeper', obj.ep, false);
        //         showDialog('modify_percent_dialog');
        //     }else{
        //         setNodeValue('modify_trade-name', obj.coin, false);
        //         setNodeValue('modify_trade-level', obj.level, false);
        //         setNodeValue('modify_trade-quantity', obj.size, false);
        //         setNodeValue('modify_trade-opennum', obj.len, false);
        //         setNodeValue('modify_trade-openper', obj.op, false);
        //         setNodeValue('modify_trade-closeper', obj.ep, false);
        //         setNodeValue('modify_trade-bianname', obj.bname, false);
        //         setNodeValue('modify_trade-multi', obj.mu, false);
        //         showDialog('modify_dialog');
        //     }
        // };
        showDialog('trade_detail');
        
    };
    return one;
};

function runUserCmd(){
    var res = getNodeValue('user_cmd');
    if(res){
        var url = 'cmd?cmd='+res;
        sendAndPrint(url);
        hidderDialog('cmd-dialog');
    }
};


function modifyPercent(coin){
    var op = getNodeValue('modifyP_trade-openper');
    var ep = getNodeValue('modifyP_trade-closeper');
    var url = "cmd?cmd=setpercent&coin="+coin+'&sp='+op+'&ep='+ep;
    sendGateCmd(url,function(res) {
        var data = eval("("+res+")");
        if(data.code != 0){
            showAlterDialog(res);
        }
        hidderDialog('modify_percent_dialog');
    });
};

function modifyCoin(){
    var coin = getNodeValue('modify_trade-name');
    var url = "cmd?cmd=add2&mode=1&coin="+coin;
    function addToUrl(key,value){
        if(value){
            url = url+'&'+key+'='+value;    
        }
    };
    var num = getNodeValue('modify_trade-opennum');
    var level = getNodeValue('modify_trade-level');
    var qu = getNodeValue('modify_trade-quantity');
    var bname = getNodeValue('modify_trade-bianname');
    var bmu = getNodeValue('modify_trade-multi');
    var op = getNodeValue('modify_trade-openper');
    var ep = getNodeValue('modify_trade-closeper');
    addToUrl('len',num);
    addToUrl('level',level);
    addToUrl('quanitiy',qu);
    addToUrl('openPercent',op);
    addToUrl('endPercent',ep);
    addToUrl('bianCoin',bname);
    addToUrl('multiple',bmu);
    sendGateCmd(url,function(res) {
        var data = eval("("+res+")");
        if(data.code != 0){
            showAlterDialog(res);
        }
        hidderDialog('modify_dialog');
        
    });
};

function startCoin(coin){
    var url = "begin/"+coin;
    sendGateCmd(url,function(res){
        var data = eval("("+res+")");
        if(data.code == 0){
            showAlterDialog("启动成功");
            hidderDialog('trade_detail');
        }else{
            showAlterDialog(res);
        }
    });
};

function stopCoin(coin){
    showConfirmDialog("确认需要停止该交易对",function(){
        var url= "remove/"+coin;
        sendGateCmd(url,function(res){
            var data = eval("("+res+")");
            if(data.code == 0){
                showAlterDialog("成功停止");
                hidderDialog('trade_detail');
            }else{
                showAlterDialog(res);
            }
        });
    });
};

function sendGateCmd(url,fun){
    if(golbroute){
       sendCmd2(golbroute,url,fun);
    }else{
       sendCmd2('gate',url,fun);
    }
};

function setAButtonState(id,able){
    var node = document.getElementById(id);
    if(node){
        if(able){
            removeClass(node,"disabled");
        }else{
            addClass(node,"disabled")
        }
        
    }
};


function setNodeValue(id,data,disable){
    var node = document.getElementById(id);
    if(node){
        node.value = data;
        if(disable){
            node.setAttribute('disabled','disabled');
        }else{
            node.removeAttribute('disabled');
        }
        
    }
};


function checkShow(id){
     var node = document.getElementById(id);
     return node.classList.contains('show')
};

function test(){
    var data = {'coin':[{
            'openPercent':'0.007',
            'closePercent':'0.0007',
            'longSize':3,
            'shortSize':0,
            'status':0,
            'info':{
                'coin':'ht',
                'level':12,
                'quanitiy':100000,
                'mode':0,
                'len':3,
                'bianCoin':'',
                'mu':''
            }
        },{
            'openPercent':'0.007',
            'closePercent':'0.0007',
            'status':0,
            'info':{
                'coin':'eth',
                'level':12,
                'quanitiy':10000,
                'mode':0,
                'len':3,
                'bianCoin':'',
                'mu':''
            }
        },{
            'openPercent':'0.007',
            'closePercent':'0.0007',
            'status':2,
            'info':{
                'coin':'gitcoin',
                'level':12,
                'quanitiy':10000,
                'mode':0,
                'len':3,
                'bianCoin':'',
                'mu':''
            }
        }],'account':{'gateusdt':'100','bianusdt':'100'}};
        showpos(JSON.stringify({'data':data}));
};


function testHis(){
    var data =[{
        'total':'10',
        'gateAccount':'100',
        'bianAccount':'200',
        'size':300,
        'pos':'LONG',
        'time':1234567891230
    }];
showAccount(JSON.stringify({'data':data}));

};

function testPos(){
    var data =[{
        'coin':'btc',
        'size':'100',
        'pos':'LONG',
        'exchage':'gate',
        'pos':'LONG',
        'price':'100'
    },
    {
        'coin':'eth',
        'size':'100',
        'pos':'LONG',
        'exchage':'gate',
        'pos':'LONG',
        'price':'100'
    }];
showPostion(JSON.stringify({'data':data}));

};

function freshTable(){
    var node = document.getElementById('tab-4');
    if(checkShow('tab-4')){
        sendGateCmd('coinandaccount',showpos);
        // test();
    }else if(checkShow('tab-6')){
        sendGateCmd("trade?id=0&count=20",showHisData);
    }else if(checkShow('tab-5')){
        sendGateCmd('position',showPostion);
        // testPos();
    }else{
        sendGateCmd('cmd?cmd=account2&id=0&count=20',showAccount);
    }
   
};

function showBalance(){
    var url=creatExecuteUrl('btcclient','getSpotAccount',['btc']);
    sendCmd(url,function(res){
        var data = eval("("+res+")").data;
        document.getElementById('freeusdt').innerHTML = "$"+data.freeUsdtAccount;
        document.getElementById('freecoin').innerHTML = data.freeCoinAccount;
    });
};

function sendAndPrint(url){
    sendGateCmd(url,function(res){
        showAlterDialog(res);
    });
};


function showHisData(res){
    var data = eval("("+res+")").data;
    var node = document.getElementById('tab-6');
    cleanNodeHtml('tab-6');

    function calutePercent(row){
        var gprice = row.gatePrice;
        var ha = row.bianPrice;
        if('L' == row.gatePos){
            return (((ha-gprice)*1000)/ha).toFixed(3);
        }else{
            return (((gprice-ha)*1000)/ha).toFixed(3);
        }
    };

    function addHisRow(obj,row){
        var one = creatNode('a','d-flex py-1');
        one.setAttribute('href','#');
        one.setAttribute('data-bs-toggle','offcanvas');
        one.setAttribute('data-bs-target','#hisDetail');
        one.innerHTML = templateChange('hisrow',obj);
        one.onclick = function(){
            document.getElementById('detail-coin').innerHTML = row.coin;
            document.getElementById('detail-pos').innerHTML = row.gatePos=='L'?'多':'空';
            document.getElementById('detail-size').innerHTML = row.size;
            document.getElementById('detail-gateprice').innerHTML = row.gatePrice;
            document.getElementById('detail-bianprice').innerHTML = row.bianPrice;
            document.getElementById('detail-time').innerHTML = obj.time;
        };
        node.appendChild(one);
    };

    var has = true;
    for(x in data){
        if(has == true){
            has = false;
        }else{
            addSep(node);
        }
        var row = data[x];
        var one = {};
        var per = calutePercent(row);

        one.coin = row.coin;
        one.percent = '('+(row.gatePos=='L'?'多':'空')+') '+per+'‰';
        one.size = row.size;
        one.detail = row.gatePrice+'(gate)/'+row.bianPrice+'(bian)';
        one.time = timeFormat(row.openTime);
        one.color = per>=0 ?'blue':'red';
        one.img = one.coin.toLowerCase();
        addHisRow(one,row);

    }
};


function addSep(node){
    node.appendChild(creatNode('div','divider my-2 opacity-50'));
};

function showpos(res){
    var data = eval("("+res+")").data;
    var account = data.account;
    var coins = data.coin;

    document.getElementById('gateusdt').innerHTML=account.gateAccount;
    document.getElementById('bianusdt').innerHTML=account.bianAccount;

    var node = document.getElementById('tab-4');
    cleanNodeHtml('tab-4');
    function addrow(obj,run){
        node.appendChild(createOneRow('newonerow',obj,run));   
    };

    coins.sort(function(a,b){
        if(a.status ==2){
            if(b.status !=2){
                return 1;
            }
        }else{
            if(b.status==2){
                return -1;
            }
        }
        return a.info.coin>b.info.coin?1:-1;
    });

    var has = true;
    for(x in coins){
        var row = coins[x];
        var task = {};
        task.status = taskStatus(row);
        task.coin=row.info.coin;
        task.level= row.info.level;
        task.size=row.info.quanitiy;
        if(row.status == 2){
            task.op=row.info.openPercent;
            task.ep=row.info.endPercent;
        }else{
            task.op=row.openPercent;
            task.ep=row.closePercent;
        }
        if(has == true){
            has = false;
        }else{
            //addSep(node);
        }
        task.mod = getMode(row);
        task.ls = 0;
        if(row.longSize){
            task.ls = row.longSize;
        }
        task.ss = 0;
        if(row.shortSize){
            task.ss = row.shortSize;
        }
        task.img = task.coin.toLowerCase();
        task.len = row.info.len;
        task.bname=checkValue(row.info.bianCoin);
        task.mu= checkValue(row.info.multiple);
        task.color = row.status==0?'blue':'teal';
        task.buttons = document.getElementById(row.status==0?'runbutton':'stopbutton').innerHTML;
        addrow(task,row.status==0 || row.status==1);
    }
};

function checkValue(obj){
    if(obj){
        return obj;
    }else{
        return '';
    }
};

function getMode(row){
    if(row.status == 2){
        return '0/0';
    }
    var ops = "0";
    if(row.longSize){
        ops = row.longSize;
    }
    var cos = "0";
    if(row.shortSize){
        cos = row.shortSize;
    }
    return ops+'(多)/'+cos+'(空)';
};

function taskStatus(row){
    var status =row.status
    if(status == 0){
        return '(运行)';
    }else if(status == 1){
        return '(停止)';
    }else if(status == 2){
        return '(未启动)';
    }else{
        return '(异常停止)';
    }
};


function showConfirmDialog(message,fun){
    document.getElementById('confirmContent').innerHTML= message;
    document.getElementById('alertActionButton').onclick = function(){
        fun();
        hidderDialog('confirm-dialog');
    };
    showDialog('confirm-dialog');
};


function showAlterDialog(message){
    document.getElementById('alter-content').innerHTML= message;
    showDialog('alter-dialog');
};


function showPostion(res){
    var data = eval("("+res+")").data;
    var node = document.getElementById('tab-5');
    cleanNodeHtml('tab-5');

    function addPosRow(row){
        var one = creatNode('div','border rounded-m');
        one.setAttribute('style','overflow:hidden;margin-top:8px');
        one.innerHTML = templateChange('posrow',row);
        var nodes = one.getElementsByTagName('a');
        nodes[nodes.length-2].onclick=function(event){
            setNodeValue('market_size',row.size,false);
            showDialog('close-market-dialog');
            document.getElementById('market_bu').onclick=function(){
                closeOrder(row, 1);
            }
        };
        nodes[nodes.length-1].onclick=function(event){
            setNodeValue('limit_size',row.size,false);
            showDialog('close-limit-dialog');
            document.getElementById('limit_bu').onclick=function(){
                closeOrder(row, 0);
            }
        };
        node.appendChild(one);
    };

    var has = true;
    for(x in data){
        if(has == true){
            has = false;
        }else{
            //addSep(node);
        }
        var one = data[x];
        one.side = one.pos=='LONG'?'多':'空';
        one.color = one.pos=='LONG'?'blue':'red';
        one.img = one.coin.toLowerCase();
        addPosRow(one);
    }
};


function closeOrder(row,type){
    var url = "cmd?cmd=close&exchange=" + row.exchage + "&side=" + row.pos  + "&symbol=" + row.symbol;
    if(type == 0){
        //limit
        url = url+"&price="+getNodeValue('limit_price')+ "&size=" + getNodeValue('limit_size');
    }else{
        //market
        url = url+ "&size=" + getNodeValue('market_size');
    }
    sendGateCmd(url,function(res){
        var data = eval("("+res+")");
        if(data.code == 0){
            showAlterDialog(res);
            if(type==0){
                hidderDialog('close-limit-dialog');
            }else{
                hidderDialog('close-market-dialog');
            }
        }else{
            showAlterDialog(res);
        }
    });
};


function showAccount(res){
    var data = eval("("+res+")").data;
    var node = document.getElementById('tab-7');
    cleanNodeHtml('tab-7');

    function addAccountRow(obj){
        var one = creatNode('a','d-flex py-1');
        one.setAttribute('href','#');
        one.setAttribute('data-bs-toggle','offcanvas');
        one.setAttribute('data-bs-target','#hisDetail');
        one.innerHTML = templateChange('accountrow',obj);
        node.appendChild(one);
    };

    var has = true;
    for(x in data){
        if(has == true){
            has = false;
        }else{
            addSep(node);
        }
        var row = data[x];
        var one = {};
        one.total = parseFloat(row.total).toFixed(2);
        one.time = timeFormat(row.time);
        one.gate = parseFloat(row.gateAccount).toFixed(2)+'(Gate)';
        one.bian = parseFloat(row.bianAccount).toFixed(2)+'(币安)';
        addAccountRow(one);

    }
};
