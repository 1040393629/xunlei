/**
 * Created by Administrator on 2019/10/29.
 */
var circle = document.getElementById("circle");
var list = circle.getElementsByTagName("li");
var img = document.getElementById("img");
var imgArr = ["201702151452533692.jpg","201702151451211820.jpg","201702151453082348.jpg","201702151452362548.jpg","201703011020173137.jpg"]
function change(index){
    for(var i = 0;i < imgArr.length;i++){
        if(index == i){
            img.src = "images/"+imgArr[i];
        }
    }
}