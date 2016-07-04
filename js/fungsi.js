function cetakTable(arr,title,tujuan,koma,n){
    var tabel="";
    tabel+="<div class='col-md-2'><table class='table table table-bordered table-striped text-center'>";
    tabel+="<tr><td colspan='"+n+"'>"+title+"</td></tr>";
    for(var i=0;i<n;i++){
        tabel+="<tr>"
        for(var j=0;j<n;j++){
            tabel+="<td>"+parseFloat(arr[i][j]).toFixed(koma);+"</td>";
        }
        tabel+="</tr>";
    }

    tabel+="</table><p></p></div>";
    return tabel;
//    $("#"+tujuan).append(tabel);
}
function cetakTable1(arr,title,tujuan,koma,n){
    var tabel="";
    tabel+="<table class='bordered'>";
    tabel+="<tr><td colspan='"+n+"' class='biru'>"+title+"</td></tr>";
    for(var i=0;i<n;i++){
        tabel+="<tr>"
        for(var j=0;j<n;j++){
            tabel+="<td>"+parseFloat(arr[i][j]).toFixed(koma);+"</td>";
        }
        tabel+="</tr>";

    }
    tabel+="</table>";
    $("#"+tujuan).append(tabel);
}
function cetakSebarisDet(arr,title,tujuan){
    var tabel="";
    tabel+="<div class='col-md-4'><table class='table table table-bordered table-striped text-center'>";
    for(var i=0;i<arr.length;i++){
        var ss="";
        if(title=="Det"){
            ss="A";
            if(i!=0)
                ss+=(i-1);
        }
        else
            ss+=i;
        tabel+="<tr><td >"+title+"("+ss+")</td><td>"+parseFloat(arr[i]).toFixed(4)+"</td></tr>";
    }
    tabel+="</table></div>";
    return tabel;
//    $("#"+tujuan).append(tabel);
}
