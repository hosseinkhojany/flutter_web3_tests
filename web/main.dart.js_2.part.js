self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={ly:function ly(d,e){this.a=d
this.b=e},
aq9(d,e,f,g,h,i){var x,w
if(f==null)x=null
else x=f
w=B.nF(h,i)
return new A.w7(d,x,w,e,g,null,null)},
nG:function nG(d,e){this.a=d
this.b=e},
hb:function hb(d,e){this.a=d
this.b=e},
oH:function oH(d,e){this.a=d
this.b=e},
w7:function w7(d,e,f,g,h,i,j){var _=this
_.r=d
_.y=e
_.Q=f
_.c=g
_.d=h
_.e=i
_.a=j},
QD:function QD(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.eE$=d
_.c5$=e
_.a=null
_.b=f
_.c=null},
ag5:function ag5(){},
ag6:function ag6(){},
ag7:function ag7(){},
ag8:function ag8(){},
ag9:function ag9(){},
aga:function aga(){},
agb:function agb(){},
agc:function agc(){},
ax9(){var x=new Float64Array(4)
x[3]=1
return new A.ml(x)},
ml:function ml(d){this.a=d}},B,C
A=a.updateHolder(c[13],A)
B=c[0]
C=c[2]
A.ly.prototype={
d0(d){return B.Yr(this.a,this.b,d)}}
A.nG.prototype={
d0(d){var x=B.qp(this.a,this.b,d)
x.toString
return x}}
A.hb.prototype={
d0(d){var x=B.fm(this.a,this.b,d)
x.toString
return x}}
A.oH.prototype={
d0(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.di(new Float64Array(3)),a3=new B.di(new Float64Array(3)),a4=A.ax9(),a5=A.ax9(),a6=new B.di(new Float64Array(3)),a7=new B.di(new Float64Array(3))
this.a.IW(a2,a4,a6)
this.b.IW(a3,a5,a7)
x=1-a8
w=a2.i7(x).Y(0,a3.i7(a8))
v=a4.i7(x).Y(0,a5.i7(a8))
u=new Float64Array(4)
t=new A.ml(u)
t.bc(v)
t.Am(0)
s=a6.i7(x).Y(0,a7.i7(a8))
x=new Float64Array(16)
v=new B.av(x)
r=u[0]
q=u[1]
p=u[2]
o=u[3]
n=r+r
m=q+q
l=p+p
k=r*n
j=r*m
i=r*l
h=q*m
g=q*l
f=p*l
e=o*n
d=o*m
a0=o*l
a1=w.a
x[0]=1-(h+f)
x[1]=j+a0
x[2]=i-d
x[3]=0
x[4]=j-a0
x[5]=1-(k+f)
x[6]=g+e
x[7]=0
x[8]=i+d
x[9]=g-e
x[10]=1-(k+h)
x[11]=0
x[12]=a1[0]
x[13]=a1[1]
x[14]=a1[2]
x[15]=1
v.b5(0,s)
return v}}
A.w7.prototype={
a5(){return new A.QD(null,null,C.j)}}
A.QD.prototype={
kY(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.ag5()))
s=u.cx
u.a.toString
w=y.f
u.cx=w.a(d.$3(s,t,new A.ag6()))
s=y.d
u.cy=s.a(d.$3(u.cy,u.a.y,new A.ag7()))
v=u.db
u.a.toString
u.db=s.a(d.$3(v,t,new A.ag8()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.ag9()))
v=u.dy
u.a.toString
u.dy=w.a(d.$3(v,t,new A.aga()))
v=u.fr
u.a.toString
u.fr=y.w.a(d.$3(v,t,new A.agb()))
v=u.fx
u.a.toString
u.fx=x.a(d.$3(v,t,new A.agc()))},
F(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.geT(),n=q.CW
n=n==null?p:n.a2(0,o.gp(o))
x=q.cx
x=x==null?p:x.a2(0,o.gp(o))
w=q.cy
w=w==null?p:w.a2(0,o.gp(o))
v=q.db
v=v==null?p:v.a2(0,o.gp(o))
u=q.dx
u=u==null?p:u.a2(0,o.gp(o))
t=q.dy
t=t==null?p:t.a2(0,o.gp(o))
s=q.fr
s=s==null?p:s.a2(0,o.gp(o))
r=q.fx
r=r==null?p:r.a2(0,o.gp(o))
return B.bu(n,q.a.r,C.o,p,u,w,v,p,t,x,s,r,p)}}
A.ml.prototype={
bc(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
NI(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
if(o>0){x=Math.sqrt(o+1)
r=this.a
r[3]=x*0.5
x=0.5/x
r[0]=(s[5]-s[7])*x
r[1]=(s[6]-s[2])*x
r[2]=(s[1]-s[3])*x}else{if(r<q)w=q<p?2:1
else w=r<p?2:0
v=(w+1)%3
u=(w+2)%3
r=w*3
q=v*3
p=u*3
x=Math.sqrt(s[r+w]-s[q+v]-s[p+u]+1)
t=this.a
t[w]=x*0.5
x=0.5/x
t[3]=(s[q+u]-s[p+v])*x
t[v]=(s[r+v]+s[q+w])*x
t[u]=(s[r+u]+s[p+w])*x}},
Am(d){var x,w,v=Math.sqrt(this.gl3())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gl3(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gq(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
i7(d){var x=new Float64Array(4),w=new A.ml(x)
w.bc(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
R(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gacT(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
h=C.e.R(g,a4)
x=C.e.R(d,a1)
w=C.e.R(e,a2)
v=C.e.R(f,a3)
u=C.e.R(g,a3)
t=C.e.R(e,a1)
s=C.e.R(f,a4)
r=C.e.R(d,a2)
q=C.e.R(g,a2)
p=C.e.R(f,a1)
o=C.e.R(d,a3)
n=C.e.R(e,a4)
m=C.e.R(g,a1)
l=C.e.R(d,a4)
k=C.e.R(e,a3)
j=C.e.R(f,a2)
i=new Float64Array(4)
i[0]=h+x+w-v
i[1]=u+t+s-r
i[2]=q+p+o-n
i[3]=m-l-k-j
return new A.ml(i)},
Y(d,e){var x,w=new Float64Array(4),v=new A.ml(w)
v.bc(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
aa(d,e){var x,w=new Float64Array(4),v=new A.ml(w)
v.bc(this)
x=e.a
w[0]=w[0]-x[0]
w[1]=w[1]-x[1]
w[2]=w[2]-x[2]
w[3]=w[3]-x[3]
return v},
h(d,e){return this.a[e]},
l(d,e,f){this.a[e]=f},
i(d){var x=this.a
return B.i(x[0])+", "+B.i(x[1])+", "+B.i(x[2])+" @ "+B.i(x[3])}}
var z=a.updateTypes(["ly(@)","hb(@)","nG(@)","oH(@)"])
A.ag5.prototype={
$1(d){return new A.ly(y.k.a(d),null)},
$S:z+0}
A.ag6.prototype={
$1(d){return new A.hb(y.m.a(d),null)},
$S:z+1}
A.ag7.prototype={
$1(d){return new B.hQ(y.r.a(d),null)},
$S:143}
A.ag8.prototype={
$1(d){return new B.hQ(y.r.a(d),null)},
$S:143}
A.ag9.prototype={
$1(d){return new A.nG(y.a.a(d),null)},
$S:z+2}
A.aga.prototype={
$1(d){return new A.hb(y.m.a(d),null)},
$S:z+1}
A.agb.prototype={
$1(d){return new A.oH(y.E.a(d),null)},
$S:z+3}
A.agc.prototype={
$1(d){return new A.ly(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ar,[A.ly,A.nG,A.hb,A.oH])
w(A.w7,B.rq)
w(A.QD,B.lz)
x(B.bV,[A.ag5,A.ag6,A.ag7,A.ag8,A.ag9,A.aga,A.agb,A.agc])
w(A.ml,B.C)})()
B.e2(b.typeUniverse,JSON.parse('{"ly":{"ar":["h6?"],"ah":["h6?"],"ar.T":"h6?","ah.T":"h6?"},"nG":{"ar":["al"],"ah":["al"],"ar.T":"al","ah.T":"al"},"hb":{"ar":["cD"],"ah":["cD"],"ar.T":"cD","ah.T":"cD"},"oH":{"ar":["av"],"ah":["av"],"ar.T":"av","ah.T":"av"},"w7":{"Q":[],"f":[]},"QD":{"Z":["w7"]}}'))
var y=(function rtii(){var x=B.I
return{k:x("h6"),a:x("al"),r:x("fH"),m:x("cD"),E:x("av"),b:x("ly?"),e:x("nG?"),d:x("hQ?"),f:x("hb?"),w:x("oH?")}})()}
$__dart_deferred_initializers__["ftBAj5+1iZuGXDuNSLa9h3/+Zaw="] = $__dart_deferred_initializers__.current
