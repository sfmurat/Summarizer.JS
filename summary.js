function sum(selectedID,textLIMIT,dot){
    var selectedtext = document.getElementById(selectedID).innerHTML;
    var summary = "";
    var words = selectedtext.split(' ',textLIMIT);

    for(var i=0;i<words.length;i++){
        summary += words[i];
        if(i+1 != textLIMIT){
            summary += " ";
        }else if(dot == true){
            summary += "..."
        }
    }
    document.getElementById(selectedID).innerHTML = summary;
}