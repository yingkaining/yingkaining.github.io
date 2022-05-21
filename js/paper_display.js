var html = ""

window.onload = function() {
    var url = "../paper.json"
    var request = new XMLHttpRequest();
    request.open("get", url);
    request.send(null);
    request.onload = function() {
        if(request.status == 200) {
            var obj = JSON.parse(request.responseText);
            console.log(obj);
            for(var i=0; i<obj.length; i++) {
                var title = obj[i].title
                var author = obj[i].author
                var image = obj[i].image
                var pdf = obj[i].pdf
                var publisher = obj[i].publisher
                var year = obj[i].year
                var equal = obj[i].equal
                var oral = obj[i].oral
                var description = obj[i].description
                
                
                oral_str = ""
                if(oral == true) {
                    oral_str = "(Oral)"
                }

                var equal_str = ""
                if(equal == true) {
                    equal_str = "(* Equal contribution)"
                }

                for(var j=0 ; j<author.length ; j++){
                    if(author[j] == "Kaining Ying" || author[j] == "Kaining Ying*"){
                        author[j] = "<b>" + author[j] + "</b>";
                    }
                    
                }
                var author_str = author.join(', ');

                var meta = obj[i].meta
                
                var meta_array = []
                for(let key in meta){
                    if(meta[key] != false){ 
                        meta_array.push("<a href=" + meta[key] + ">" + key + "</a>")
                    }
                }
                var meta_str = meta_array.join('  /  ')
            

                html += 
                "\
                <tr bgcolor='#ffffff'>\
                    <td style='padding:20px;width:35%;vertical-align:middle'>\
                        <img src= " + image + " width='250'></div>\
                    </td>\
                    <td width='75%' valign='middle'>\
                    <p>\
                        <a href=" + pdf + " style='font-size:18px'>" + title + "</a> &nbsp&nbsp\
                        <br>" + author_str + 
                        "<br>\
                        <em>"+ publisher + year + oral_str + equal_str + "</em> ,\
                        <br>\
                        <font color='black'> " + description +"<br>\
                        " + meta_str + " <br> \
                    </font>\
                        <br>\
                    </td>\
                </tr>\
                "
            }
            document.getElementById("paper").innerHTML = html;
        }
    }
}






// html += "<tr bgcolor='#ffffff'>\
// <td style='padding:20px;width:35%;vertical-align:middle'>\
//   <img src=" 

// html += obj[i].image

// html += "width='250'></div> \
// </td> \
// <td width='75%' valign='middle'> \
//   <p> \
//     <a href="

/* <tr bgcolor='#ffffff'>
        <td style='padding:20px;width:35%;vertical-align:middle'>
          <img src='files/papers/images/mmgraph.png' width='250'></div>
        </td>
        <td width='75%' valign='middle'>
          <p>
            <a href='./files/papers/pdf/mmgraph.pdf'>Self-supervised Enhancement for Named Entity Disambiguation via Multimodal Graph Convolution</a> &nbsp&nbsp

            <br>
            Pengfei Zhou*, <b>Kaining Ying*</b>, Zhenhua Wang, Dongyan Guo, Cong Bai
            <br>
            <em>TNNLS2022 (* Equal contribution)</em> ,
            <br>
            <font color='black'> We present MMGraph, which uses multimodal graph convolution to aggregate visual and contextual language information for accurate entity disambiguation for short texts, and a self-supervised simple triplet network (SimTri) that can learn useful representations in multimodal unlabeled data to enhance the effectiveness of NED models.<br>
              <a href='https://github.com/LanceZPF/NNED_MMGraph'>project page</a> 
              <!-- <a href='data/xie2020advprop.bib'>bibtex</a> <br> -->
            </font>
            <br>

        </td>
      </tr> */