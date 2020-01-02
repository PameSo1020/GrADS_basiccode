**Series de Tiempo Parte 3
"open 1811270600_wrfout_arw_d01.ctl"
"set display color white"
"clear"

****Para Laguna Arenal
"set lon -84.90"
"set lat 10.51"
"set t 1 25"

**Grafica VIENTO TOTAL.


'set gxout line'
'set ccolor 8'
'set cthick 8'
"set cstyle 4"

*"set line 2 3 5"
"d windave10m"
**
"draw ylab velocidades"
"draw xlab dias"
"draw title Grafico Viento Total [m/s]\Laguna Arenal "
"printim vientotalLA.png"   






















