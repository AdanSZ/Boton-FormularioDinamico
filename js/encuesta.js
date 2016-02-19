$(document).ready(function(){		
		$(".mas").click(function(){
			var element_resp = $($(this).siblings())[3];
			console.log(element_resp);

			$("#resp").removeAttr("id");
			$(".activo").append("<div style='margin:5px;'><input id='resp' type='text' class='respuesta form-control' placeholder='posible respuesta'><i class='borrar fa fa-minus-circle' onclick='borrar_elemento(this);'></i></div>");				
			document.getElementById("resp").focus();		
		});

		$(".btnAgregar").click(function(){
			var elementos_activo = $(".activo").find("input");
			if(elementos_activo.length<3){
				alert("Tienes que ingresar almenos 2 respuestas");
			}else{
				$(".bloque_pregunta").removeClass("activo");
			var element = $($(this));
			//$(".modal-body").append("sadasdasdasd");
			$(".modal-body").append("<div class='bloque_pregunta activo'><hr/><i class='borrar fa fa-minus-circle' onclick='borrar_elemento(this);'></i><span>Pregunta</span><input type='text' placeholder='pregunta' class='form-control preguntaF'><br><br><div class='respuesta'><span>Respuestas:</span><br></div><br></div>");
			}			
		});

	
		$(".terminar").click(function(){
			var json={};
			var respuestas = {};
			var json_completo={};
			var element = $($(".modal-body").find(".bloque_pregunta"));
			console.log(element);
			for(var i=0;i<=(element.length)-1;i++){
				json = {};
				respuestas={};
				var preguntas = $(element[i]).find("input");
				for(var x=0;x<=(preguntas.length)-1;x++){					
					if(x==0){
						json["pregunta"]=preguntas[x].value;	
					}else{
						respuestas[x+""]=preguntas[x].value;
					}									
				}
				json_completo[i]=json;
				json_completo[i]["respuestas"]=respuestas;
				console.log(json_completo);											
			}

		});

		$('body').keydown(function (e){
		    if(e.keyCode == 13){		        
		        //if($("#modalEncuesta").data('bs.modal').isShown){
				if($("input").is(":focus")){	
					$(".mas").click();
				}
		    }
		});

		
		
	});

function borrar_elemento(element){
	console.log($(element).parent());
	$(element).parent().remove();
	// $(element).siblings()[0].remove();
	// $(element).remove();
		
}