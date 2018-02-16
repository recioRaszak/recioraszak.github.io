var jocs = {
    "paraules": [
        { "paraula": "roca", "disponibles": "chawryopsx" },
        { "paraula": "tigre", "disponibles": "ehtroqifgetv" },
        { "paraula": "arbre", "disponibles": "baewpirbro" },
        { "paraula": "bossa", "disponibles": "seroxsnabm" },
        { "paraula": "bruixa", "disponibles": "savghbwrculix" },
        { "paraula": "batman", "disponibles": "ehntybqaawm" },
        { "paraula": "elefant", "disponibles": "baeweplnvfaitsn" },
        { "paraula": "forquilla", "disponibles": "learqufozil" },
        { "paraula": "spider man", "disponibles": "itdejrsnpvcman" },
        { "paraula": "wonder woman", "disponibles": "wowgojkmaendern" },
        { "paraula": "vella quaresma", "disponibles": "eluarlaavqesm" },
        { "paraula": "escombra", "disponibles": "breamhoegsc" },
        { "paraula": "gran barrufet", "disponibles": "fetrrubskldjfanarg" },
        { "paraula": "harry potter", "disponibles": "ryrharterpot" },
        { "paraula": "llangardaix", "disponibles": "gahndarllaxiic" },
        { "paraula": "mortadelo", "disponibles": "demorlota" },
        { "paraula": "pantera rosa", "disponibles": "sareraopaontyz" },
        { "paraula": "pati pla", "disponibles": "pplaitla" },
        { "paraula": "puny de ferro", "disponibles": "rrodefenypu" },
        { "paraula": "senyor pla", "disponibles": "plyaroynnes" },
        { "paraula": "son goku", "disponibles": "kkaougonsf" },
        { "paraula": "tauro", "disponibles": "orumtfga" },
        { "paraula": "tortugues ninja", "disponibles": "ojannieusgutrotwq" }
    ]
};

var pantalla = 0;
var pantalles = (jocs.paraules.length);

for (g in jocs.paraules) {
    $('#jumpgame').append("<option value=" + g + ">" + jocs.paraules[g].paraula + "</option>");
    //<div class="draggable lletra-a">a</div>
}

$('.settings').click(function() {
    $('body').toggleClass('showtools');
});

$('#case').click(function() {
    $('.bloc').toggleClass('lowercase');
});

$('#jumpgame').change(function() {
    valu = $('#jumpgame option:selected').attr('value');
    startgame(valu);
});

$(document).ready(function() {
    startgame(pantalla);
});

function clearStage() {
    $('.bloc').html('');
    $('.applause').css('display', 'none');
}




function startgame(partida) {

    clearStage();


    var paraulaActual = "";
    var lletresParaula = "";
    var lletresJocActual = "";
    var guanyar;
    var punts;

    paraulaActual = jocs.paraules[partida].paraula;
    slugParaulaActual = paraulaActual.replace(' ', '-');
    slugParaulaActual = slugParaulaActual.replace(' ', '-');
    lletresParaula = jocs.paraules[partida].paraula.split("");
    lletresJocActual = jocs.paraules[partida].disponibles.split("");
    guanyar = paraulaActual.replace(' ', '').length;
    guanyar = paraulaActual.replace(' ', '').length;
    punts = 0;

    i = 0;
    for (i in lletresJocActual) {
        $('.lletres').append("<div class='draggable lletra-" + lletresJocActual[i] + "'>" + lletresJocActual[i] + "</div>");
        //<div class="draggable lletra-a">a</div>
    }

    $('#figura').attr({ 'src': 'dibuixos/' + slugParaulaActual + '.png', 'alt': paraulaActual })

    //<div class="lletra target target-a"></div>
    i = 0;

    // ACTIVAR EL DRAG
    interact('.lletres [class*="lletra-"].draggable:not(.lletra-space)')
        .draggable({
            // enable inertial throwing
            inertia: true,
            // keep the element within the area of it's parent
            restrict: {
                restriction: false,
                endOnly: true,
                elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
            },
            /*,
	    snap: {
	         targets: [
	           interact.createSnapGrid({
	           	x: 10, 
	           	y: 10, 
	           	range: Infinity,
	           	offset: { x: 10, y: 0 }
	           })
	         ],
	         relativePoints: [ { x: 9, y: 0 } ]
	       },
		*/
            // enable autoScroll
            autoScroll: true,

            // call this function on every dragmove event
            onmove: dragMoveListener
                // call this function on every dragend event
                /*
                onend: function (event) {
                  var textEl = event.target.querySelector('p');

                  textEl && (textEl.textContent =
                    'moved a distance of '
                    + (Math.sqrt(event.dx * event.dx +
                                 event.dy * event.dy)|0) + 'px');
                }
                */
        });

    //DRAG LISTENER

    function dragMoveListener(event) {
        var target = event.target,
            // keep the dragged position in the data-x/data-y attributes
            x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
            y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

        // translate the element
        //target.style.webkitTransform =
        target.style.transform =
            'translate(' + x + 'px, ' + y + 'px)';
        target.classList.add('drag-active');
        // update the posiion attributes
        target.setAttribute('data-x', x);
        target.setAttribute('data-y', y);
    }

    // this is used later in the resizing and gesture demos
    window.dragMoveListener = dragMoveListener;



    // PINTAR OBJECTIUS I ESNAP TO
    for (i in lletresParaula) {
        if (lletresParaula[i] == " ") {
            $('.solucio').append("<div class='lletra target space'>&nbsp;</div>");
        } else {
            $('.solucio').append("<div class='lletra target target-" + lletresParaula[i] + "'>" + lletresParaula[i] + "</div>");
        }

        // enable draggables to be dropped into this
        interact('.target-' + lletresParaula[i]).dropzone({
            // only accept elements matching this CSS selector
            accept: '.lletra-' + lletresParaula[i],
            // Require a 75% element overlap for a drop to be possible
            overlap: 0.85,

            // listen for drop related events:

            ondropactivate: function(event) {
                // add active dropzone feedback
                event.target.classList.add('drop-active');
            },
            ondragenter: function(event) {
                var draggableElement = event.relatedTarget,
                    dropzoneElement = event.target;

                // feedback the possibility of a drop
                dropzoneElement.classList.add('drop-target');
                draggableElement.classList.add('can-drop');
                //draggableElement.textContent = 'Dragged in';
            },
            ondragleave: function(event) {
                // remove the drop feedback style
                event.target.classList.remove('drop-target');
                event.relatedTarget.classList.remove('can-drop');
                //event.relatedTarget.textContent = 'Dragged out';
            },
            ondrop: function(event) {
                //event.relatedTarget.textContent = 'Dropped';
                event.relatedTarget.classList.add('correcte');
                event.relatedTarget.classList.remove('draggable');
                event.relatedTarget.classList.remove('can-drop');
                event.relatedTarget.classList.remove('drag-active');

                punts++;
                if (punts == guanyar) {
                    $('.applause').css('display', 'block');
                    pantalla++;
                    if (pantalla == jocs.paraules.length) {
                        pantalla = 0; // tornem a la primera
                    }
                    //startgame(pantalla);
                    setTimeout(function() { startgame(pantalla) }, 3000);


                }

            },
            ondropdeactivate: function(event) {
                // remove active dropzone feedback
                event.target.classList.remove('drop-active');
                event.target.classList.remove('drop-target');
            }
        });
    }
}