
基本数组去重

```javascriopt
Array.prototype.unique = function(){
    let result = [];
    this.map((v)=>{
        result.indexOf(v) < 0&& result.push(v)  
    });
    return result;
}

 Array.prototype.unique = function(){
         return [...new Set(this)];
    }
```