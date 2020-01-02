**Series de Tiempo Parte 3
"open 1811270600_wrfout_arw_d01.ctl"
"set display color white"
"clear"
"set gxout shaded"
"set mpdset hires"



**Grafica VIENTO TOTAL.
t = 1 
while (t < 26)
    "set t "t
    "d winddave10m"
    "q time"
    fecha = subwrd(result,3)
    "draw title Grafico Viento Total [m/s] "fecha
    "run cbar.gs"
    "printim vientotal"fecha".png"   
    "c"
    t = t+1
endwhile

