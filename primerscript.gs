'set lat 10 25               '
'set lon -110 -85'
'set display color white'
'c'

'set parea 1.5 10.0 0.5 8.0'

'set gxout shaded'
'set mpdset hires'
'set display color white'
'set grads off'
'set gxout shaded'
'clear'
'color 0 0.0002 0.00001 -kind mintcream->lightskyblue->skyblue->dodgerblue->royalblue->navy'
*mintcream->deepskyblue->dodgerblue->royalblue
*crimson->tomato->orange->navajowhite->papayawhip
*'color -2 2 0.2 -kind darkblue->blue->white->red->darkred'

'd prate'
"xcbar -fw 0.055"
"draw title Precipitacion Mesoamerica (mm/dia)\02 Diciembre 2008 (18Z)"
*"d skt"
*printim
*run xcbar
*draw title Anomalia de Precipitacion Centroamerica (mm/dia) (El nino 1997) 

*draw title Precipitacion Centroamerica (mm/dia) (El nino 1997)

