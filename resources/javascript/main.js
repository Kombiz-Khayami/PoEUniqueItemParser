var canvas = document.getElementById('tree'),
context = canvas.getContext('2d');


// click_Listener();
// make_base();



function make_base()
{
  base_image = new Image();
  base_image.src = 'C:/Users/Bombizz/Desktop/PoESkillTree-master/resources/media/background.png';
  base_image.onload = function(){
    context.drawImage(base_image, 0, 0, 400, 400);
    add_image();
  }
}

function add_image()
{
  base_image2 = new Image();
  base_image2.src = 'C:/Users/Bombizz/Desktop/PoESkillTree-master/resources/media/redjewl.png'; 
  base_image2.onload = function(){
    context.drawImage(base_image2, 8, 50, 50, 50);
  }
}

function click_Listener(){
	$("#tree").click(function(e){
	    mouseX = e.pageX;
	    mouseY = e.pageY;
	    alert("X: "+mouseX+" Y:"+mouseY)
	})
}
