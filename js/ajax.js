function ajax(obj){
    //function ajax(type,url,data,succeed,failed){
        if(window.XMLHttpRequest){
            var xhr = new XMLHttpRequest;
        }else{
            var xhr = new ActiveXObject("Microsoft.XMLHTTP");
        }
        if(obj.type=="get" || obj.type=="GET"){
            xhr.open("get",obj.url+"?"+obj.data+"&_=" + new Date().getTime(),true);
            xhr.send(null);
        }else if(obj.type=="post" || obj.type=="POST"){
            xhr.open("post",obj.url,true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send(obj.data);
        }else{
            alert("改方法暂时只支持get或post");
            return;
        }

        xhr.onreadystatechange=function(){
            if(xhr.readyState==4){
                if(xhr.status==200){
                    obj.succeed(xhr.responseText);
                }else{
                    obj.failed(xhr.status);
                }
            }
        }

    }