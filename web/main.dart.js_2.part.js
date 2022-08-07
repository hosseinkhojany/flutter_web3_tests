self.$__dart_deferred_initializers__=self.$__dart_deferred_initializers__||Object.create(null)
$__dart_deferred_initializers__.current=function(a,b,c,$){var A={lw:function lw(d,e){this.a=d
this.b=e},
apG(d,e,f,g,h,i){var x,w
if(f==null)x=null
else x=f
w=B.nC(h,i)
return new A.vY(d,x,w,e,g,null,null)},
nD:function nD(d,e){this.a=d
this.b=e},
h9:function h9(d,e){this.a=d
this.b=e},
oD:function oD(d,e){this.a=d
this.b=e},
vY:function vY(d,e,f,g,h,i,j){var _=this
_.r=d
_.y=e
_.Q=f
_.c=g
_.d=h
_.e=i
_.a=j},
Qw:function Qw(d,e,f){var _=this
_.fx=_.fr=_.dy=_.dx=_.db=_.cy=_.cx=_.CW=null
_.e=_.d=$
_.eD$=d
_.c5$=e
_.a=null
_.b=f
_.c=null},
afO:function afO(){},
afP:function afP(){},
afQ:function afQ(){},
afR:function afR(){},
afS:function afS(){},
afT:function afT(){},
afU:function afU(){},
afV:function afV(){},
awI(){var x=new Float64Array(4)
x[3]=1
return new A.mj(x)},
mj:function mj(d){this.a=d}},B,C
A=a.updateHolder(c[12],A)
B=c[0]
C=c[2]
A.lw.prototype={
d_(d){return B.Yk(this.a,this.b,d)}}
A.nD.prototype={
d_(d){var x=B.ql(this.a,this.b,d)
x.toString
return x}}
A.h9.prototype={
d_(d){var x=B.fl(this.a,this.b,d)
x.toString
return x}}
A.oD.prototype={
d_(a8){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2=new B.de(new Float64Array(3)),a3=new B.de(new Float64Array(3)),a4=A.awI(),a5=A.awI(),a6=new B.de(new Float64Array(3)),a7=new B.de(new Float64Array(3))
this.a.IQ(a2,a4,a6)
this.b.IQ(a3,a5,a7)
x=1-a8
w=a2.i6(x).Y(0,a3.i6(a8))
v=a4.i6(x).Y(0,a5.i6(a8))
u=new Float64Array(4)
t=new A.mj(u)
t.bc(v)
t.Aj(0)
s=a6.i6(x).Y(0,a7.i6(a8))
x=new Float64Array(16)
v=new B.au(x)
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
A.vY.prototype={
a6(){return new A.Qw(null,null,C.j)}}
A.Qw.prototype={
kX(d){var x,w,v,u=this,t=null,s=u.CW
u.a.toString
x=y.b
u.CW=x.a(d.$3(s,t,new A.afO()))
s=u.cx
u.a.toString
w=y.f
u.cx=w.a(d.$3(s,t,new A.afP()))
s=y.d
u.cy=s.a(d.$3(u.cy,u.a.y,new A.afQ()))
v=u.db
u.a.toString
u.db=s.a(d.$3(v,t,new A.afR()))
u.dx=y.e.a(d.$3(u.dx,u.a.Q,new A.afS()))
v=u.dy
u.a.toString
u.dy=w.a(d.$3(v,t,new A.afT()))
v=u.fr
u.a.toString
u.fr=y.w.a(d.$3(v,t,new A.afU()))
v=u.fx
u.a.toString
u.fx=x.a(d.$3(v,t,new A.afV()))},
F(d,e){var x,w,v,u,t,s,r,q=this,p=null,o=q.geR(),n=q.CW
n=n==null?p:n.a1(0,o.gp(o))
x=q.cx
x=x==null?p:x.a1(0,o.gp(o))
w=q.cy
w=w==null?p:w.a1(0,o.gp(o))
v=q.db
v=v==null?p:v.a1(0,o.gp(o))
u=q.dx
u=u==null?p:u.a1(0,o.gp(o))
t=q.dy
t=t==null?p:t.a1(0,o.gp(o))
s=q.fr
s=s==null?p:s.a1(0,o.gp(o))
r=q.fx
r=r==null?p:r.a1(0,o.gp(o))
return B.bG(n,q.a.r,C.o,p,u,w,v,p,t,x,s,r,p)}}
A.mj.prototype={
bc(d){var x=d.a,w=this.a
w[0]=x[0]
w[1]=x[1]
w[2]=x[2]
w[3]=x[3]},
NB(d){var x,w,v,u,t,s=d.a,r=s[0],q=s[4],p=s[8],o=0+r+q+p
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
Aj(d){var x,w,v=Math.sqrt(this.gl1())
if(v===0)return 0
x=1/v
w=this.a
w[0]=w[0]*x
w[1]=w[1]*x
w[2]=w[2]*x
w[3]=w[3]*x
return v},
gl1(){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return w*w+v*v+u*u+t*t},
gq(d){var x=this.a,w=x[0],v=x[1],u=x[2],t=x[3]
return Math.sqrt(w*w+v*v+u*u+t*t)},
i6(d){var x=new Float64Array(4),w=new A.mj(x)
w.bc(this)
x[3]=x[3]*d
x[2]=x[2]*d
x[1]=x[1]*d
x[0]=x[0]*d
return w},
R(a5,a6){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this.a,g=h[3],f=h[2],e=h[1],d=h[0],a0=a6.gacM(),a1=a0.h(0,3),a2=a0.h(0,2),a3=a0.h(0,1),a4=a0.h(0,0)
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
return new A.mj(i)},
Y(d,e){var x,w=new Float64Array(4),v=new A.mj(w)
v.bc(this)
x=e.a
w[0]=w[0]+x[0]
w[1]=w[1]+x[1]
w[2]=w[2]+x[2]
w[3]=w[3]+x[3]
return v},
a9(d,e){var x,w=new Float64Array(4),v=new A.mj(w)
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
var z=a.updateTypes(["lw(@)","h9(@)","nD(@)","oD(@)"])
A.afO.prototype={
$1(d){return new A.lw(y.k.a(d),null)},
$S:z+0}
A.afP.prototype={
$1(d){return new A.h9(y.m.a(d),null)},
$S:z+1}
A.afQ.prototype={
$1(d){return new B.hO(y.r.a(d),null)},
$S:147}
A.afR.prototype={
$1(d){return new B.hO(y.r.a(d),null)},
$S:147}
A.afS.prototype={
$1(d){return new A.nD(y.a.a(d),null)},
$S:z+2}
A.afT.prototype={
$1(d){return new A.h9(y.m.a(d),null)},
$S:z+1}
A.afU.prototype={
$1(d){return new A.oD(y.E.a(d),null)},
$S:z+3}
A.afV.prototype={
$1(d){return new A.lw(y.k.a(d),null)},
$S:z+0};(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.ar,[A.lw,A.nD,A.h9,A.oD])
w(A.vY,B.rk)
w(A.Qw,B.lx)
x(B.c4,[A.afO,A.afP,A.afQ,A.afR,A.afS,A.afT,A.afU,A.afV])
w(A.mj,B.C)})()
B.eM(b.typeUniverse,JSON.parse('{"lw":{"ar":["h5?"],"ah":["h5?"],"ar.T":"h5?","ah.T":"h5?"},"nD":{"ar":["al"],"ah":["al"],"ar.T":"al","ah.T":"al"},"h9":{"ar":["cA"],"ah":["cA"],"ar.T":"cA","ah.T":"cA"},"oD":{"ar":["au"],"ah":["au"],"ar.T":"au","ah.T":"au"},"vY":{"R":[],"f":[]},"Qw":{"a1":["vY"]}}'))
var y=(function rtii(){var x=B.O
return{k:x("h5"),a:x("al"),r:x("fF"),m:x("cA"),E:x("au"),b:x("lw?"),e:x("nD?"),d:x("hO?"),f:x("h9?"),w:x("oD?")}})()}
$__dart_deferred_initializers__["9S95hp6Kuw9Vh5emGABBwD4nRnE="] = $__dart_deferred_initializers__.current
